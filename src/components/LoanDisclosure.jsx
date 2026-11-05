import React from 'react';
import { loanProducts, workedExample } from '../data/loanProducts';
import { calculateEmi, formatINR } from '../lib/emi';

const SET_BY_LENDER = 'Set by the lender and shown in its Key Facts Statement (KFS)';

/**
 * Representative example and lending disclosures. The worked example is calculated, never typed in.
 * Interest range, tenure and fee come from data/loanProducts.js and appear only once a lender has
 * confirmed them.
 */
export default function LoanDisclosure({ product = 'personal' }) {
  const { terms } = loanProducts[product];
  const { amount, annualRate, tenureMonths } = workedExample;
  const { emi, totalInterest, totalRepayment } = calculateEmi(amount, annualRate, tenureMonths);

  return (
    <section aria-labelledby="loan-disclosure-title" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-neutral-border bg-neutral-bg p-5 sm:p-6 text-[13px] text-slate-blue leading-relaxed space-y-3">
        <h2 id="loan-disclosure-title" className="text-base font-heading font-bold text-navy">
          Representative Example &amp; Disclosures
        </h2>
        <p>
          <strong className="text-navy">Example (hypothetical, not any lender’s pricing):</strong> Loan Amount:{' '}
          {formatINR(amount)} | Interest Rate: {annualRate}% p.a. (reducing balance) | Tenure: {tenureMonths} Months |
          EMI: {formatINR(emi)}/month | Total Interest: {formatINR(totalInterest)} | Total Repayment:{' '}
          {formatINR(totalRepayment)}. Processing fees and other charges would add to this cost.
        </p>
        <p>
          <strong className="text-navy">Interest rate range:</strong> {terms.interestRate ?? SET_BY_LENDER}.{' '}
          <strong className="text-navy">Tenure:</strong> {terms.tenure ?? SET_BY_LENDER}.{' '}
          <strong className="text-navy">Processing fee:</strong> {terms.processingCharges ?? SET_BY_LENDER}.
        </p>
        <p>
          Late Payment Charges: As per lender’s loan agreement. Prepayment/Foreclosure charges: As per lender policy.
        </p>
        <p>
          Your actual rate, EMI, and eligibility will be decided by the lender after credit assessment. Please read all
          loan documents, MITC, and KFS carefully before signing. This website does not constitute a loan offer or
          guarantee.
        </p>
        <p>
          <strong className="text-navy">Safety note:</strong> Please do not share OTP, CVV, or full Aadhaar number with
          anyone. QvikLoan will never ask for it.
        </p>
      </div>
    </section>
  );
}
