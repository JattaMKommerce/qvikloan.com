import React from 'react';
import { Info, CheckCircle2 } from 'lucide-react';
import { loanProducts, TERM_LABELS } from '../data/loanProducts';

const PENDING_TEXT = 'Set by the lender; shown in its offer and Key Facts Statement (KFS)';

/**
 * Loan terms for one product ("personal" or "business").
 * While no lender has confirmed any term, it shows a notice and the list of terms the lender's
 * offer and KFS must state. Once terms are filled in (data/loanProducts.js), it shows the table,
 * with "set by the lender" for anything still unconfirmed.
 */
export default function LoanTermsTable({ product }) {
  const { label, terms } = loanProducts[product];
  const anyConfirmed = Object.values(terms).some((v) => v !== null);

  if (!anyConfirmed) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 space-y-4 text-amber-950">
        <div className="flex items-start gap-3 text-sm sm:text-base">
          <Info className="w-5 h-5 shrink-0 mt-0.5 text-amber-700" aria-hidden="true" />
          <p>
            <strong>Lender-specific terms are subject to confirmation.</strong> We publish a lender’s exact rates and
            charges here only once that lender has confirmed them. Until then, the lender that reviews your enquiry gives
            you these details in its offer and Key Facts Statement (KFS), before you agree to anything.
          </p>
        </div>
        <div className="rounded-xl bg-white/80 border border-amber-200 p-4 sm:p-5">
          <p className="text-sm font-semibold text-navy mb-3">The lender’s offer and KFS should tell you:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-sm text-slate-blue">
            {TERM_LABELS.map(([key, text]) => (
              <li key={key} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-dark shrink-0 mt-0.5" aria-hidden="true" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-neutral-border bg-white">
      <table className="w-full text-left text-sm border-collapse">
        <caption className="sr-only">{label} terms</caption>
        <tbody className="divide-y divide-neutral-border">
          {TERM_LABELS.map(([key, text]) => (
            <tr key={key}>
              <th scope="row" className="py-3 px-4 font-semibold text-navy align-top w-[42%] sm:w-[36%]">{text}</th>
              <td className={`py-3 px-4 align-top ${terms[key] === null ? 'text-neutral-muted' : 'text-navy font-medium'}`}>
                {terms[key] ?? PENDING_TEXT}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
