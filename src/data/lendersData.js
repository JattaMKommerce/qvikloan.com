/**
 * Lending institutions that receive enquiries through QvikLoan.
 * Shown in the home page logo strip (#lending-partners) and in the footer. If this list ever becomes
 * empty again, the site wording about "lending partners named on our website" must change back
 * (search for "lending partner" and "fresh consent").
 *
 * Add a lender ONLY when all of these are true:
 *   1. A signed agreement (LSP / DSA / referral) between Jatta M Kommerce and the lender exists.
 *   2. The lender confirms the arrangement: RBI requires lenders to publish the Lending Service
 *      Providers they work with, so link that page in `lspListingUrl`, or keep the lender's
 *      written confirmation on file.
 *   3. Every value is copied from the lender's certificate, website or agreement. Use null for
 *      anything not confirmed; the page then shows "to be confirmed".
 *
 * Shape of one entry:
 *   {
 *     id: 'abc-finance',
 *     legalName: 'ABC Finance Limited',          // exactly as on the RBI certificate
 *     brandName: 'ABC Finance',
 *     classification: 'NBFC',                    // 'Bank' or 'NBFC' (add the NBFC layer if known)
 *     rbiRegistration: 'N-00.00000',             // RBI Certificate of Registration no. (NBFCs)
 *     website: 'https://www.abcfinance.example',
 *     logo: '/logos/lenders/abc-finance.svg',   // optional; supplied by the lender, with written
 *                                               // permission to use it. Shown in the home page
 *                                               // logo strip (components/LenderLogoLoop.jsx)
 *     role: 'Assesses, approves and disburses loans for enquiries shared by QvikLoan',
 *     products: ['Personal loans'],
 *     interestRange: '00% to 00% p.a.',          // only as confirmed by the lender in writing
 *     loanTermsUrl: 'https://...',               // lender's published rates & charges page
 *     grievance: { name: 'Officer name', email: 'grievance@...', phone: '...' },
 *     lspListingUrl: 'https://...',              // lender page listing QvikLoan as its LSP
 *   }
 */
// Added on 5 November 2026 on the company's instruction: Jatta M Kommerce confirms tie-ups with these
// lenders. Still to fill in from each agreement: RBI registration number, products, published rates
// page, grievance contact and the lender's page listing QvikLoan. Logos: the lenders' official logos.
const LENDER_ROLE = 'Checks your eligibility, decides on any loan, sets its rates and charges, and pays out the loan';

export const participatingLenders = [
  {
    id: 'aditya-birla-capital',
    legalName: 'Aditya Birla Capital Limited',   // Aditya Birla Finance Limited merged into it on 1 April 2025
    brandName: 'Aditya Birla Capital',
    classification: 'NBFC',
    rbiRegistration: null,
    website: 'https://www.adityabirlacapital.com',
    logo: '/logos/lenders/aditya-birla-capital.svg',
    role: LENDER_ROLE,
    products: null,
    interestRange: null,
    loanTermsUrl: null,
    grievance: null,
    lspListingUrl: null,
  },
  {
    id: 'dmi-finance',
    legalName: 'DMI Finance Private Limited',
    brandName: 'DMI Finance',
    classification: 'NBFC',
    rbiRegistration: null,
    website: 'https://www.dmifinance.in',
    logo: '/logos/lenders/dmi-finance.svg',
    role: LENDER_ROLE,
    products: null,
    interestRange: null,
    loanTermsUrl: null,
    grievance: null,
    lspListingUrl: null,
  },
  {
    id: 'bajaj-finance',
    legalName: 'Bajaj Finance Limited',
    brandName: 'Bajaj Finserv',
    classification: 'NBFC',
    rbiRegistration: null,
    website: 'https://www.bajajfinserv.in',
    logo: '/logos/lenders/bajaj-finserv.svg',
    role: LENDER_ROLE,
    products: null,
    interestRange: null,
    loanTermsUrl: null,
    grievance: null,
    lspListingUrl: null,
  },
  {
    id: 'karnataka-bank',
    legalName: 'Karnataka Bank Limited',
    brandName: 'Karnataka Bank',
    classification: 'Bank',
    rbiRegistration: null,
    website: 'https://karnatakabank.com',
    logo: '/logos/lenders/karnataka-bank.svg',
    role: LENDER_ROLE,
    products: null,
    interestRange: null,
    loanTermsUrl: null,
    grievance: null,
    lspListingUrl: null,
  },
];
