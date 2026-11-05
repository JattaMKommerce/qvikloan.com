/**
 * Loan product facts shown on the Personal Loans and Business Loans pages.
 *
 * `terms` must only hold values taken from a participating lender's published terms or signed
 * agreement (see lendersData.js). null = not confirmed yet: the page then says that the lender
 * sets it and shows it in its offer and Key Facts Statement (KFS). Never fill these with
 * "typical market" numbers.
 *
 * `enquiryRange` is QvikLoan's own setting: the amounts the enquiry form accepts. It is not a
 * lender's loan limit. Keep it in sync with $limits in public/api/lead.php.
 */
const PENDING_TERMS = {
  lender: null,
  minAmount: null,
  maxAmount: null,
  interestRate: null,
  apr: null,
  tenure: null,
  processingCharges: null,
  otherCharges: null,
  latePaymentCharges: null,
  foreclosure: null,
  prepayment: null,
  repaymentFrequency: null,
  eligibility: null,
};

export const loanProducts = {
  personal: {
    label: 'Personal loan',
    enquiryRange: { min: 50000, max: 2500000, step: 10000, default: 300000 },
    terms: { ...PENDING_TERMS },
  },
  business: {
    label: 'Business loan',
    enquiryRange: { min: 200000, max: 5000000, step: 50000, default: 1000000 },
    terms: { ...PENDING_TERMS },
  },
};

/** Row labels for the loan terms table, in display order. */
export const TERM_LABELS = [
  ['lender', 'Lending institution'],
  ['minAmount', 'Minimum loan amount'],
  ['maxAmount', 'Maximum loan amount'],
  ['interestRate', 'Annual interest rate'],
  ['apr', 'Annual Percentage Rate (APR)'],
  ['tenure', 'Loan tenure'],
  ['processingCharges', 'Processing charges'],
  ['otherCharges', 'Other charges'],
  ['latePaymentCharges', 'Late payment charges'],
  ['foreclosure', 'Foreclosure conditions'],
  ['prepayment', 'Prepayment conditions'],
  ['repaymentFrequency', 'Repayment frequency'],
  ['eligibility', 'Eligibility requirements'],
];

/**
 * Hypothetical worked example used to explain how loan costs add up. The inputs are NOT any
 * lender's pricing; they only illustrate the calculation.
 */
export const workedExample = {
  amount: 50000,
  annualRate: 18,
  tenureMonths: 12,
};

/** QvikLoan's own rules for accepting an enquiry. Keep in sync with public/api/lead.php. */
export const enquiryRules = {
  minAge: 21,
  maxAge: 58,
  minMonthlyIncome: 15000,
};
