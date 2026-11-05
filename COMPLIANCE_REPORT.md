# QvikLoan compliance report

Date: 5 November 2026. For the company's management, its lawyer and whoever runs the ads.

**Status: pushed to `main` on 5 November 2026.** The site cannot be called "100% ready" or safe from rejection: Meta reviews each ad, account and landing page on its own, and the items under "Still open" need the company.

## Part 9 checklist

| Check | Result | Evidence |
| --- | --- | --- |
| Old office address and city name: 0 matches | Pass | Searched every text file in the project and all rendered pages |
| Placeholder text for the CIN and officer name: 0 matches | Pass | Same search |
| CIN U58200MH2024PTC428411 in Footer, About, Privacy, Terms | Pass | Also on Contact and Disclaimer |
| Grievance Officer Amit and amit.qvikloan@gmail.com in Footer, Grievance, Privacy, Terms | Pass | Also on About |
| Bangalore REGUS address in Footer, About, Contact, Grievance, Privacy, Terms, Disclaimer | Pass | Checked in each page's main content |
| Mumbai registered address on the same pages | Pass | On Grievance it appears in the footer only, since your brief sets the officer's postal address to Bangalore |
| No page says "participating lenders" as if lenders exist | Pass | 0 matches on 14 pages at desktop and phone size |
| Enquiry form has 4 new checkboxes, none ticked, 3 mandatory | Pass | Submitting with 0 or 2 of the 3 required boxes is refused |
| `api/config.php` exists | Pass in the project; **not on the server until deployed** | `public/api/config.php` deploys with the site |
| Test enquiry succeeds | **Local only** | The form and PHP work, and emails reached a local mail catcher with the right recipients. **No real email has been sent or received** |
| 404 returns 404 status | **Not verified** | Rule is in `public/.htaccess` and all 20 routes match it, but there is no Apache here to run it. Check after deploying |
| Privacy Policy mentions Meta Pixel | Pass | Your wording is in section 5. No pixel is installed. If one is added, a consent step must be built first, because the policy says "with your consent" |

Also tested, on 14 pages at desktop and phone size: 0 console errors, broken images or sideways scroll; 0 accessibility violations (desktop); none of your banned words; ₹20,000 appears nowhere. The EMI calculator and disclosure box are unchanged.

## Not ready for Meta yet

No Meta page we could find lists a "Financial Services Authorization" with set documents for Indian loan advertisers. Meta's policy says advertisers may have to verify their identity and show authorisation from the relevant regulator, and that Meta may review it. Check the Authorizations and Verifications area of Meta Business Suite for what it actually asks.

**Documents to have ready, as you listed. We cannot confirm Meta asks for or accepts these:**

1. CIN certificate
2. Company PAN
3. Domain verification
4. This website URL
5. Declaration that QvikLoan currently has no active lending partner

**The main risk:** Meta may ask for regulatory authorisation, and QvikLoan has no RBI registration and no lender agreement to show. Paid ads would also collect loan enquiries that cannot lead to a loan today. A lawyer should advise before spending on ads.

## Still open

1. **Deploy this work.** Nothing here is live until it is merged to `main`.
2. **Fix email delivery.** The domain's SPF record is `v=spf1 include:secureserver.net -all`, which tells mail servers to reject mail not sent through GoDaddy. The forms send from Hostinger, so emails may be blocked or go to spam even when the server reports success. In GoDaddy DNS, try changing it to `v=spf1 include:secureserver.net include:_spf.mail.hostinger.com -all`, then test. Hostinger recommends SMTP over PHP `mail()` for regular sending, so if emails still fail, the forms need to send through an authenticated mailbox.
3. **Test on the live site.** Send one enquiry, one contact message and one complaint. Confirm the enquiry and contact message reach help@qvikloan.com, and the complaint reaches both help@ and amit.qvikloan@gmail.com. Check that /services returns 404 and /api/config.php returns 403.
4. **Facebook Page name:** still "Qvikloan- Get Loan in 10 Mins" when last checked. Rename it.
5. **Company name mismatch:** the "Qvik Loan" app is listed under WebTalk E-commerce Pvt Ltd.
6. **Meta business and domain verification.** No Meta verification record exists on the domain.
7. **Chatbot:** its name shows "qvickloan.com", and its answers are not controlled by this code. Check it does not imply lenders or approvals.
8. **Legal review** of the Privacy Policy, Terms, Refund Policy, consent wording and QvikLoan's role.

## Where this differs from your brief

| Your brief | What was done | Why |
| --- | --- | --- |
| "Your enquiry is stored only with QvikLoan" | "stays with QvikLoan and the service providers named in our Privacy Policy" | Hostinger, the email provider and iamkratu.ai also handle data, so "only" would be untrue |
| Create `api/config.php` on the server | Added to the project so it deploys with the site | No server access. The GitHub repository is public, so any key must go in a separate `config.local.php`, created by hand on the server |
| Log all submissions | Logs the reference number and outcome only | The Privacy Policy says personal details are not written to logs |
| "Test end-to-end" and "must receive email" | Tested locally | Needs deploying first, and only you can see the inboxes |

**Changes you did not list:**
- Chat bubble and WhatsApp message reworded so they do not imply QvikLoan has loans to offer.
- Four unused scripts deleted from `scripts/`: they held invented lender names, RBI numbers and old company details, in a public repository.
- `config.sample.php` deleted; replaced by `config.php`.
- Asset paths made absolute in `vite.config.js`, so the 404 page also works on deeper addresses.

## Details supplied by the company

The CIN, Bangalore address and Grievance Officer are used exactly as you gave them. We did not check them against MCA records. Two suggestions for credibility with reviewers: give the officer's full name, not just "Amit", and use a company mailbox rather than a Gmail address.

These commitments now on the site need the company's confirmation: contact within 24 working hours, complaints resolved in 7 working days (support) and 15 days (officer), records kept for 24 months, and no money taken from borrowers.

**This repository is public,** so anyone can read this report once it is committed. Consider making the repository private.

The DMARC record's report address is a placeholder (`example@easydmarc.com`). Change it to a real address.

## Files changed since the last deploy

**New:** `public/api/config.php`

**Deleted:** `public/api/config.sample.php`, `scripts/generate-all-illustrations.mjs`, `scripts/generate-card-illustrations.mjs`, `scripts/generate-illustrations.mjs`, `scripts/generate-inner-page-visuals.mjs`

**Modified:**
- Config and server: `.gitignore`, `vite.config.js`, `index.html`, `public/.htaccess`, `public/api/.htaccess`, `public/api/contact.php`, `public/api/lead.php`
- Data: `src/data/companyInfo.js`, `lendersData.js`, `loanProducts.js`
- Components: `ChatWidget`, `Footer`, `GlassLoanEnquirySection`, `LoanDisclosure`, `LoanTermsTable`, `Navbar`, `RoleTable`, `SupportForm`
- Pages: About, Business Loans, Disclaimer, Grievance, Home, How It Works, Ad Landing, Lending Partners, Personal Loans, Privacy, Terms
- Reports: `AUDIT.md`, `CHECKLIST_BEFORE_ADS.md`, `META_ADS_KIT.md`, this file

The website PDF guide was made before these changes and needs regenerating once they are live.
