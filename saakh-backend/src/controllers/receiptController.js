const { randomUUID, createHash } = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const db = require('../config/db');
const { MatchingEngine } = require('../services/matchingEngine');

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '../../uploads');
try {
    if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
    }
} catch (e) {
    // Vercel par folder read-only hota hai, isliye ignore karo
}

// 1. Upload & Reconcile Receipt
exports.uploadReceipt = (req, res, next) => {
    try {
        const vendorId = req.user.id;
        const { supplier_name, amount, bill_date, bill_number, raw_ocr_text } = req.body;

        const absAmount = Math.abs(Number(amount));
        if (!supplier_name || !absAmount || isNaN(absAmount)) {
            return res.status(400).json({ success: false, error: 'Valid supplier name and bill amount are required.' });
        }

        const dateStr = bill_date || new Date().toISOString().split('T')[0];
        const receiptId = 'r_' + randomUUID().slice(0, 10);
        const entryId = 'e_rcpt_' + randomUUID().slice(0, 8);
        const now = new Date().toISOString();

        // Calculate image hash (from file if uploaded via multer, or base64/random)
        let imagePath = null;
        let imageHash = null;

        if (req.file) {
            imagePath = req.file.path;
            const fileBuffer = fs.readFileSync(req.file.path);
            imageHash = createHash('sha256').update(fileBuffer).digest('hex');
        } else if (req.body.image_base64) {
            imageHash = createHash('sha256').update(req.body.image_base64).digest('hex');
            imagePath = `uploads/${receiptId}.jpg`;
        } else {
            // Synthetic hash based on supplier + amount + date
            imageHash = createHash('sha256').update(`${supplier_name}-${absAmount}-${dateStr}`).digest('hex');
        }

        // 1. Save to receipts table (initially unmatched)
        db.prepare(`
            INSERT INTO receipts (
                id, vendor_id, supplier_name, bill_number, amount, bill_date,
                image_path, image_hash, ocr_raw_text, is_matched_upi, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?)
        `).run(
            receiptId,
            vendorId,
            supplier_name.trim(),
            bill_number || `INV-${Math.floor(1000 + Math.random() * 9000)}`,
            absAmount,
            dateStr,
            imagePath,
            imageHash,
            raw_ocr_text || null,
            now
        );

        // 2. Insert into entries table (initially Trust Level 3: Unverified photo)
        const timeFormatted = '11:00 AM';
        db.prepare(`
            INSERT INTO entries (
                id, vendor_id, entry_date, entry_time, item, type, amount,
                trust_level, verification_label, is_confirmed, source, receipt_id,
                created_at, updated_at
            ) VALUES (?, ?, ?, ?, ?, 'Purchase', ?, 3, 'Unverified photo', 1, 'receipt', ?, ?, ?)
        `).run(
            entryId,
            vendorId,
            dateStr,
            timeFormatted,
            `${supplier_name.trim()} bill`,
            -absAmount,
            receiptId,
            now,
            now
        );

        const newReceipt = db.prepare(`SELECT * FROM receipts WHERE id = ?`).get(receiptId);

        // 3. EXECUTE RECONCILIATION ENGINE: Match with UPI payments (±2 days)
        const matchResult = MatchingEngine.matchReceiptWithUPI(newReceipt, vendorId);

        // Fetch the updated entry
        const updatedEntry = db.prepare(`SELECT * FROM entries WHERE id = ?`).get(entryId);

        return res.status(201).json({
            success: true,
            message: matchResult.matched
                ? 'Receipt uploaded & automatically MATCHED with UPI payment! Upgraded to Payment-verified.'
                : 'Receipt uploaded successfully. Awaiting matching UPI payment.',
            receipt: newReceipt,
            entry: {
                id: updatedEntry.id,
                item: updatedEntry.item,
                type: updatedEntry.type,
                amount: updatedEntry.amount,
                trustLevel: updatedEntry.trust_level,
                verificationLabel: updatedEntry.verification_label,
                badge: matchResult.badgeText
            },
            matchResult
        });
    } catch (err) {
        next(err);
    }
};

// 2. Get all receipts for vendor
exports.getReceipts = (req, res, next) => {
    try {
        const vendorId = req.user.id;
        const receipts = db.prepare(`
            SELECT r.*, u.reference_no as upi_ref, u.tx_date as upi_date
            FROM receipts r
            LEFT JOIN upi_transactions u ON u.matched_receipt_id = r.id
            WHERE r.vendor_id = ?
            ORDER BY r.bill_date DESC, r.created_at DESC
        `).all(vendorId);

        return res.json({ success: true, count: receipts.length, receipts });
    } catch (err) {
        next(err);
    }
};
