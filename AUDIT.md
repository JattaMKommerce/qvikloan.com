# QvikLoan website audit (Phase 1)

Date: 5 November 2026. Scope: everything in `src/`, `public/api/`, `index.html`, and every image in use. The app is a React + Vite site with PHP form endpoints (not MERN or Next.js), and it has no database or login.

## Result

**No banned phrase appears anywhere on the website.** The one banned-style claim found is off-site: the Facebook Page is titled "Qvikloan- Get Loan in 10 Mins".

## Banned and risky phrases

Searched case-insensitively across all source files, and again in the rendered text of every page.

| Phrase | Found on the site? |
| --- | --- |
| instant loan, instant approval | No |
| 5 min loan, 10 min loan, disbursal in 5 minutes | No |
| guaranteed, 100% approval, sure shot | No. "guarantee" appears only in disclaimers such as "does not guarantee a loan offer" |
| no credit check, no CIBIL needed, bad CIBIL ok | No |
| no documents, no paperwork, no salary slip needed | No |
| zero interest, 0% interest, lowest interest | No. "0% interest" appears only in a code comment in `src/lib/emi.js`, never shown to visitors |
| everyone eligible, loan for all | No |
| urgent money, quick cash, need money fast, get money now | No |
| only 2 slots left, offer ends today, limited offer | No |

## Risky UI elements

| Element | Found? |
| --- | --- |
| Countdown timers, scarcity pop-ups, exit pop-ups | None |
| Testimonials | None |
| User counts or ratings ("100K+ users", "4.9 rating") | None |
| WhatsApp button collecting documents | No. The button says "Chat on WhatsApp" and opens a general chat |
| Images of cash bundles, distressed people, luxury goods | None in use. Coin-stack illustrations appear on About Us and How It Works |
| `images/contact-us-hero.png` | Unused, but public and says "Verified Assistance" and "Official Grievance Officer Escalation Available". **Removed from the project; still on the server until deleted there** |

## Legal and compliance elements missing before this work

| Element | Status now |
| --- | --- |
| Refund & Cancellation Policy | Added at `/refund-policy` |
| Disclosure box with a worked example | Added as `LoanDisclosure` |
| Disclaimer under call-to-action buttons | Added as `CtaDisclaimer` |
| 3-column footer with a grievance line | Rebuilt |
| Three separate mandatory consents | Added |
| Age and income rules on the enquiry form | Added in the browser and in `lead.php` |
| Structured data (JSON-LD) | Added |
| Dedicated ad landing page | Added at `/meta-personal-loan` |
| Short URLs `/terms`, `/grievance`, `/partners`, `/personal-loan`, `/business-loan` | Added as redirects |

## Still missing (only the company can supply these)

- CIN and, optionally, GSTIN
- Grievance Redressal Officer's name
- Full Hubli office address (it reads "Park, 2nd Floor, E Block ...")
- Lending partners, with RBI registration numbers
- Lender-confirmed interest rates, tenures and charges
- Confirmed legal role: DSA, Lending Service Provider or referrer

## Blockers outside the code

- **The live enquiry form rejects every submission.** `api/config.php` is missing on Hostinger (rechecked 5 Nov 2026).
- **The Facebook Page name** makes a speed claim.
- **Company name mismatch:** the "Qvik Loan" app is listed under WebTalk E-commerce Pvt Ltd, while the site says Jatta M Kommerce Private Limited.
- **Domain not verified:** qvikloan.com has no Meta verification record.
