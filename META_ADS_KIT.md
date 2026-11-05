# QvikLoan Meta Ads Kit

Date: 5 November 2026. For whoever runs the Meta ad account.

**No ad copy can guarantee approval.** Meta reviews each ad, account and landing page on its own. This copy avoids the claims Meta's policies name, and it says only what the website supports today.

## Before you use this

- **Take legal advice before running these ads.** The company has no lender agreement today, the site says so, and enquiries cannot lead to a loan yet. See `CHECKLIST_BEFORE_ADS.md`.
- **Only use a number in square brackets after a lender confirms it in writing.** If you have no confirmed number, use the "no rates" version. Do not fill these in with "typical market" rates.
- **The rate must also be on the landing page.** Add it to `src/data/loanProducts.js` first, so the ad and the page match.

## Ad set 1: Personal loan (image)

**No rates (use this today):**

- **Primary text:** Planning for medical, education or home expenses? Start a personal loan enquiry with QvikLoan. QvikLoan is not a lender and currently has no active lending partner. We collect your enquiry and explain loan options. T&C apply.
- **Headline:** Start a Personal Loan Enquiry
- **Description:** Clear Charges | No Upfront Fee by QvikLoan
- **CTA:** Learn More, linking to `https://qvikloan.com/meta-personal-loan`

**With rates (only once a lender confirms them):** add to the primary text: "Interest rates from [RATE]% p.a.* Tenure [MIN]-[MAX] months."

## Ad set 2: Business loan (image)

**No rates (use this today):**

- **Primary text:** Running a business? Explore business loan options for working capital, inventory or equipment. QvikLoan is not a lender and currently has no active lending partner. We collect your enquiry and explain loan options. T&C apply.
- **Headline:** Start a Business Loan Enquiry
- **Description:** Working Capital | Inventory | Equipment
- **CTA:** Learn More, linking to `https://qvikloan.com/business-loans`

**With rates (only once a lender confirms them):** add: "Loan up to ₹[AMOUNT]* | Interest from [RATE]% p.a.* | Tenure up to [MAX] months."

There is no business-loan ad landing page yet, so this ad links to the regular Business Loans page.

## Ad set 3: Carousel (education)

| Slide | Headline | Text |
| --- | --- | --- |
| 1 | How is loan eligibility decided? | Lenders look at your income, credit history and location. Each lender sets its own rules. |
| 2 | Documents a lender may ask for | PAN, masked Aadhaar, recent bank statements and salary slips. Share them only with the lender. |
| 3 | How a lender decides | It verifies your details, assesses your credit and decides whether to make an offer. |
| 4 | A repayment example | Hypothetical: ₹50,000 at 18% p.a. for 12 months is ₹4,584 a month and ₹55,008 in total, before fees. Your terms depend on the lender. |

- **Primary text:** Understand how personal loans work before you enquire. QvikLoan is not a lender. Loans subject to credit approval.
- **CTA:** Learn More, linking to `https://qvikloan.com/how-it-works`

## Ad set 4: Read before you borrow (education)

- **Primary text:** Before you accept any loan, read the Key Facts Statement. It shows the APR, EMI, all charges and the cooling-off period. Compare the total amount you will repay, not just the EMI.
- **Headline:** What to Check Before You Borrow
- **Description:** A plain guide from QvikLoan
- **CTA:** Learn More, linking to `https://qvikloan.com/how-it-works`

## Ad set 5: Who we are and staying safe (brand)

- **Primary text:** QvikLoan is a digital loan facilitation platform operated by Jatta M Kommerce Private Limited. We are not a lender. We never ask for an upfront fee, OTP or banking password, and you should never pay anyone an upfront fee to get a loan approved.
- **Headline:** Who QvikLoan Is
- **Description:** Company details and how to reach us
- **CTA:** Learn More, linking to `https://qvikloan.com/about-us`

## Never use in ads

- "Instant loan in 5 mins", "in 10 minutes", or any speed promise
- "Guaranteed approval", "100% approval", "No CIBIL needed"
- "RBI-registered partner lenders", "Compare offers" or a lender's name or logo, until that partnership is verified and listed on the site
- Anything implying a person's money troubles, such as "In debt?", "Bad credit?" or "Need cash urgently?". Meta bars ads that imply vulnerable financial status, which is why the brief's "Need funds for..." opening was changed
- Testimonials that are not from real, consenting customers
- Images of cash, distressed people or luxury lifestyles
- Countdowns or "Offer ends today"

Do not advertise loans repaid within 90 days; Meta prohibits them.

## Targeting

The brief said to select "Special Ad Category: Credit" with age 21-58. **That cannot be set up as written.**

- **The "Credit" category no longer exists under that name.** Meta replaced it with **Financial products and services** (`FINANCIAL_PRODUCTS_SERVICES`) on 14 January 2025.
- **When that category is selected, age is generally fixed to 18-65+,** gender cannot be chosen and location exclusion is not supported. You cannot set 21-58 with it.
- **Meta's developer docs say it is required for advertisers based in the US,** and the credit policy also applies to ads shown in the US, Canada and parts of Europe. India is not named in the pages we could read.

What to do:

1. If Ads Manager asks for or requires the category, select it and accept the 18-65+ age range. The enquiry form still enforces 21-58.
2. If it does not, set age to **21-58**. Meta's minimum for loan ads is 18.
3. Location: India.
4. Do not use detailed targeting or exclusions based on financial status.

## Page and account checklist

- [ ] Business verified in Meta Business Manager
- [ ] Domain qvikloan.com verified
- [ ] Facebook Page renamed, with the Privacy Policy linked on it
- [ ] Financial services authorisation: Meta says advertisers "may be required" to verify identity and show regulatory authorisation. We found no separate India loan application form in Meta's public pages, so follow any prompt in Ads Manager and ask your lawyer what to submit

## Sources

- [Meta: Financial and Insurance Products and Services](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/financial-services/)
- [Meta: Prohibited Financial Products and Services](https://transparency.meta.com/policies/ad-standards/deceptive-content/prohibited-financial-products-and-services/)
- [Meta: Privacy Violations and Personal Attributes](https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/)
- [Meta for Developers: Special Ad Categories](https://developers.facebook.com/docs/marketing-api/audiences/special-ad-category)
