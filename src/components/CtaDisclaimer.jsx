import React from 'react';
import { companyInfo } from '../data/companyInfo';

/** One-line lending disclaimer shown under call-to-action buttons. */
export default function CtaDisclaimer({ className = '' }) {
  return (
    <p className={`text-[13px] text-slate-blue leading-relaxed ${className}`}>
      Loans are subject to credit approval by the lending institution (a bank or RBI-registered NBFC). Approval,
      interest rate and tenure depend on your credit profile. QvikLoan is {companyInfo.platformRole}, not a lender.
    </p>
  );
}
