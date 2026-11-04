import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, FileText, Info, HelpCircle, AlertCircle, Clock } from 'lucide-react';
import FinancialCalculator from '../components/FinancialCalculator';
import { complianceDisclosures } from '../data/lendersData';
import { companyInfo } from '../data/companyInfo';

export default function PersonalLoansPage({ onOpenEnquiry }) {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-soft text-royal text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Transparent Personal Borrowing
            </div>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight">
              Personal Loan Options
            </h1>
            <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
              Explore personal borrowing options through participating lenders. QvikLoan helps you enquire online, compare loan parameters, and review transparent offers with Key Facts Statements (KFS) before you decide.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry('personal')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold text-sm shadow-subtle hover:shadow-premium transition-all"
              >
                <span>Enquire for Personal Loan</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Purpose */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-royal uppercase tracking-wider block">
              Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
              Borrowing for Planned Personal Needs
            </h2>
            <p className="text-slate-blue text-sm sm:text-base leading-relaxed">
              Personal loans are unsecured credit facilities provided by participating financial institutions to meet planned financial commitments. Whether you are managing home renovation, medical expenses, higher education costs, or consolidating existing high-interest obligations into a structured repayment schedule, a personal loan provides predictable monthly instalments.
            </p>
            <p className="text-slate-blue text-sm sm:text-base leading-relaxed">
              Because personal loans are unsecured, participating lenders determine eligibility based on your credit history, employment profile, debt-to-income ratio, and banking behaviour.
            </p>

            <div className="bg-white p-6 rounded-card border border-neutral-border shadow-subtle space-y-3">
              <h3 className="font-heading font-bold text-navy text-base">
                Common Uses for Personal Loans:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-text">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-dark shrink-0" />
                  <span>Planned home repairs & upgrades</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-dark shrink-0" />
                  <span>Emergency medical expenditures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-dark shrink-0" />
                  <span>Educational and upskilling costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-dark shrink-0" />
                  <span>Structured debt consolidation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Lender Responsibility */}
          <div className="lg:col-span-5 bg-navy text-white rounded-card-lg p-7 sm:p-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-accent text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Lender Responsibility Notice
            </div>
            <h3 className="text-xl font-heading font-bold">
              Direct Underwriting by Regulated Entities
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              QvikLoan (operated by Jatta M Kommerce Private Limited) is a loan facilitation platform. The participating RBI-regulated lender evaluates your application, sets your interest rate and tenure, issues the official Key Facts Statement (KFS), and executes disbursement directly to your bank account.
            </p>
            <div className="border-t border-white/10 pt-4 text-xs text-slate-300 space-y-2">
              <div>• No upfront facilitation fees charged by QvikLoan.</div>
              <div>• Complete freedom to accept or decline any offer.</div>
              <div>• Transparent terms governed by RBI Fair Practices Code.</div>
            </div>
          </div>

        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="bg-white py-14 sm:py-20 border-y border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">
              Requirements
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
              Eligibility & Verification Checklist
            </h2>
            <p className="text-sm text-slate-blue mt-2">
              Lenders establish their own underwriting criteria. Below is the general baseline requested by most participating institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Eligibility Block */}
            <div className="bg-neutral-bg p-7 sm:p-8 rounded-card border border-neutral-border space-y-5">
              <h3 className="text-lg font-heading font-bold text-navy flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-dark" />
                Typical Eligibility Criteria
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-blue">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Age:</span>
                  <span>Between 21 and 58 years at the time of loan maturity.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Citizenship:</span>
                  <span>Indian citizen with valid address proof and tax residence.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Employment:</span>
                  <span>Salaried employee at a registered firm or established self-employed professional.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Income:</span>
                  <span>Verifiable minimum monthly net income as stipulated by the assessing lender.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Credit Record:</span>
                  <span>Healthy credit history without active defaults or unregularised write-offs.</span>
                </li>
              </ul>
            </div>

            {/* Documents Block */}
            <div className="bg-neutral-bg p-7 sm:p-8 rounded-card border border-neutral-border space-y-5">
              <h3 className="text-lg font-heading font-bold text-navy flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-royal" />
                Documents Lenders May Request
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-blue">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Identity & KYC:</span>
                  <span>Permanent Account Number (PAN) and Aadhaar for digital verification.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Address Proof:</span>
                  <span>Utility bill, voter ID, driving licence, or passport.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Income Verification:</span>
                  <span>Last 3 months' salary slips or latest Form 16 / ITR for self-employed individuals.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Banking Statement:</span>
                  <span>Last 3 to 6 months' operative bank statement demonstrating active income credits.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Loan Cost Information, APR & Representative Example */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">
              Financial Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
              Loan Cost & APR Breakdown
            </h2>
            <p className="text-sm text-slate-blue mt-2">
              {complianceDisclosures.aprDisclaimer}
            </p>
          </div>

          {/* Representative Example Card */}
          <div className="bg-white p-6 sm:p-8 rounded-card-lg border border-neutral-border shadow-subtle">
            <div className="flex items-center gap-2 text-navy font-heading font-bold text-base mb-4 pb-3 border-b border-neutral-border">
              <Info className="w-4 h-4 text-royal" />
              <span>Representative Loan Cost Example (For Illustration Only)</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs">
              <div className="bg-neutral-bg p-3.5 rounded-xl border border-neutral-border">
                <span className="text-neutral-muted block mb-1">Loan Amount</span>
                <span className="text-navy font-bold font-heading text-sm sm:text-base">
                  {complianceDisclosures.representativeExample.amount}
                </span>
              </div>
              <div className="bg-neutral-bg p-3.5 rounded-xl border border-neutral-border">
                <span className="text-neutral-muted block mb-1">Tenure</span>
                <span className="text-navy font-bold font-heading text-sm sm:text-base">
                  {complianceDisclosures.representativeExample.tenure}
                </span>
              </div>
              <div className="bg-neutral-bg p-3.5 rounded-xl border border-neutral-border">
                <span className="text-neutral-muted block mb-1">Interest Rate</span>
                <span className="text-navy font-bold font-heading text-sm sm:text-base">
                  {complianceDisclosures.representativeExample.interestRate}
                </span>
              </div>
              <div className="bg-neutral-bg p-3.5 rounded-xl border border-neutral-border">
                <span className="text-neutral-muted block mb-1">Processing Fee</span>
                <span className="text-navy font-bold font-heading text-sm sm:text-base">
                  {complianceDisclosures.representativeExample.processingFee}
                </span>
              </div>
              <div className="bg-neutral-bg p-3.5 rounded-xl border border-neutral-border">
                <span className="text-neutral-muted block mb-1">Monthly EMI</span>
                <span className="text-royal font-bold font-heading text-sm sm:text-base">
                  {complianceDisclosures.representativeExample.monthlyInstalment}
                </span>
              </div>
              <div className="bg-royal-soft p-3.5 rounded-xl border border-royal/20">
                <span className="text-royal block mb-1 font-semibold">Total Repayable</span>
                <span className="text-navy font-bold font-heading text-sm sm:text-base">
                  {complianceDisclosures.representativeExample.totalPayable}
                </span>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-neutral-muted leading-relaxed">
              * {complianceDisclosures.representativeExample.note}
            </p>
          </div>

          {/* Interactive Calculator */}
          <FinancialCalculator onEnquireClick={() => onOpenEnquiry('personal')} />

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-card text-white p-8 sm:p-12 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold">
            Ready to Explore Personal Loan Options?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Submit your enquiry online. Submitting an enquiry does not commit you to borrowing or guarantee a loan offer.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenEnquiry('personal')}
              className="px-6 py-3 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold text-sm transition-colors"
            >
              Start Personal Loan Enquiry
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

