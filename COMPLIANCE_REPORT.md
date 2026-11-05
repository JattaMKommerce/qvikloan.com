# QvikLoan compliance report

Date: 5 November 2026. For the company's management, its lawyer and whoever runs the ads.

The code changes are built and tested locally, but **nothing is committed or deployed yet**. The site cannot be called "100% ready" or safe from rejection or a ban: Meta reviews each ad, account and landing page on its own, and the items below are still open.

## Placeholders to fill

These stay hidden on the site until filled, so visitors and reviewers never see text like "[YOUR_CIN]". Each one appears automatically once set; this was tested on a throwaway build with fake data.

| Item | File and field | Where it appears |
| --- | --- | --- |
| CIN | `src/data/companyInfo.js`, `cin` | Footer, About, Contact, Terms, Disclaimer |
| GSTIN (optional) | `src/data/companyInfo.js`, `gstin` | About |
| Grievance Officer's name | `src/data/companyInfo.js`, `grievanceOfficer.name` | Footer, Grievance, Privacy |
| Full Hubli office address | `src/data/companyInfo.js`, `address.corporateOffice` | Footer, About, Contact, Disclaimer |
| Legal role (DSA, LSP or referrer) | `src/data/companyInfo.js`, `platformRole` | CTA disclaimer, footer, landing page FAQ |
| Partner lenders and RBI numbers | `src/data/lendersData.js` | Lending Partners, footer, home page line, landing page badge |
| Interest range, tenure, fees | `src/data/loanProducts.js`, `terms` | Loan pages, disclosure box, landing page sub-headline |
| support@ and grievance@ mailboxes | `src/data/companyInfo.js`, `email` and `grievanceOfficer.email` | Everywhere; see below |

The company name, registered address and phone were found in the existing code and are in use. Also add the CIN and any lender details to the JSON-LD and `<noscript>` block in `index.html`.

## Where this differs from the brief, and why

These items would have put unverified facts on a live loan website, contradicted what the site actually does, or could not be built as written. The earlier briefs also said not to invent rates, lenders or registrations.

| The brief asked for | What was done | Why | What changes it |
| --- | --- | --- | --- |
| "Interest rates from 11.99% p.a.", "13% p.a.", "up to ₹50 Lakh", "up to 2% + GST" | Not published. Text says the lender sets these | No lender has confirmed any of these numbers | Fill in `loanProducts.js` |
| "RBI-registered partner lenders" in hero, badge, disclaimers, titles | Shown only when a lender is listed. Otherwise "a bank or RBI-registered NBFC" and "QvikLoan is not a lender" | No lender is listed today | Add a lender to `lendersData.js` |
| "Compare offers", "100% online", "no hidden charges", "transparent rates" | Replaced with what is true: one enquiry, clear terms in the KFS, no upfront fee | The site shows no offers to compare, and the team calls customers | Build a real offer view (see the RBI note below) |
| "Loan aggregator / DSA" | "a loan facilitation platform" | The legal status is unconfirmed | Set `platformRole` once confirmed |
| 3 generic testimonials | **Not created** | Made-up reviews are fake testimonials, whatever the disclaimer says | Supply real ones, with the customer's consent |
| Disclosure example: ₹4,577 EMI, ₹4,924 interest, ₹54,924 total | ₹4,584, ₹5,008, ₹55,008 | The brief's figures are wrong for ₹50,000 at 18% over 12 months. They are now calculated by code and labelled hypothetical | Nothing needed |
| "RBI Note" label | "Safety note" | The wording is not from the RBI | Nothing needed |
| Privacy Policy: collect PAN, bank statements, salary slips; share with credit bureaus; stored in India; 7-year retention; Meta Pixel and Google Analytics | Policy describes what really happens: none of these are collected or installed; lenders may collect documents and check bureaus | A policy must match real practice. Server locations and the 7-year legal basis are unverified | Update the policy when practice changes, with a lawyer |
| "You authorize QvikLoan and its partner lenders to fetch your credit report" | "QvikLoan does not fetch your credit report; a lender that reviews your enquiry may do so" | QvikLoan does not fetch reports | Lawyer, if this changes |
| FAQ: "Soft check initially" | Neutral answer; tells people to ask the lender | Depends on the lender | Update when a lender confirms |
| Mobile OTP verification | **Not built** | Needs an SMS provider, DLT registration, server code and budget | Your decision; see below |
| /home-loan, /car-loan, Blog | **Not created** | Nothing shows these are offered, and the form and `lead.php` handle personal and business loans only | Tell us if they are real |
| support@ and grievance@ addresses | help@qvikloan.com kept | It is the only address known to work. A complaint sent to a missing mailbox is lost | Create the mailboxes, then change the two fields |
| Mon-Sat 10 AM to 6 PM | Mon-Sat 9:30 AM to 6:30 PM kept | That is the existing published schedule | Change `operatingHours` if wrong |
| Jurisdiction: Delhi or your city | Mumbai | Matches the registered office | Lawyer |
| "Our partner lender will contact you" on success | "Our team will contact you" | There is no partner lender yet | Nothing needed |
| Special Ad Category "Credit", age 21-58 | Corrected in the kit | The category was replaced in January 2025 and fixes age at 18-65+ | See `META_ADS_KIT.md` |

Five smaller points:

- **Age field added:** your Step 1 list has no age field, but your rule needs one.
- **Income rule conflict:** the brief says ₹15,000 in one place and ₹20,000 in others. The form uses ₹15,000, and ₹20,000 is not published. Please confirm which is right.
- **RBI Ombudsman:** Level 3 is worded for complaints about a loan or lender, because the scheme covers RBI-regulated lenders. Complaints about QvikLoan's own service point to the National Consumer Helpline.
- **Partners page:** lenders appear as cards with all the requested fields, not a table with dummy rows.
- **Optional marketing box kept:** your previous brief asked for marketing consent to stay separate.

## Banned words removed

**None: none of the listed phrases were on the site.** Details are in `AUDIT.md`. The Facebook Page name is the one off-site case. No countdowns, testimonials, user counts or document-collecting WhatsApp button existed, so none were removed. The WhatsApp button still says "Chat on WhatsApp".

One image was removed: `public/images/contact-us-hero.png`, for its "Verified Assistance" wording.

## Effect on your team

- **Enquiry form:** it now collects name, mobile, age, city, employment type, monthly income, loan type and amount. **Email, PIN code, purpose, tenure, existing EMIs, business age and call time are no longer collected**, as your Step 1 list requires, so leads have no email address and staff must call.
- **New promises on the site, please confirm you can keep them:** contact within 24 working hours; support resolution within 7 working days; Grievance Officer resolution within 15 days.
- **Who can enquire:** ages 21-58 and income of ₹15,000 or more. Others are now refused by both the form and the server.
- **Ad landing page:** no main menu and no chat or WhatsApp pop-ups, since the chatbot's answers have not been reviewed.

## Files changed

**New:**
- `src/components/CtaDisclaimer.jsx`
- `src/components/LoanDisclosure.jsx`
- `src/pages/MetaPersonalLoanPage.jsx`
- `src/pages/RefundPolicyPage.jsx`
- `AUDIT.md`
- `COMPLIANCE_REPORT.md`
- `META_ADS_KIT.md`
- `CHECKLIST_BEFORE_ADS.md`

**Modified:**
- `index.html`: JSON-LD and refund link
- `public/api/lead.php`: Step 1 fields, age and income rules, no Reply-To
- `public/sitemap.xml`: refund page
- `src/App.jsx`: routes and landing page layout
- `src/components/Footer.jsx`: 3-column rebuild
- `src/components/GlassLoanEnquirySection.jsx`: fields and consents
- `src/components/SupportForm.jsx`: timelines
- `src/data/companyInfo.js`, `lendersData.js`, `loanProducts.js`
- `src/pages/BusinessLoansPage.jsx`, `HomePage.jsx`, `HowItWorksPage.jsx`, `PersonalLoansPage.jsx`: disclaimers and disclosure box
- `src/pages/GrievanceRedressalPage.jsx`: three levels
- `src/pages/ParticipatingLendersPage.jsx`: interest range and update note
- `src/pages/PrivacyPolicyPage.jsx`, `TermsAndConditionsPage.jsx`: matched to the new form and rules

**Deleted:** `public/images/contact-us-hero.png`

**Short URLs that now redirect:** `/personal-loan`, `/business-loan`, `/terms`, `/grievance`, `/partners`.

Brand colours and the overall design are unchanged.

## Test results

Tested locally in Chrome against real PHP, with a mock iamkratu.ai and a local mail catcher.

| Check | Result |
| --- | --- |
| 13 pages at desktop, tablet and phone sizes (39 page views) | 0 console errors, broken images or sideways scroll; one H1 each |
| Accessibility (axe-core, desktop) | 0 violations |
| All internal links (14) and footer links | All open the right page |
| Redirects (6) | All correct |
| Consent boxes | All 4 start unticked; submitting with 2 of the 3 required boxes is refused |
| Form rules in the browser | Bad mobile, age 20, age 59 and income ₹14,999 refused; ₹15,000 accepted |
| Rules in `lead.php` | Same rules refused by the server; ages 21 and 58 accepted; old fields no longer stored |
| Backup email | Sent correctly, with no Reply-To |
| Filling in data (fake test build) | All 13 checks showed the text as intended; source restored afterwards |
| Clean `dist/` | No test data or `config.php` |

**Not tested:** whether Hostinger sends the form emails, and how the changes behave on the live server. Nothing has been uploaded yet.

## Still open before ads

1. **The live enquiry form is broken.** `api/config.php` is missing on Hostinger (rechecked today).
2. **Rename the Facebook Page.**
3. **One legal entity** across the site, the app and Business Manager, then business verification.
4. **Verify the domain** with Meta.
5. **Fill in the placeholders above**, at least the CIN and the officer's name.
6. **Legal review**, including RBI Digital Lending Directions para 6: a multi-lender LSP must show all matching offers digitally, with each lender's APR, EMI and KFS link. Enquiry-and-callback may not meet this, which matters if you want to say "compare offers".

The ordered steps are in `CHECKLIST_BEFORE_ADS.md`.
