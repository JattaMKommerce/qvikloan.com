import { Link } from 'react-router-dom';
import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, FileText, Info, HelpCircle, AlertCircle, Clock, Home, Stethoscope, GraduationCap, RefreshCw } from 'lucide-react';
import FinancialCalculator from '../components/FinancialCalculator';
import { complianceDisclosures } from '../data/lendersData';
import { companyInfo } from '../data/companyInfo';

export default function PersonalLoansPage() {
  const purposes = [
    {
      title: 'Home improvement',
      desc: 'Renovations, repairs and upgrades at home.',
      icon: Home,
      image: '/images/personal-purpose-home.png'
    },
    {
      title: 'Medical expenses',
      desc: 'Treatments and healthcare costs for you or your family.',
      icon: Stethoscope,
      image: '/images/personal-purpose-medical.png'
    },
    {
      title: 'Education',
      desc: 'Courses, certifications and academic fees.',
      icon: GraduationCap,
      image: '/images/personal-purpose-education.png'
    },
    {
      title: 'Debt consolidation',
      desc: 'Bring several existing repayments into one.',
      icon: RefreshCw,
      image: '/images/personal-purpose-consolidation.png'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Header with Visual Card Graphic */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-soft text-royal text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Transparent Personal Borrowing</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
                Personal Loan Options
              </h1>
              <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
                Enquire online and review any offer from a participating lender — including its Key Facts Statement (KFS) — before you decide.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/#enquiry-section"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold text-sm shadow-subtle hover:shadow-premium transition-all"
                >
                  <span>Enquire for Personal Loan</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <div className="text-xs text-neutral-muted">
                  No upfront charges • Non-committal
                </div>
              </div>
            </div>

            {/* Right Visual Graphic with Side Blending */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="glass rounded-2xl overflow-hidden relative w-full max-w-md">
                <img
                  src="/images/personal-loans-hero.png"
                  alt="Personal Loans Evaluation Summary"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                {/* Side blending feather overlays */}
                <div className="absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Purpose of Borrowing - Rich Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">
            Borrowing Scenarios
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
            Purpose of Personal Borrowing
          </h2>
          <p className="text-sm text-slate-blue mt-2">
            Common reasons people explore a personal loan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {purposes.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="glass rounded-2xl p-5 hover-lift flex flex-col justify-between transition-all"
              >
                <div className="space-y-3">
                  <div className="rounded-xl overflow-hidden bg-white/50 border border-white/70 p-2 flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-32 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-base font-heading font-bold text-navy">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-blue leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Eligibility & Documents with Status Visuals */}
      <section className="py-14 sm:py-20 bg-white/30 backdrop-blur-sm border-y border-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">
              Verification Checklist
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
              Eligibility & Required Documents
            </h2>
            <p className="text-sm text-slate-blue mt-2">
              Lenders establish their own underwriting criteria. Below is the general baseline requested by most participating institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Eligibility Block */}
            <div className="backdrop-blur-md bg-neutral-bg/70 p-7 sm:p-8 rounded-2xl border border-neutral-border shadow-subtle space-y-5">
              <h3 className="text-lg font-heading font-bold text-navy flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-dark" />
                <span>Typical Eligibility Criteria</span>
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-blue">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Age Bracket:</span>
                  <span>Between 21 and 58 years at the time of loan maturity.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Citizenship:</span>
                  <span>Indian citizen with valid address proof and tax residence.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Employment Profile:</span>
                  <span>Salaried employee at a registered entity or established self-employed professional.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Income Regularity:</span>
                  <span>Verifiable minimum monthly net income as stipulated by the assessing lender.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Credit History:</span>
                  <span>Demonstrated track record of timely credit service without unregularised defaults.</span>
                </li>
              </ul>
            </div>

            {/* Documents Block */}
            <div className="backdrop-blur-md bg-neutral-bg/70 p-7 sm:p-8 rounded-2xl border border-neutral-border shadow-subtle space-y-5">
              <h3 className="text-lg font-heading font-bold text-navy flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-royal" />
                <span>Documents Lenders May Request</span>
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-blue">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Identity & KYC:</span>
                  <span>Permanent Account Number (PAN) and Aadhaar for digital verification.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Address Proof:</span>
                  <span>Utility bill, voter ID, driving licence, or passport.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Income Records:</span>
                  <span>Last 3 months' salary slips or latest Form 16 / ITR filings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Bank Statement:</span>
                  <span>Last 3 to 6 months' official bank statement demonstrating salary or business credits.</span>
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
          <div className="glass p-6 sm:p-8 rounded-2xl">
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
          <FinancialCalculator />

        </div>
      </section>

      

    </div>
  );
}
