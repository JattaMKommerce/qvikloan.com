<?php
/**
 * Settings for api/lead.php and api/contact.php.
 *
 * This file IS deployed from GitHub, and the GitHub repository is public, so NEVER put a key or
 * password here. Secrets go in api/config.local.php, created by hand on the server. That file is
 * not in git, is blocked from the web, and overrides anything below. For example:
 *
 *   <?php return [
 *       'iamkratu_url' => 'https://...',
 *       'iamkratu_headers' => ['Authorization' => 'Bearer YOUR_KEY'],
 *   ];
 */
$settings = [
    // Where new enquiries go. While this is empty, enquiries are emailed to backup_email.
    'iamkratu_url' => '',
    'iamkratu_headers' => [],

    // 'on_failure' = email only when iamkratu.ai fails or is not connected; 'always' = email every lead.
    'backup_email' => 'help@qvikloan.com',
    'backup_email_mode' => 'on_failure',

    // Sender for all form emails. Must be on this domain and allowed by its SPF record.
    'mail_from' => 'no-reply@qvikloan.com',

    // Inboxes for the Contact Us form and the Grievance form. Separate several with commas.
    'support_email' => 'help@qvikloan.com',
    'grievance_email' => 'amit.qvikloan@gmail.com, help@qvikloan.com',

    // Websites allowed to submit the forms.
    'allowed_origins' => [
        'https://qvikloan.com',
        'https://www.qvikloan.com',
    ],

    // Spam protection: at most this many submissions per visitor (IP) per window.
    'rate_limit_max' => 5,
    'rate_limit_window_seconds' => 600,
];

$local = __DIR__ . '/config.local.php';

return is_file($local) ? array_merge($settings, (array) require $local) : $settings;
