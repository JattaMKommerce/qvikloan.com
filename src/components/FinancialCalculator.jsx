import React, { useState } from 'react';
import { Calculator, Info, ShieldCheck, ArrowRight } from 'lucide-react';

export default function FinancialCalculator({ onEnquireClick }) {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(13.5);
  const [tenureMonths, setTenureMonths] = useState(36);
  const [processingFeePercent, setProcessingFeePercent] = useState(2.0);

  // Reducing Balance Monthly Instalment (EMI) Formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const emi =
    monthlyRate > 0
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1)
      : loanAmount / tenureMonths;

  const totalAmountPayable = emi * tenureMonths;
  const totalInterest = totalAmountPayable - loanAmount;
  const estimatedProcessingFee = (loanAmount * processingFeePercent) / 100;
  const effectiveTotalCost = totalAmountPayable + estimatedProcessingFee;

  return (
    <div className="bg-white rounded-card-lg border border-neutral-border p-6 sm:p-8 shadow-subtle">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-neutral-border gap-4">
        <div>
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-1">
            Interactive Comparison Tool
          </span>
          <h3 className="text-xl font-heading font-extrabold text-navy">
            Calculate & Compare Loan Metrics
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-neutral-muted bg-neutral-bg px-3 py-1.5 rounded-lg border border-neutral-border">
          <Info className="w-3.5 h-3.5 text-slate-blue shrink-0" />
          <span>Reducing balance calculation model</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Input Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Amount Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-neutral-text">
                Loan Principal
              </label>
              <span className="text-base font-extrabold text-navy font-heading">
                ₹{loanAmount.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="50000"
              max="2500000"
              step="25000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-neutral-border rounded-lg appearance-none cursor-pointer accent-royal"
            />
            <div className="flex justify-between text-xs text-neutral-muted mt-1">
              <span>₹50,000</span>
              <span>₹25,00,000</span>
            </div>
          </div>

          {/* Interest Rate Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-neutral-text">
                Indicative Interest Rate (p.a.)
              </label>
              <span className="text-base font-extrabold text-navy font-heading">
                {interestRate}%
              </span>
            </div>
            <input
              type="range"
              min="10.5"
              max="26.0"
              step="0.5"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-neutral-border rounded-lg appearance-none cursor-pointer accent-royal"
            />
            <div className="flex justify-between text-xs text-neutral-muted mt-1">
              <span>10.5% p.a.</span>
              <span>26.0% p.a.</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-neutral-text">
                Repayment Period
              </label>
              <span className="text-base font-extrabold text-navy font-heading">
                {tenureMonths} Months ({Math.round((tenureMonths / 12) * 10) / 10} Years)
              </span>
            </div>
            <input
              type="range"
              min="12"
              max="60"
              step="6"
              value={tenureMonths}
              onChange={(e) => setTenureMonths(Number(e.target.value))}
              className="w-full h-2 bg-neutral-border rounded-lg appearance-none cursor-pointer accent-royal"
            />
            <div className="flex justify-between text-xs text-neutral-muted mt-1">
              <span>12 Months</span>
              <span>60 Months</span>
            </div>
          </div>
        </div>

        {/* Results Output Column */}
        <div className="lg:col-span-5 bg-neutral-bg p-6 rounded-card border border-neutral-border space-y-4">
          <div>
            <span className="text-xs font-semibold text-neutral-muted block mb-1">
              Estimated Monthly Instalment (EMI)
            </span>
            <div className="text-3xl font-heading font-extrabold text-royal">
              ₹{Math.round(emi).toLocaleString('en-IN')}
            </div>
            <span className="text-[11px] text-neutral-muted">Per month for {tenureMonths} months</span>
          </div>

          <div className="pt-3 border-t border-neutral-border/80 space-y-2 text-xs">
            <div className="flex justify-between text-neutral-text">
              <span>Total Interest Payable</span>
              <span className="font-semibold text-navy">
                ₹{Math.round(totalInterest).toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex justify-between text-neutral-text">
              <span>Estimated Processing Fee (2%)</span>
              <span className="font-semibold text-navy">
                ₹{Math.round(estimatedProcessingFee).toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex justify-between text-neutral-text pt-2 border-t border-neutral-border/60 font-bold">
              <span>Total Amount Payable</span>
              <span className="text-navy font-heading text-sm">
                ₹{Math.round(effectiveTotalCost).toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <button
            onClick={onEnquireClick}
            className="w-full mt-4 py-3 px-4 rounded-xl bg-navy hover:bg-slate-blue text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <span>Enquire for this Amount</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <p className="mt-6 text-[11px] text-neutral-muted leading-relaxed border-t border-neutral-border/60 pt-4">
        * <strong>Illustration Disclaimer:</strong> This calculator provides mathematical estimations only based on standard reducing balance formulas. It does not constitute a loan offer, quote, or guarantee of terms. Participating lenders assess individual risk factors and issue sanctioned terms with an official Key Facts Statement (KFS).
      </p>
    </div>
  );
}
