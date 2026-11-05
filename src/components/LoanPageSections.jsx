import React from 'react';
import { CheckCircle2, FileText, ChevronDown } from 'lucide-react';
import FinancialCalculator from './FinancialCalculator';
import LoanTermsTable from './LoanTermsTable';

/** Small picture cards: what this kind of loan is commonly used for. */
export function LoanUses({ title, items }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="loan-uses">
      <h2 id="loan-uses" className="text-2xl sm:text-3xl font-heading font-extrabold text-navy text-center mb-8">{title}</h2>
      <ul className={`grid gap-3 sm:gap-6 ${items.length === 4 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-3'}`}>
        {items.map((item) => (
          <li key={item.title} className="glass rounded-2xl p-3 sm:p-4 text-center">
            <div className="rounded-xl bg-white/60 p-2">
              <img src={item.image} alt="" className="w-full h-24 sm:h-32 object-contain" loading="lazy" />
            </div>
            <p className="mt-3 text-sm sm:text-base font-heading font-bold text-navy">{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Two short lists: who can send an enquiry, and what a lender may ask for later. */
export function EligibilityAndDocuments({ who, whoNote, documents }) {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-neutral-border bg-white p-6 sm:p-7 space-y-4">
        <h2 className="text-lg font-heading font-bold text-navy flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-teal-dark" aria-hidden="true" />
          Who can enquire
        </h2>
        <ul className="space-y-2.5 text-[15px] text-slate-blue">
          {who.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-accent shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-neutral-muted">{whoNote}</p>
      </div>
      <div className="rounded-2xl border border-neutral-border bg-white p-6 sm:p-7 space-y-4">
        <h2 className="text-lg font-heading font-bold text-navy flex items-center gap-2">
          <FileText className="w-5 h-5 text-royal" aria-hidden="true" />
          Documents a lender may ask for
        </h2>
        <ul className="space-y-2.5 text-[15px] text-slate-blue">
          {documents.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-royal shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-neutral-muted">Not needed for the enquiry. Share them only with the lender.</p>
      </div>
    </section>
  );
}

/** EMI calculator, with the full list of loan terms one click away. */
export function LoanCosts({ product }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" aria-labelledby={`${product}-costs`}>
      <div className="text-center max-w-2xl mx-auto">
        <h2 id={`${product}-costs`} className="text-2xl sm:text-3xl font-heading font-extrabold text-navy">Estimate your EMI</h2>
        <p className="text-sm sm:text-base text-slate-blue mt-2">
          Compare the APR, the EMI and the total you will repay. The lender sets the actual terms.
        </p>
      </div>
      <FinancialCalculator product={product} />
      <details className="group rounded-2xl border border-neutral-border bg-white px-5 sm:px-6 py-4 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-heading font-bold text-navy">
          Loan terms and charges
          <ChevronDown className="w-5 h-5 text-royal shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>
        <div className="mt-4">
          <LoanTermsTable product={product} />
        </div>
      </details>
    </section>
  );
}
