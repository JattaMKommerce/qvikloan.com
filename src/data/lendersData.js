/**
 * Lending institutions that receive enquiries through QvikLoan.
 * Shown on the Lending Partners page (/participating-lenders), and the enquiry consent refers to
 * "the lenders listed on our Lending Partners page", so this list must always match reality.
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
 *     role: 'Assesses, approves and disburses loans for enquiries shared by QvikLoan',
 *     products: ['Personal loans'],
 *     loanTermsUrl: 'https://...',               // lender's published rates & charges page
 *     grievance: { name: 'Officer name', email: 'grievance@...', phone: '...' },
 *     lspListingUrl: 'https://...',              // lender page listing QvikLoan as its LSP
 *   }
 *
 * The four lenders previously shown (Northern Arc Capital, InCred Financial Services,
 * Lendingkart Finance, Protium Finance) were removed on 4 Nov 2026: no agreement or lender-side
 * listing for them was found. Add any of them back only after the checks above.
 */
export const participatingLenders = [];
