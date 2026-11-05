# Checklist before running Meta ads

Date: 5 November 2026. Work through these in order. Finishing them does not guarantee Meta approval.

## 1. Make the enquiry form work

- [ ] In Hostinger File Manager, copy `api/config.sample.php` to `api/config.php`. Without it the live form rejects every enquiry.
- [ ] Add the iamkratu.ai URL and key to `api/config.php` if you have them. If not, leads are emailed to help@qvikloan.com.

## 2. Fill in the real details

Details for each item are in `COMPLIANCE_REPORT.md`.

- [ ] CIN
- [ ] Grievance Redressal Officer's name
- [ ] Full Hubli office address
- [ ] At least one verified lending partner, with its RBI registration number
- [ ] Lender-confirmed rates, tenure and charges
- [ ] Your legal role, confirmed by a lawyer (DSA, Lending Service Provider or referrer)

Until a lender is listed, do not pass any enquiry to a lender. The consent on the form covers listed lenders only.

## 3. Deploy

- [ ] Run `npm run build` and upload the contents of `dist/` to `public_html`, including the hidden `.htaccess` files.
- [ ] Keep the server's `api/config.php`.
- [ ] Delete `images/contact-us-hero.png` from the server.
- [ ] On the live site, send one test enquiry, one contact message and one complaint, and confirm all three arrive.
- [ ] Open https://jattamkommerce.com/ in a normal browser. If it fails, remove the links to it on About Us.

## 4. Fix the Facebook side

- [ ] Rename the Page. "Qvikloan- Get Loan in 10 Mins" is a speed claim.
- [ ] Link the Privacy Policy on the Page.
- [ ] Fix the chatbot's name in iamkratu.ai (it shows "qvickloan.com") and check it makes no speed, approval or rate promises.

## 5. Verify with Meta

- [ ] Use one legal entity everywhere. Explain or align the "Qvik Loan" app listed under WebTalk E-commerce Pvt Ltd.
- [ ] Complete business verification in Business Manager.
- [ ] Verify the domain qvikloan.com: add Meta's TXT record in GoDaddy DNS, where the domain is managed.
- [ ] Make sure the Page and ad account belong to the verified business.
- [ ] Apply for financial services authorisation if Ads Manager asks for it. Ask your lawyer what to submit.

## 6. Set up the campaign

- [ ] Ad category: if Ads Manager asks, select **Financial products and services** ("Credit" was replaced in January 2025). Age is then fixed to 18-65+.
- [ ] If the category is not required: age 21-58, location India.
- [ ] No targeting or exclusions based on financial status.
- [ ] Use only the copy in `META_ADS_KIT.md`.

## 7. Choose the landing page

- [ ] Personal loan ads go to `https://qvikloan.com/meta-personal-loan` only.
- [ ] Business loan ads go to `https://qvikloan.com/business-loans`.
- [ ] Do not send ads to the home page.

## 8. Have a lawyer review

- [ ] Privacy Policy, Terms, Refund Policy and the consent wording.
- [ ] RBI multi-lender rules: if you work with several lenders as an LSP, the Digital Lending Directions (para 6) require showing all matching offers digitally. The current enquiry-and-callback process may not meet this.
