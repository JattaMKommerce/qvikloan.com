import React, { useId, useState } from 'react';
import { Calculator, Info } from 'lucide-react';
import { calculateEmi, formatINR } from '../lib/emi';
import { loanProducts } from '../data/loanProducts';

const clamp = (value, min, max) => Math.min(max, Math.max(min, Number(value) || 0));

/** One calculator input: a typed number field plus a slider, both bound to the same value. */
function CalcInput({ id, label, value, onChange, min, max, step, inputStep, unit, formatBound }) {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
        <label htmlFor={id} className="text-sm font-semibold text-neutral-text">{label}</label>
        <div className="flex items-center gap-1.5">
          {unit === '₹' && <span className="text-sm text-neutral-muted">₹</span>}
          <input
            id={id}
            type="number"
            inputMode="decimal"
            min={min}
            max={max}
            step={inputStep ?? step}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={() => {
              const v = clamp(value, min, max);
              onChange(step >= 1 ? Math.round(v) : v);
            }}
            className="w-32 px-3 py-1.5 rounded-lg border border-neutral-border bg-white text-right text-navy font-heading font-bold text-base focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none"
          />
          {unit !== '₹' && <span className="text-sm text-neutral-muted">{unit}</span>}
        </div>
      </div>
      <input
        type="range"
        aria-label={`${label} slider`}
        min={min}
        max={max}
        step={step}
        value={clamp(value, min, max)}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-neutral-border rounded-lg appearance-none cursor-pointer accent-royal"
      />
      <div className="flex justify-between text-xs text-neutral-muted mt-1">
        <span>{formatBound(min)}</span>
        <span>{formatBound(max)}</span>
      </div>
    </div>
  );
}

/**
 * Reducing-balance EMI calculator. `product` ("personal" | "business") sets the amount range.
 * Tenure starts at 6 months: loans repayable within 90 days are outside what QvikLoan offers
 * (and Meta does not allow them to be advertised).
 */
export default function FinancialCalculator({ product = 'personal' }) {
  const range = loanProducts[product].enquiryRange;
  const uid = useId();
  const [amount, setAmount] = useState(range.default);
  const [rate, setRate] = useState(12);
  const [tenure, setTenure] = useState(36);

  const { emi, totalInterest, totalRepayment } = calculateEmi(
    clamp(amount, range.min, range.max),
    clamp(rate, 0, 36),
    Math.round(clamp(tenure, 6, 84)),
  );

  return (
    <div className="glass rounded-card-lg p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-neutral-border gap-4">
        <div>
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-1">EMI calculator</span>
          <h3 className="text-xl font-heading font-extrabold text-navy flex items-center gap-2">
            <Calculator className="w-5 h-5 text-royal" aria-hidden="true" />
            Estimate your monthly instalment
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-neutral-muted bg-neutral-bg px-3 py-1.5 rounded-lg border border-neutral-border">
          <Info className="w-3.5 h-3.5 text-slate-blue shrink-0" aria-hidden="true" />
          <span>Standard reducing-balance formula</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <CalcInput
            id={`${uid}-amount`}
            label="Loan amount"
            unit="₹"
            value={amount}
            onChange={setAmount}
            min={range.min}
            max={range.max}
            step={range.step}
            inputStep={1000}
            formatBound={formatINR}
          />
          <CalcInput
            id={`${uid}-rate`}
            label="Annual interest rate"
            unit="% p.a."
            value={rate}
            onChange={setRate}
            min={0}
            max={36}
            step={0.25}
            inputStep={0.01}
            formatBound={(v) => `${v}%`}
          />
          <CalcInput
            id={`${uid}-tenure`}
            label="Loan tenure"
            unit="months"
            value={tenure}
            onChange={setTenure}
            min={6}
            max={84}
            step={1}
            formatBound={(v) => `${v} months`}
          />
          <p className="text-xs text-neutral-muted">
            Use the interest rate from the lender's offer or Key Facts Statement for the most useful estimate.
          </p>
        </div>

        <div className="lg:col-span-5 bg-neutral-bg p-6 rounded-card border border-neutral-border space-y-4" aria-live="polite">
          <div>
            <span className="text-sm font-semibold text-neutral-muted block mb-1">Monthly EMI</span>
            <div className="text-3xl font-heading font-extrabold text-royal">{formatINR(emi)}</div>
          </div>
          <dl className="pt-3 border-t border-neutral-border/80 space-y-2 text-sm">
            <div className="flex justify-between gap-4 text-neutral-text">
              <dt>Total interest payable</dt>
              <dd className="font-semibold text-navy">{formatINR(totalInterest)}</dd>
            </div>
            <div className="flex justify-between gap-4 text-neutral-text pt-2 border-t border-neutral-border/60 font-bold">
              <dt>Total repayment amount</dt>
              <dd className="text-navy font-heading">{formatINR(totalRepayment)}</dd>
            </div>
          </dl>
          <p className="text-xs text-neutral-muted leading-relaxed">
            Excludes processing fees and other charges. The lender lists all charges, and the Annual Percentage Rate
            (APR) that includes them, in its Key Facts Statement.
          </p>
        </div>
      </div>

      <p className="mt-6 text-sm text-slate-blue leading-relaxed border-t border-neutral-border/60 pt-4">
        <strong className="text-navy">These calculations are illustrative estimates and do not constitute a loan offer or guarantee of approval.</strong>{' '}
        Actual EMIs depend on the amount, rate and tenure the lender approves.
      </p>
    </div>
  );
}
