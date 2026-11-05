import React from 'react';
import { companyInfo } from '../data/companyInfo';

// Who does what in a loan taken after a QvikLoan enquiry. Keep this in line with the
// Terms and Conditions (section 3) and the Financial Disclaimer.
const ROWS = [
  ['Taking your loan enquiry', 'Collects your enquiry and contacts you about it', 'Not involved'],
  ['Sharing your details', 'Does not share your enquiry with any lender today. A future lender must be listed first, and needs your fresh consent', 'Would receive your details only after that, under its own privacy policy'],
  ['KYC and documents', 'Does not ask for PAN, Aadhaar, bank statements or documents on this website', 'Collects the identity, income and other documents it needs'],
  ['Credit assessment (underwriting)', 'Does not assess your creditworthiness', 'Checks eligibility, credit history and repayment capacity'],
  ['Approval or rejection', 'Cannot approve, reject or guarantee a loan', 'Decides whether to make you an offer'],
  ['Interest rate, APR and charges', 'Does not set them', 'Sets them and shows them in its Key Facts Statement (KFS)'],
  ['Loan agreement and disbursement', 'Does not sign loan agreements or hold or send loan money', 'Signs the agreement and pays the loan into your bank account'],
  ['Repayment and collection', 'Does not collect EMIs', 'Manages EMIs, statements and any collection'],
  ['Complaints', "Handles complaints about QvikLoan's service", 'Handles complaints about the loan; unresolved ones can go to the RBI'],
];

export default function RoleTable() {
  return (
    <>
      {/* Phones: one card per step, so nothing needs sideways scrolling */}
      <ul className="md:hidden space-y-3" aria-label="What QvikLoan does and what the lender does">
        {ROWS.map(([step, platform, lender]) => (
          <li key={step} className="rounded-2xl border border-neutral-border bg-white p-4 text-sm space-y-2">
            <p className="font-heading font-bold text-navy">{step}</p>
            <p><span className="font-semibold text-royal-dark">QvikLoan: </span><span className="text-slate-blue">{platform}</span></p>
            <p><span className="font-semibold text-teal-dark">Lender: </span><span className="text-slate-blue">{lender}</span></p>
          </li>
        ))}
      </ul>

      <div className="hidden md:block overflow-x-auto rounded-2xl border border-neutral-border bg-white">
        <table className="w-full text-left border-collapse text-sm">
          <caption className="sr-only">What QvikLoan does and what the lender does</caption>
          <thead>
            <tr className="bg-neutral-bg border-b border-neutral-border">
              <th scope="col" className="py-3.5 px-4 font-bold text-navy w-[26%]">Step</th>
              <th scope="col" className="py-3.5 px-4 font-bold text-royal">QvikLoan ({companyInfo.name})</th>
              <th scope="col" className="py-3.5 px-4 font-bold text-teal-dark">Lending institution (bank or NBFC)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-border text-slate-blue">
            {ROWS.map(([step, platform, lender]) => (
              <tr key={step}>
                <th scope="row" className="py-3.5 px-4 font-semibold text-navy align-top">{step}</th>
                <td className="py-3.5 px-4 align-top">{platform}</td>
                <td className="py-3.5 px-4 align-top">{lender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
