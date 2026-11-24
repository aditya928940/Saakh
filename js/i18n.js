/* Saakh Bilingual (English & Hindi) Translation Dictionary & Helpers */

const I18N = {
    en: {
        // App brand & core
        app_name: 'Saakh',
        tagline: 'Cash income, finally provable.',
        hero_desc: 'Saakh turns a vendor’s daily sales, receipts and payments into verified income that lenders can trust.',
        i_am_vendor: 'I’m a vendor',
        i_am_lender: 'I’m a lender',
        how_it_works: 'How it works',
        for_lenders: 'For lenders',
        trust_levels: 'Trust levels',

        // Landing Metrics & Cards
        est_monthly_income: 'Estimated monthly income',
        high_confidence: 'High confidence',
        medium_confidence: 'Medium confidence',
        low_confidence: 'Low confidence',
        per_month: 'per month',
        cross_checked_3_sources: 'Cross-checked against three independent sources',
        no_duplicate_receipts: 'No duplicate receipts or rate mismatches',
        consent_valid_until: 'Consent valid until 12 Feb 2027',
        stat_5_trust: 'Trust levels for every piece of evidence',
        stat_3_sources: 'Independent sources cross-checked for income',
        stat_100_consent: 'Consent-based. Vendors control who sees their data',
        speak_sale: 'Speak your sale',
        speak_sale_desc: 'Log cash sales and purchases in Hindi or English in seconds.',
        check_records: 'We check it against real records',
        check_records_desc: 'Saakh matches entries with UPI payments, utility bills, and supplier receipts.',
        lenders_see_evidence: 'Lenders see income with evidence',
        lenders_see_desc: 'Loan officers review a clear monthly range backed by verifiable proof.',
        every_number_proof: 'Every number shows its proof',
        level0_desc: 'Matched directly to UPI or bank settlement records.',
        level1_desc: 'Backed by digital or GST supplier bills.',
        level2_desc: 'Confirmed by the vendor’s regular wholesaler.',
        level3_desc: 'Paper receipt photo awaiting a payment match.',
        level4_desc: 'Voice-logged sale with no external match yet.',
        income_as_range: 'Income as a range, never a fake exact number',
        income_range_desc: 'See conservative monthly bounds derived from verified purchases and cash flow, with suggested EMI anchored to the lower end.',
        confidence_audit: 'Confidence you can audit',
        confidence_audit_desc: 'Inspect every underlying receipt, UPI match and duplicate-image check before underwriting.',
        final_decision: 'You make the final decision',
        final_decision_desc: 'Saakh surfaces evidence and risk flags while every approval stays in your hands.',
        footer_consent: 'Vendors control their data. Consent is required and can be withdrawn anytime.',
        demo_synthetic: 'Demo uses synthetic data',

        // Login Screen
        sign_in_to_saakh: 'Sign in to Saakh',
        vendors_control_data: 'Vendors control who sees their data',
        numbers_show_proof: 'Every number shows its proof',
        lenders_only_shared: 'Lenders only see what a vendor has shared',
        consent_first_desc: 'Consent-first income proof for India’s street vendors and micro-enterprises',
        lenders_sign_in_note: 'Lenders sign in with a work email and are only shown vendors who have given consent.',
        mobile_number: 'Mobile number',
        enter_mobile: 'Enter 10-digit mobile number',
        send_otp: 'Send OTP',
        enter_otp: 'Enter 6-digit OTP',
        verify_continue: 'Verify and continue',
        never_share_number: 'We never share your number with lenders.',
        work_email: 'Work email',
        password: 'Password',
        enter_password: 'Enter your password',
        sign_in: 'Sign in',
        sign_out: 'Sign out',
        need_access: 'Need access? Ask your organisation’s admin to invite you.',
        demo_any_input: 'Demo: any input works. No real data is used.',
        signed_in_as_lender: 'Signed in as a lender: you will only see vendors who have shared their profile with your organisation.',

        // Navigation & Roles
        nav_home: 'Home',
        nav_ledger: 'Ledger',
        nav_score: 'Score',
        nav_privacy: 'Privacy',
        nav_applications: 'Applications',
        nav_flagged: 'Flagged',
        role_ramesh: 'Vegetable vendor · Kanpur',
        role_priya: 'Loan officer',
        loan_officer_priya: 'Loan officer: Priya Sharma',

        // Vendor Home
        hi_ramesh: 'Hi Ramesh',
        tap_say_sale: 'Tap and say your sale',
        voice_example: 'Example: ‘Sold chips for 20 rupees’',
        today_so_far: 'Today so far',
        sales_count: '%s sales today',
        sales: 'Sales',
        purchases: 'Purchases',
        from_n_sales: 'from %s sales',
        toast_entry_saved: 'Entry updated successfully',
        toast_entry_added: 'Entry added to ledger',
        add_receipt: 'Add receipt',
        upload_upi: 'Upload UPI statement',
        my_score: 'My score',
        last_7_days: 'Last 7 days',
        daily_sales: 'Daily sales',
        log_5_more_days: 'Log 5 more days this month to raise your score',
        latest_entries: 'Latest entries',
        view_full_ledger: 'View full ledger',
        your_data_sources: 'Your data sources',
        source_voice: 'Voice sales log',
        source_receipts: 'Receipts',
        source_upi: 'UPI statement',
        source_utility: 'Utility bills',
        source_shg: 'Self-help group',
        connect: 'Connect',
        add: 'Add',
        active_entries_today: 'Active, %s entries today',
        n_verified: '%s verified',
        not_connected: 'Not connected',
        on_time_6_months: 'On time, 6 months',
        not_added: 'Not added',

        // Voice Screen
        listening: 'Listening...',
        ready: 'Ready',
        speak_prompt: 'Speak in Hindi or English. Say what you sold or bought.',
        takes_5_sec: 'Takes about 5 seconds. You can edit before saving.',
        what_hearing: 'What we’re hearing',
        voice_saved_proof: 'Your voice is saved as proof with this entry',
        browser_mic_block: 'If your browser blocks the microphone, type or edit the sentence above.',
        cancel: 'Cancel',
        done: 'Done',
        how_raises_score: 'How this raises your score',
        confirmed_saved_voice: 'Confirmed entries are saved with your voice',
        matched_counts_most: 'Matched to UPI or receipts counts the most',
        daily_logging_builds: 'Daily logging builds your history',

        // Confirm Screen
        did_we_hear_right: 'Did we hear you right?',
        what_you_said: 'What you said',
        saved_with_recording: 'Saved with your voice recording as proof.',
        what_happens_after_save: 'What happens after you save',
        added_to_today_ledger: 'The entry is added to today’s ledger',
        saved_with_voice_proof: 'It is saved with your voice recording as proof',
        if_matches_upi_goes_up: 'If it matches a UPI payment or receipt, its trust level goes up',
        what_we_understood: 'What we understood',
        field_type: 'Type',
        field_item: 'Item',
        field_quantity: 'Quantity',
        field_price_each: 'Price each (₹)',
        field_payment: 'Payment',
        cash: 'Cash',
        total: 'Total',
        calculated_auto: 'Calculated automatically',
        yes_save: 'Yes, save this',
        record_again: 'Record again',
        saved_entries_marked: 'Saved entries are marked as confirmed by you, with your voice recording attached.',
        type_sale: 'Sale',
        type_purchase: 'Purchase',

        // Ledger Screen
        all_dates_joined: 'All dates since you joined',
        month_sales: 'Month sales',
        month_profit: 'Month profit',
        jump_to_date: 'Jump to a date',
        joined_saakh_on: 'Joined Saakh on %s. Pick a month, then any date, to view or edit its entries.',
        today: 'Today',
        estimated_profit: 'Estimated profit',
        no_entries_date: 'No entries for this date yet. Add one below.',
        add_entry_date: 'Add an entry for this date',
        time: 'Time',
        amount: 'Amount',
        verification: 'Verification',
        edit: 'Edit',
        delete: 'Delete',
        confirm: 'Confirm',
        save: 'Save',
        editing: 'Editing',
        add_entry_btn: 'Add entry',
        self_reported_notice: 'Entries you add or edit are marked as self-reported, because they are not matched to a UPI payment or receipt.',
        no_log: 'No log',
        add_entry_voice: 'Add entry by voice',

        // Score Screen
        listen: 'Listen',
        hear_hindi_english: 'Hear this in Hindi or English',
        why_this_score: 'Why this score',
        log_sales_almost_daily: 'You log sales almost every day',
        pay_supplier_on_time: 'You pay your supplier on time',
        electricity_on_time: 'Your electricity bill is paid on time',
        how_verified: 'How your data is verified',
        how_to_improve: 'How to improve',
        upload_upi_improve: 'Upload your UPI statement to verify more of your sales',
        who_can_see: 'Who can see your profile',
        privacy_notice: 'Voice recordings and raw documents are never shared unless you allow it',
        manage_privacy: 'Manage privacy',
        connecting_more_sources: 'Connecting more sources raises your confidence level.',

        // Privacy & Consent
        privacy_sharing: 'Privacy and sharing',
        lender_sees_when_allow: 'A lender only sees your profile after you say yes. You can stop sharing anytime and they lose access immediately.',
        view_new_request: 'View new request from Kanpur Microfinance',
        who_viewed_profile: 'Who viewed your profile',
        every_view_recorded: 'Every view is recorded and visible only to you.',
        need_help: 'Need help?',
        need_help_desc: 'Questions about your data? Ask a trusted person or contact Saakh support.',
        contact_support: 'Contact support',
        what_lenders_see: 'What lenders can see',
        shared_when_allow: 'Shared when you allow',
        never_shared_unless: 'Never shared unless you choose',
        your_data_controls: 'Your data controls',
        download_my_data: 'Download my data',
        download_desc: 'Get a copy of everything Saakh holds about you',
        download: 'Download',
        delete_voice: 'Delete my voice recordings',
        delete_voice_desc: 'Removes recordings, keeps your confirmed entries',
        delete_account: 'Delete my account and data',
        delete_account_desc: 'Permanent. All sharing stops.',
        active: 'Active',
        stopped: 'Stopped',
        sharing_on: 'Sharing on',
        sharing_off: 'Sharing off',
        shared_until: 'Shared until %s',
        consent_request: 'Consent request',
        new_request: 'New request',
        kanpur_mfi_wants: 'Kanpur Microfinance wants to view your profile',
        verified_lender: 'Verified lender',
        allow: 'Allow',
        decline: 'Decline',
        ask_later: 'Ask me later',
        block_lender: 'Block this lender',
        saying_no_not_affects: 'Saying no does not affect your score.',
        about_this_lender: 'About this lender',
        what_happens_next: 'What happens next',
        your_sharing_right_now: 'Your sharing right now',
        lender_has_access: '1 lender has access',
        no_lender_has_access: 'No lender has access',
        consent_duration: 'How long',
        duration_1_month: '1 month (until 23 Dec 2026)',
        duration_3_months: '3 months (until 23 Feb 2027)',
        duration_6_months: '6 months (until 23 May 2027)',

        // Lender Applications
        applications: 'Applications',
        new_applications_week: 'New applications this week',
        avg_confidence: 'Average confidence',
        purchases_payment_verified: 'Purchases payment-verified',
        flagged: 'Flagged',
        business_type: 'Business type',
        city: 'City',
        confidence: 'Confidence',
        consent: 'Consent',
        vendor: 'Vendor',
        evidence_mix: 'Evidence mix',
        suggested_max_emi: 'Suggested max EMI',
        consent_valid: 'Consent valid',
        consent_pending: 'Consent pending',
        consent_withdrawn: 'Consent withdrawn',
        awaiting_consent: 'Awaiting consent',
        hidden_until_consent: 'Hidden until the vendor gives consent',
        review: 'Review',
        request_consent: 'Request consent',
        flagged_receipt_mismatch: 'Flagged: receipt mismatch',
        showing_n_of_total: 'Showing 7 of 24 applications',
        suggested_emi_note: 'Suggested EMI is based on the lower end of each income range. The final decision is always yours.',

        // Vendor Review (Ramesh & Vikas)
        request_more_info: 'Request more info',
        approve_for_offer: 'Approve for offer',
        reject_profile: 'Reject profile',
        request_field_verification: 'Request field verification',
        risk_checks: 'Risk checks',
        no_duplicate_rcpt: 'No duplicate receipts',
        claims_match_pattern: 'Claims match purchase pattern',
        rates_within_range: 'Rates within market range',
        income_cross_check: 'Income cross-check',
        all_sources_agree: 'All three sources agree',
        sources_not_agree: 'Sources do not agree',
        supplier_purchases: 'Supplier purchases',
        daily_voice_log: 'Daily voice log',
        upi_inflow: 'UPI inflow',
        score_breakdown: 'Score breakdown',
        hard_data_counts_more: 'Hard data counts more than self-reported data',
        flagged_3_receipts: '3 receipts flagged. Do not approve without field verification.',
        cannot_estimate_reliably: 'Cannot be estimated reliably',
        claimed_income: 'Claimed income ₹60,000 per month',
        purchases_support_only: 'Purchases support only ₹25,000 per month (claim is 2.4 times higher)',
        dup_images_found: 'Duplicate receipt images found',
        all_12_round: 'All 12 receipts are round amounts',
        rates_far_above: 'Rates far above market',
        bot_burst_check: '42 voice entries recorded within 3 minutes',
        no_consent: 'No consent',
        vendor_stopped_sharing: 'This vendor has stopped sharing their profile, so you can no longer view it. Access ended immediately.',
        back_to_applications: 'Back to applications',
        tab_receipts: 'Receipts',
        tab_upi_matches: 'UPI matches',
        tab_voice_log: 'Voice log',
        tab_utility: 'Utility bills',
        tab_shg: 'SHG',

        // Trust Level Badges
        tl_0: 'Payment-verified',
        tl_1: 'Invoice-verified',
        tl_2: 'Supplier-confirmed',
        tl_3: 'Unverified photo',
        tl_4: 'Self-reported',
        tl_confirmed_by_you: 'Confirmed by you',
        tl_edited_by_you: 'Edited by you',
        tl_matched_to_upi: 'Matched to UPI',
        tl_receipt_verified: 'Receipt verified',
        tl_not_yet_confirmed: 'Not yet confirmed',

        // Toasts & Messages
        toast_demo_otp: 'Demo: no real OTP is sent. Type any 6 digits.',
        toast_enter_price: 'Please enter a price',
        toast_enter_amount: 'Enter an amount',
        toast_enter_item_amount: 'Enter an item and an amount',
        toast_entry_added: 'Entry added',
        toast_entry_deleted: 'Entry deleted',
        toast_receipt_demo: 'Receipt upload is not part of this demo yet',
        toast_upi_demo: 'UPI upload is not part of this demo yet',
        toast_filters_demo: 'Filters are visual only in this demo',
        toast_support_demo: 'Support is not part of this demo',
        toast_shg_demo: 'SHG records are not part of this demo yet',
        toast_request_sent: 'Demo: request sent',
        toast_approved_offer: 'Demo: approved for offer',
        toast_profile_rejected: 'Demo: profile rejected',
        toast_field_verify_req: 'Demo: field verification requested',
        toast_nothing_changed: 'Demo only: nothing was changed',
        toast_lender_not_blocked: 'Demo only: lender was not blocked',
        today_prefix: 'Today · ',
        month: 'Month',
        item_placeholder: 'e.g. Tomatoes 5 kg',
        amount_rs: 'Amount (₹)',
        delete_entry: 'Delete entry',
        enter_mobile_10_digits: 'Please enter a valid 10-digit mobile number',
        sending_otp: 'Sending OTP...',
        otp_sent_success: 'OTP sent successfully to your mobile',
        otp_send_failed: 'Failed to send OTP',
        enter_full_otp: 'Please enter the complete 6-digit OTP',
        verifying: 'Verifying...',
        login_success: 'Signed in successfully',
        signing_in: 'Signing in...',
        resend_in_seconds: 'Resend in %ss',
        resend_otp: 'Resend OTP',
        network_error: 'Cannot connect to backend server. Verify port 5000 is running.',
        vendor_registration: 'Vendor Registration',
        account_settings: 'Account Settings',
        profile: 'Profile'
    },
    hi: {
        // App brand & core
        app_name: 'साख',
        tagline: 'नकद आय, अब प्रमाणित और विश्वसनीय।',
        hero_desc: 'साख रोज़ाना की नकद बिक्री, खरीद रसीदों और भुगतानों को बैंक-स्तरीय सत्यापित रिकॉर्ड में बदलता है जिसपर ऋणदाता भरोसा कर सकें।',
        i_am_vendor: 'मैं विक्रेता हूँ',
        i_am_lender: 'मैं ऋणदाता हूँ',
        how_it_works: 'यह कैसे काम करता है',
        for_lenders: 'ऋणदाताओं के लिए',
        trust_levels: 'विश्वास स्तर',

        // Landing Metrics & Cards
        est_monthly_income: 'अनुमानित मासिक आय',
        high_confidence: 'उच्च विश्वसनीयता',
        medium_confidence: 'मध्यम विश्वसनीयता',
        low_confidence: 'कम विश्वसनीयता',
        per_month: 'प्रति माह',
        cross_checked_3_sources: 'तीन स्वतंत्र स्रोतों से क्रॉस-सत्यापित',
        no_duplicate_receipts: 'कोई नकली रसीद या दर विसंगति नहीं',
        consent_valid_until: 'सहमति 12 फ़रवरी 2027 तक मान्य',
        stat_5_trust: 'प्रत्येक प्रमाण के लिए 5 विश्वास स्तर',
        stat_3_sources: 'आय के लिए 3 स्वतंत्र स्रोतों से सत्यापन',
        stat_100_consent: '100% सहमति-आधारित। विक्रेता तय करते हैं कौन डेटा देखे',
        speak_sale: 'अपनी बिक्री बोलें',
        speak_sale_desc: 'सेकंडों में हिंदी या अंग्रेजी में अपनी नकद बिक्री और खरीद बोलकर दर्ज करें।',
        check_records: 'हम वास्तविक रिकॉर्ड से मिलान करते हैं',
        check_records_desc: 'साख प्रविष्टियों को UPI बैंक निपटान, बिजली बिल और मंडी रसीदों से मिलाता है।',
        lenders_see_evidence: 'ऋणदाता प्रमाण सहित आय देखते हैं',
        lenders_see_desc: 'ऋण अधिकारी सत्यापन योग्य सबूतों के साथ निष्पक्ष मासिक आय की समीक्षा करते हैं।',
        every_number_proof: 'हर आंकड़ा अपना प्रमाण दिखाता है',
        level0_desc: 'सीधे UPI या बैंक निपटान रिकॉर्ड से मिलान।',
        level1_desc: 'डिजिटल या GST आपूर्तिकर्ता बिलों द्वारा समर्थित।',
        level2_desc: 'विक्रेता के नियमित थोक व्यापारी द्वारा पुष्टीकृत।',
        level3_desc: 'कागजी रसीद फोटो जो बैंक भुगतान मिलान की प्रतीक्षा में है।',
        level4_desc: 'वॉइस-लॉग बिक्री जिसका अभी कोई बाहरी मिलान नहीं है।',
        income_as_range: 'आय एक सीमा में, कभी कोई नकली निश्चित आंकड़ा नहीं',
        income_range_desc: 'सत्यापित खरीद और नकदी प्रवाह से मासिक सीमा देखें, जिसमें सुझाई गई EMI निचले छोर पर आधारित है।',
        confidence_audit: 'ऐसा विश्वास जिसका ऑडिट हो सके',
        confidence_audit_desc: 'लोन देने से पहले प्रत्येक रसीद, UPI मिलान और डुप्लिकेट इमेज जाँच की समीक्षा करें।',
        final_decision: 'अंतिम निर्णय आपका है',
        final_decision_desc: 'साख प्रमाण और जोखिम ध्वज सामने लाता है, जबकि प्रत्येक स्वीकृति आपके हाथ में रहती है।',
        footer_consent: 'विक्रेता अपने डेटा को नियंत्रित करते हैं। सहमति आवश्यक है और इसे कभी भी वापस लिया जा सकता है।',
        demo_synthetic: 'डेमो कृत्रिम डेटा का उपयोग करता है',

        // Login Screen
        sign_in_to_saakh: 'साख में साइन इन करें',
        vendors_control_data: 'विक्रेता तय करते हैं कि उनका डेटा कौन देखे',
        numbers_show_proof: 'हर आंकड़ा अपना प्रमाण दिखाता है',
        lenders_only_shared: 'ऋणदाता केवल वही देखते हैं जो विक्रेता ने साझा किया है',
        consent_first_desc: 'भारत के रेहड़ी-पटरी और सूक्ष्म उद्यमों के लिए सहमति-प्रथम आय प्रमाण',
        lenders_sign_in_note: 'ऋणदाता कार्य ईमेल से साइन इन करते हैं और केवल सहमति देने वाले विक्रेताओं को देखते हैं।',
        mobile_number: 'मोबाइल नंबर',
        enter_mobile: '10-अंकों का मोबाइल नंबर दर्ज करें',
        send_otp: 'OTP भेजें',
        enter_otp: '6-अंकों का OTP दर्ज करें',
        verify_continue: 'सत्यापित करें और आगे बढ़ें',
        never_share_number: 'हम आपका नंबर कभी ऋणदाताओं से साझा नहीं करते।',
        work_email: 'कार्य ईमेल',
        password: 'पासवर्ड',
        enter_password: 'अपना पासवर्ड दर्ज करें',
        sign_in: 'साइन इन करें',
        sign_out: 'साइन आउट',
        need_access: 'पहुँच चाहिए? अपने संगठन के एडमिन से आमंत्रित करने को कहें।',
        demo_any_input: 'डेमो: कोई भी इनपुट काम करता है। कोई वास्तविक डेटा उपयोग नहीं होता।',
        signed_in_as_lender: 'ऋणदाता के रूप में साइन इन: आप केवल उन्हीं विक्रेताओं को देखेंगे जिन्होंने सहमति दी है।',

        // Navigation & Roles
        nav_home: 'होम',
        nav_ledger: 'बहीखाता',
        nav_score: 'स्कोर',
        nav_privacy: 'गोपनीयता',
        nav_applications: 'आवेदन',
        nav_flagged: 'ध्वजांकित',
        role_ramesh: 'सब्जी विक्रेता · कानपुर',
        role_priya: 'ऋण अधिकारी',
        loan_officer_priya: 'ऋण अधिकारी: प्रिया शर्मा',

        // Vendor Home
        hi_ramesh: 'नमस्ते रमेश',
        tap_say_sale: 'दबाएं और अपनी बिक्री बोलें',
        voice_example: 'उदाहरण: ‘बीस रुपये के चिप्स बेचे’',
        today_so_far: 'आज अब तक',
        sales_count: '%s बिक्री आज',
        sales: 'बिक्री',
        purchases: 'खरीद',
        from_n_sales: '%s बिक्री से',
        toast_entry_saved: 'प्रविष्टि सफलतापूर्वक अपडेट की गई',
        toast_entry_added: 'बहीखाते में प्रविष्टि जोड़ी गई',
        add_receipt: 'रसीद जोड़ें',
        upload_upi: 'UPI स्टेटमेंट अपलोड करें',
        my_score: 'मेरा स्कोर',
        last_7_days: 'पिछले 7 दिन',
        daily_sales: 'दैनिक बिक्री',
        log_5_more_days: 'अपना स्कोर बढ़ाने के लिए इस महीने 5 और दिन बिक्री दर्ज करें',
        latest_entries: 'हालिया प्रविष्टियां',
        view_full_ledger: 'पूरा बहीखाता देखें',
        your_data_sources: 'आपके डेटा स्रोत',
        source_voice: 'वॉइस बिक्री लॉग',
        source_receipts: 'रसीदें',
        source_upi: 'UPI स्टेटमेंट',
        source_utility: 'बिजली/उपयोगिता बिल',
        source_shg: 'स्वयं सहायता समूह',
        connect: 'जोड़ें',
        add: 'जोड़ें',
        active_entries_today: 'सक्रिय, आज %s प्रविष्टियां',
        n_verified: '%s सत्यापित',
        not_connected: 'कनेक्ट नहीं है',
        on_time_6_months: 'समय पर, 6 महीने',
        not_added: 'जोड़ा नहीं गया',

        // Voice Screen
        listening: 'सुन रहे हैं...',
        ready: 'तैयार',
        speak_prompt: 'हिंदी या अंग्रेजी में बोलें। बताएं आपने क्या बेचा या खरीदा।',
        takes_5_sec: 'लगभग 5 सेकंड लगते हैं। आप सहेजने से पहले संपादित कर सकते हैं।',
        what_hearing: 'जो हमें सुनाई दे रहा है',
        voice_saved_proof: 'आपकी आवाज़ इस प्रविष्टि के प्रमाण के रूप में सहेजी गई है',
        browser_mic_block: 'यदि ब्राउज़र माइक्रोफ़ोन रोकता है, तो ऊपर वाक्य टाइप या संपादित करें।',
        cancel: 'रद्द करें',
        done: 'पूर्ण',
        how_raises_score: 'यह आपका स्कोर कैसे बढ़ाता है',
        confirmed_saved_voice: 'पुष्टीकृत प्रविष्टियां आपकी आवाज़ के साथ सुरक्षित रहती हैं',
        matched_counts_most: 'UPI या रसीदों से मिलान सबसे अधिक महत्वपूर्ण है',
        daily_logging_builds: 'दैनिक प्रविष्टि आपका वित्तीय इतिहास बनाती है',

        // Confirm Screen
        did_we_hear_right: 'क्या हमने सही सुना?',
        what_you_said: 'आपने जो कहा',
        saved_with_recording: 'आपकी वॉइस रिकॉर्डिंग के प्रमाण के साथ सुरक्षित।',
        what_happens_after_save: 'सहेजने के बाद क्या होता है',
        added_to_today_ledger: 'प्रविष्टि आज के बहीखाते में जोड़ी जाती है',
        saved_with_voice_proof: 'यह आपकी आवाज़ रिकॉर्डिंग के प्रमाण के साथ सुरक्षित होता है',
        if_matches_upi_goes_up: 'यदि यह UPI या रसीद से मेल खाता है, तो इसका विश्वास स्तर बढ़ जाता है',
        what_we_understood: 'हमने जो समझा',
        field_type: 'प्रकार',
        field_item: 'सामान',
        field_quantity: 'मात्रा',
        field_price_each: 'प्रति दर (₹)',
        field_payment: 'भुगतान',
        cash: 'नकद',
        total: 'कुल',
        calculated_auto: 'स्वतः गणना की गई',
        yes_save: 'हाँ, इसे सहेजें',
        record_again: 'पुनः रिकॉर्ड करें',
        saved_entries_marked: 'सहेजी गई प्रविष्टियां आपके द्वारा पुष्टीकृत चिह्नित होती हैं और आवाज़ संलग्न रहती है।',
        type_sale: 'बिक्री',
        type_purchase: 'खरीद',

        // Ledger Screen
        all_dates_joined: 'जुड़ने के बाद से सभी तिथियां',
        month_sales: 'मासिक बिक्री',
        month_profit: 'मासिक लाभ',
        jump_to_date: 'तिथि पर जाएं',
        joined_saakh_on: '%s को साख से जुड़े। प्रविष्टियां देखने या संपादित करने के लिए कोई भी महीना या तारीख चुनें।',
        today: 'आज',
        estimated_profit: 'अनुमानित लाभ',
        no_entries_date: 'इस तारीख के लिए अभी कोई प्रविष्टि नहीं है। नीचे जोड़ें।',
        add_entry_date: 'इस तारीख के लिए प्रविष्टि जोड़ें',
        time: 'समय',
        amount: 'राशि',
        verification: 'सत्यापन',
        edit: 'संपादित करें',
        delete: 'हटाएं',
        confirm: 'पुष्टि करें',
        save: 'सहेजें',
        editing: 'संपादन जारी',
        add_entry_btn: 'प्रविष्टि जोड़ें',
        self_reported_notice: 'आपके द्वारा जोड़ी या संपादित की गई प्रविष्टियों को स्व-रिपोर्ट के रूप में चिह्नित किया जाता है क्योंकि वे अभी UPI से नहीं मिली हैं।',
        no_log: 'कोई प्रविष्टि नहीं',
        add_entry_voice: 'वॉइस से प्रविष्टि जोड़ें',

        // Score Screen
        listen: 'सुनें',
        hear_hindi_english: 'इसे हिंदी या अंग्रेजी में सुनें',
        why_this_score: 'यह स्कोर क्यों है',
        log_sales_almost_daily: 'आप लगभग हर दिन बिक्री दर्ज करते हैं',
        pay_supplier_on_time: 'आप अपने आपूर्तिकर्ता को समय पर भुगतान करते हैं',
        electricity_on_time: 'आपका बिजली बिल समय पर भरा जाता है',
        how_verified: 'आपका डेटा कैसे सत्यापित है',
        how_to_improve: 'स्कोर कैसे सुधारें',
        upload_upi_improve: 'अपनी अधिक बिक्री को सत्यापित करने के लिए UPI स्टेटमेंट अपलोड करें',
        who_can_see: 'आपकी प्रोफ़ाइल कौन देख सकता है',
        privacy_notice: 'वॉइस रिकॉर्डिंग और मूल दस्तावेज़ कभी साझा नहीं किए जाते जब तक आप अनुमति न दें',
        manage_privacy: 'गोपनीयता प्रबंधित करें',
        connecting_more_sources: 'अधिक स्रोत जोड़ने से आपका विश्वसनीयता स्तर बढ़ता है।',

        // Privacy & Consent
        privacy_sharing: 'गोपनीयता और साझाकरण',
        lender_sees_when_allow: 'ऋणदाता केवल आपकी सहमति के बाद ही प्रोफ़ाइल देख सकते हैं। आप कभी भी साझाकरण रोक सकते हैं और उनकी पहुँच तुरंत समाप्त हो जाती है।',
        view_new_request: 'कानपुर माइक्रोफ़ाइनेंस का नया अनुरोध देखें',
        who_viewed_profile: 'किसने आपकी प्रोफ़ाइल देखी',
        every_view_recorded: 'प्रत्येक दृश्य दर्ज किया जाता है और केवल आपको दिखाई देता है।',
        need_help: 'मदद चाहिए?',
        need_help_desc: 'डेटा के बारे में प्रश्न? किसी विश्वस्त व्यक्ति से पूछें या साख सहायता से संपर्क करें।',
        contact_support: 'सहायता से संपर्क करें',
        what_lenders_see: 'ऋणदाता क्या देख सकते हैं',
        shared_when_allow: 'अनुमति देने पर साझा',
        never_shared_unless: 'कभी साझा नहीं जब तक आप न चाहें',
        your_data_controls: 'आपके डेटा नियंत्रण',
        download_my_data: 'मेरा डेटा डाउनलोड करें',
        download_desc: 'साख के पास आपके बारे में जो कुछ भी है उसकी एक प्रति प्राप्त करें',
        download: 'डाउनलोड',
        delete_voice: 'मेरी वॉइस रिकॉर्डिंग हटाएं',
        delete_voice_desc: 'रिकॉर्डिंग हटाता है, आपकी पुष्टीकृत प्रविष्टियां रखता है',
        delete_account: 'मेरा खाता और डेटा हटाएं',
        delete_account_desc: 'स्थायी। सारा साझाकरण तुरंत बंद हो जाता है।',
        active: 'सक्रिय',
        stopped: 'रोकी गई',
        sharing_on: 'साझाकरण चालू',
        sharing_off: 'साझाकरण बंद',
        shared_until: '%s तक साझा',
        consent_request: 'सहमति अनुरोध',
        new_request: 'नया अनुरोध',
        kanpur_mfi_wants: 'कानपुर माइक्रोफ़ाइनेंस आपकी प्रोफ़ाइल देखना चाहता है',
        verified_lender: 'सत्यापित ऋणदाता',
        allow: 'अनुमति दें',
        decline: 'अस्वीकार करें',
        ask_later: 'बाद में पूछें',
        block_lender: 'इस ऋणदाता को ब्लॉक करें',
        saying_no_not_affects: 'ना कहने से आपके स्कोर पर कोई असर नहीं पड़ता।',
        about_this_lender: 'इस ऋणदाता के बारे में',
        what_happens_next: 'आगे क्या होता है',
        your_sharing_right_now: 'वर्तमान में आपका साझाकरण',
        lender_has_access: '1 ऋणदाता के पास पहुँच है',
        no_lender_has_access: 'किसी ऋणदाता के पास पहुँच नहीं है',
        consent_duration: 'सहमति की अवधि',
        duration_1_month: '1 महीना (23 दिसंबर 2026 तक)',
        duration_3_months: '3 महीने (23 फ़रवरी 2027 तक)',
        duration_6_months: '6 महीने (23 मई 2027 तक)',

        // Lender Applications
        applications: 'आवेदन सूची',
        new_applications_week: 'इस सप्ताह नए आवेदन',
        avg_confidence: 'औसत विश्वसनीयता',
        purchases_payment_verified: 'भुगतान-सत्यापित खरीद',
        flagged: 'ध्वजांकित',
        business_type: 'व्यवसाय प्रकार',
        city: 'शहर',
        confidence: 'विश्वसनीयता',
        consent: 'सहमति',
        vendor: 'विक्रेता',
        evidence_mix: 'प्रमाण मिश्रण',
        suggested_max_emi: 'सुझावित अधिकतम EMI',
        consent_valid: 'सहमति मान्य',
        consent_pending: 'सहमति लंबित',
        consent_withdrawn: 'सहमति वापस',
        awaiting_consent: 'सहमति की प्रतीक्षा',
        hidden_until_consent: 'जब तक विक्रेता सहमति न दे तब तक छिपा हुआ',
        review: 'समीक्षा करें',
        request_consent: 'सहमति मांगें',
        flagged_receipt_mismatch: 'ध्वजांकित: रसीद बेमेल',
        showing_n_of_total: '24 में से 7 आवेदन दिखाए जा रहे हैं',
        suggested_emi_note: 'सुझावित EMI प्रत्येक आय सीमा के निचले सिरे पर आधारित है। अंतिम निर्णय हमेशा आपका है।',

        // Vendor Review (Ramesh & Vikas)
        request_more_info: 'अधिक जानकारी मांगें',
        approve_for_offer: 'ऑफ़र के लिए स्वीकृत करें',
        reject_profile: 'प्रोफ़ाइल अस्वीकार करें',
        request_field_verification: 'क्षेत्रीय सत्यापन का अनुरोध करें',
        risk_checks: 'जोखिम जाँच',
        no_duplicate_rcpt: 'कोई डुप्लिकेट रसीद नहीं',
        claims_match_pattern: 'दावे खरीद पैटर्न से मेल खाते हैं',
        rates_within_range: 'दरें बाज़ार सीमा के भीतर हैं',
        income_cross_check: 'आय क्रॉस-चेक',
        all_sources_agree: 'तीनों स्रोत सहमत हैं',
        sources_not_agree: 'स्रोत सहमत नहीं हैं',
        supplier_purchases: 'आपूर्तिकर्ता खरीद',
        daily_voice_log: 'दैनिक वॉइस लॉग',
        upi_inflow: 'UPI आवक',
        score_breakdown: 'स्कोर विवरण',
        hard_data_counts_more: 'ठोस डेटा स्व-रिपोर्ट की तुलना में अधिक गिना जाता है',
        flagged_3_receipts: '3 रसीदों पर संदेह है। बिना क्षेत्रीय सत्यापन के स्वीकृत न करें।',
        cannot_estimate_reliably: 'विश्वसनीय रूप से अनुमान नहीं लगाया जा सकता',
        claimed_income: 'दावा की गई आय ₹60,000 प्रति माह',
        purchases_support_only: 'खरीद केवल ₹25,000 का समर्थन करती है (दावा 2.4 गुना अधिक है)',
        dup_images_found: 'डुप्लिकेट रसीद छवियां पाई गईं',
        all_12_round: 'सभी 12 रसीदें गोल आंकड़े हैं',
        rates_far_above: 'दरें बाज़ार से कहीं अधिक',
        bot_burst_check: '3 मिनट में 42 वॉइस प्रविष्टियां दर्ज की गईं',
        no_consent: 'सहमति नहीं है',
        vendor_stopped_sharing: 'इस विक्रेता ने अपनी प्रोफ़ाइल साझा करना बंद कर दिया है, इसलिए आप इसे अब नहीं देख सकते। पहुँच तुरंत समाप्त हो गई।',
        back_to_applications: 'वापस आवेदन सूची पर जाएं',
        tab_receipts: 'रसीदें',
        tab_upi_matches: 'UPI मिलान',
        tab_voice_log: 'वॉइस लॉग',
        tab_utility: 'उपयोगिता बिल',
        tab_shg: 'स्वयं सहायता समूह',

        // Trust Level Badges
        tl_0: 'भुगतान-सत्यापित',
        tl_1: 'चालान-सत्यापित',
        tl_2: 'आपूर्तिकर्ता-पुष्टीकृत',
        tl_3: 'असत्यापित रसीद',
        tl_4: 'स्व-रिपोर्ट',
        tl_confirmed_by_you: 'आपके द्वारा पुष्टीकृत',
        tl_edited_by_you: 'आपके द्वारा संपादित',
        tl_matched_to_upi: 'UPI से सत्यापित',
        tl_receipt_verified: 'रसीद सत्यापित',
        tl_not_yet_confirmed: 'अभी पुष्टीकृत नहीं',

        // Toasts & Messages
        toast_demo_otp: 'डेमो: कोई वास्तविक OTP नहीं भेजा जाता। कोई भी 6 अंक टाइप करें।',
        toast_enter_price: 'कृपया एक मूल्य दर्ज करें',
        toast_enter_amount: 'राशि दर्ज करें',
        toast_enter_item_amount: 'सामान और राशि दर्ज करें',
        toast_entry_added: 'प्रविष्टि जोड़ी गई',
        toast_entry_deleted: 'प्रविष्टि हटा दी गई',
        toast_receipt_demo: 'रसीद अपलोड अभी इस डेमो का हिस्सा नहीं है',
        toast_upi_demo: 'UPI अपलोड अभी इस डेमो का हिस्सा नहीं है',
        toast_filters_demo: 'फिल्टर केवल इस डेमो में दृश्य हैं',
        toast_support_demo: 'सहायता अभी इस डेमो का हिस्सा नहीं है',
        toast_shg_demo: 'SHG रिकॉर्ड अभी इस डेमो का हिस्सा नहीं है',
        toast_request_sent: 'डेमो: अनुरोध भेज दिया गया',
        toast_approved_offer: 'डेमो: ऑफ़र के लिए स्वीकृत किया गया',
        toast_profile_rejected: 'डेमो: प्रोफ़ाइल अस्वीकार की गई',
        toast_field_verify_req: 'डेमो: क्षेत्रीय सत्यापन का अनुरोध किया गया',
        toast_nothing_changed: 'डेमो केवल: कुछ भी नहीं बदला गया',
        toast_lender_not_blocked: 'डेमो केवल: ऋणदाता को ब्लॉक नहीं किया गया',
        today_prefix: 'आज · ',
        month: 'महीना',
        item_placeholder: 'जैसे 5 किलो टमाटर',
        amount_rs: 'राशि (₹)',
        delete_entry: 'प्रविष्टि हटाएं',
        enter_mobile_10_digits: 'कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें',
        sending_otp: 'OTP भेजा जा रहा है...',
        otp_sent_success: 'आपके मोबाइल पर OTP सफलतापूर्वक भेजा गया',
        otp_send_failed: 'OTP भेजने में विफल',
        enter_full_otp: 'कृपया पूरा 6-अंकों का OTP दर्ज करें',
        verifying: 'सत्यापन जारी...',
        login_success: 'सफलतापूर्वक साइन इन किया गया',
        signing_in: 'साइन इन हो रहा है...',
        resend_in_seconds: '%s सेकंड में पुनः भेजें',
        resend_otp: 'पुनः OTP भेजें',
        network_error: 'बैकएंड सर्वर से कनेक्ट नहीं हो सका। जांचें कि पोर्ट 5000 चालू है।',
        vendor_registration: 'विक्रेता पंजीकरण',
        account_settings: 'खाता सेटिंग्स',
        profile: 'प्रोफ़ाइल'
    }
};

/**
 * Global translation function: t(key, fallback)
 */
function t(k, fallback = '') {
    const lang = (typeof window !== 'undefined' && window.S && window.S.lang) ||
                 (typeof S !== 'undefined' && S.lang) ||
                 localStorage.getItem('saakh_lang') || 'en';
    if (I18N[lang] && I18N[lang][k] !== undefined) {
        return I18N[lang][k];
    }
    if (fallback !== '') return fallback;
    if (I18N.en && I18N.en[k] !== undefined) {
        return I18N.en[k];
    }
    return k;
}

/**
 * Format string with placeholders (%s)
 */
function tf(k, ...args) {
    let str = t(k);
    let i = 0;
    return str.replace(/%s/g, () => (args[i] !== undefined ? args[i++] : ''));
}

/**
 * Language switch handler: updates state, localStorage, and immediately re-renders page without reload
 */
function setLang(l) {
    const lang = (l === 'hi') ? 'hi' : 'en';
    localStorage.setItem('saakh_lang', lang);
    document.documentElement.lang = lang;
    if (typeof window !== 'undefined') {
        if (!window.S) window.S = {};
        window.S.lang = lang;
    }
    if (typeof S !== 'undefined') {
        S.lang = lang;
    }
    if (typeof view === 'function') {
        view(1);
    }
}

/**
 * Beautiful, accessible language toggle UI component
 * Displays 'English (EN)' and 'Hindi (हिंदी)' in website header
 */
function langPicker() {
    const lang = (typeof window !== 'undefined' && window.S && window.S.lang) ||
                 (typeof S !== 'undefined' && S.lang) ||
                 localStorage.getItem('saakh_lang') || 'en';
    const isHi = lang === 'hi';
    return `<div class="inline-flex items-center p-0.5 rounded-full border border-outline bg-surface-container-low text-label-sm font-label shadow-xs select-none" role="group" aria-label="Language selection">
        <span class="pl-2.5 pr-1 text-on-surface-variant flex items-center" title="Select Language">${I('translate', 'text-headline-sm')}</span>
        <button type="button" onclick="setLang('en')" aria-pressed="${!isHi}" class="px-3 py-1 rounded-full transition-all duration-150 ${!isHi ? 'bg-primary text-on-primary font-bold shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}">English (EN)</button>
        <button type="button" onclick="setLang('hi')" aria-pressed="${isHi}" class="px-3 py-1 rounded-full transition-all duration-150 ${isHi ? 'bg-primary text-on-primary font-bold shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}">Hindi (हिंदी)</button>
    </div>`;
}

// Initialize html lang attribute
document.documentElement.lang = localStorage.getItem('saakh_lang') || 'en';

// Deploy ke baad yahan apne backend ka Vercel link daalo (end mein / nahi), jaise 'https://saakh-ijia.vercel.app'
const BACKEND_URL = '';

// Base API URL resolver connecting frontend to backend
const API_BASE = (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))
    ? (window.location.port === '5000' ? '' : 'http://localhost:5000')
    : BACKEND_URL;

// Global fetch wrapper ensuring Accept-Language and X-Language headers are always sent
if (typeof window !== 'undefined' && typeof window.fetch === 'function') {
    const _origFetch = window.fetch;
    window.fetch = function(url, options = {}) {
        const lang = (window.S && window.S.lang) || localStorage.getItem('saakh_lang') || 'en';
        const headers = new Headers(options.headers || {});
        if (!headers.has('Accept-Language')) {
            headers.set('Accept-Language', lang);
        }
        if (!headers.has('X-Language')) {
            headers.set('X-Language', lang);
        }
        return _origFetch(url, { ...options, headers });
    };
}

function apiFetch(endpoint, options = {}) {
    const url = (endpoint.startsWith('http://') || endpoint.startsWith('https://'))
        ? endpoint
        : `${API_BASE}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;

    const lang = (typeof window !== 'undefined' && window.S && window.S.lang) ||
                 (typeof S !== 'undefined' && S.lang) ||
                 localStorage.getItem('saakh_lang') || 'en';
    const token = (typeof localStorage !== 'undefined') ? localStorage.getItem('saakh_token') : null;

    const headers = {
        'Accept-Language': lang,
        'X-Language': lang,
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        ...(options.headers || {})
    };

    return fetch(url, { ...options, headers });
}

