# Checklist before running Meta ads

Date: 5 November 2026. Work through these in order. Finishing them does not guarantee Meta approval.

## 1. Deploy and test the forms

- [ ] Merge the changes to `main`. Hostinger builds and publishes them in about a minute. `api/config.php` now deploys with the site.
- [ ] In GoDaddy DNS, change the SPF record to `v=spf1 include:secureserver.net include:_spf.mail.hostinger.com -all`. Today it blocks mail sent from Hostinger.
- [ ] On the live site, send one test enquiry, one contact message and one complaint.
- [ ] Confirm the enquiry and message reach help@qvikloan.com, and the complaint reaches help@ and amit.qvikloan@gmail.com. Check the spam folders too.
- [ ] If they do not arrive, the forms need to send through an authenticated mailbox (SMTP).
- [ ] Check that https://qvikloan.com/services returns 404 and https://qvikloan.com/api/config.php returns 403.
- [ ] Open https://jattamkommerce.com/ in a normal browser. If it fails, remove the links to it on About Us.

## 2. Decide about lenders

- [ ] Take legal advice on running loan ads with no lending partner. QvikLoan cannot arrange a loan today, and enquiries are not shared with anyone.
- [ ] When a lender is signed, add it to `src/data/lendersData.js`, change the "no active lending partner" wording, and take fresh consent before sharing any earlier enquiry.

## 3. Fix the Facebook side

- [ ] Rename the Page. "Qvikloan- Get Loan in 10 Mins" is a speed claim.
- [ ] Link the Privacy Policy on the Page.
- [ ] Fix the chatbot's name in iamkratu.ai (it shows "qvickloan.com") and check it makes no speed, approval, rate or lender promises.

## 4. Verify with Meta

- [ ] Use one legal entity everywhere. Explain or align the "Qvik Loan" app listed under WebTalk E-commerce Pvt Ltd.
- [ ] Complete business verification in Business Manager.
- [ ] Verify the domain qvikloan.com: add Meta's TXT record in GoDaddy DNS.
- [ ] Make sure the Page and ad account belong to the verified business.
- [ ] Check Authorizations and Verifications in Meta Business Suite. If Meta asks for regulatory authorisation, ask your lawyer what to submit.

## 5. Set up the campaign

- [ ] Ad category: if Ads Manager asks, select **Financial products and services** ("Credit" was replaced in January 2025). Age is then fixed to 18-65+.
- [ ] If the category is not required: age 21-58, location India.
- [ ] No targeting or exclusions based on financial status.
- [ ] Use only the copy in `META_ADS_KIT.md`, and say nothing the website does not say.

## 6. Choose the landing page

- [ ] Personal loan ads go to `https://qvikloan.com/meta-personal-loan` only.
- [ ] Business loan ads go to `https://qvikloan.com/business-loans`.
- [ ] Do not send ads to the home page.

## 7. Have a lawyer review

- [ ] Privacy Policy, Terms, Refund Policy and the consent wording.
- [ ] QvikLoan's legal role, now and once lenders are added.
- [ ] RBI multi-lender rules: if you work with several lenders as an LSP, the Digital Lending Directions (para 6) require showing all matching offers digitally. An enquiry-and-callback process may not meet this.
