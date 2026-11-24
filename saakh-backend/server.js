require('dotenv').config();
const app = require('./src/app');
const db = require('./src/config/db');
const seedDatabase = require('./src/seed/seedData');

const PORT = process.env.PORT || 5000;

// Check if database needs seeding on first run
try {
    const vendorCount = db.prepare(`SELECT COUNT(*) as count FROM vendors`).get();
    if (!vendorCount || vendorCount.count === 0) {
        console.log('[Saakh Server] Fresh database detected. Running initial seed...');
        seedDatabase();
    } else {
        console.log(`[Saakh Server] Database ready with ${vendorCount.count} registered vendors.`);
    }
} catch (err) {
    console.error('[Saakh Server] Database check failed, initializing seed:', err);
    seedDatabase();
}

// Vercel par app.listen nahi chalta; local par chalta hai
if (!process.env.VERCEL) {
    const server = app.listen(PORT, () => {
        console.log(`=======================================================`);
        console.log(`  SAAKH BACKEND SERVER RUNNING ON PORT ${PORT}`);
        console.log(`  Health Check: http://localhost:${PORT}/api/health`);
        console.log(`=======================================================`);
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.error(`\n[PORT ${PORT} BUSY]: Another instance is already running on port ${PORT}!`);
            process.exit(1);
        } else {
            console.error('[Saakh Server Error]:', err);
        }
    });

    // Graceful shutdown
    process.on('SIGINT', () => {
        console.log('\n[Saakh Server] Gracefully shutting down...');
        server.close(() => {
            console.log('[Saakh Server] Closed HTTP server.');
            process.exit(0);
        });
    });
}

module.exports = app;
