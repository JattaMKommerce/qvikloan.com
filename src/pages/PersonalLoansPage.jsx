import { Link } from 'react-router-dom';
import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, FileText, Info, Home, Stethoscope, GraduationCap, RefreshCw } from 'lucide-react';
import FinancialCalculator from '../components/FinancialCalculator';
import LoanTermsTable from '../components/LoanTermsTable';
import { workedExample } from '../data/loanProducts';
import { calculateEmi, formatINR } from '../lib/emi';
import { usePageMeta } from '../lib/usePageMeta';

const example = { ...workedExample, ...calculateEmi(workedExample.amount, workedExample.annualRate, workedExample.tenureMonths) };

export default function PersonalLoansPage() {
  usePageMeta('Personal Loans', 'Explore personal loan options through QvikLoan. Loan terms, eligibility, an EMI calculator and what to check in the lender’s Key Facts Statement. QvikLoan is not a lender.');
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-soft text-royal-dark text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Personal loans</span>
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
                <div className="text-sm text-neutral-muted">
                  No fee to enquire · No obligation to accept an offer
                </div>
              </div>
            </div>

            {/* Right Visual Graphic with Side Blending */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="glass rounded-2xl overflow-hidden relative w-full max-w-md">
                <img
                  src="/images/personal-loans-hero.png"
                  alt=""
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
              Before you enquire
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
              Eligibility & Required Documents
            </h2>
            <p className="text-sm text-slate-blue mt-2">
              Each lender sets its own criteria and decides what documents it needs. These are the things lenders commonly look at.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Eligibility Block */}
            <div className="backdrop-blur-md bg-neutral-bg/70 p-7 sm:p-8 rounded-2xl border border-neutral-border shadow-subtle space-y-5">
              <h3 className="text-lg font-heading font-bold text-navy flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-dark" />
                <span>What lenders commonly check</span>
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-blue">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Age:</span>
                  <span>Within the lender’s age limits. You must be at least 18 to enquire through QvikLoan.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Residence:</span>
                  <span>Indian resident with a valid address in a location the lender serves.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Employment Profile:</span>
                  <span>Salaried, self-employed professional or self-employed business owner.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Income Regularity:</span>
                  <span>Income the lender can verify, at or above its minimum.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Credit History:</span>
                  <span>Your credit report and record of repaying past loans and cards.</span>
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
                  <span>PAN and an officially valid ID such as Aadhaar, collected by the lender for KYC.</span>
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
                  <span>Recent bank statements showing salary or business income.</span>
                </li>
              </ul>
              <p className="text-sm text-neutral-muted border-t border-neutral-border pt-4">
                QvikLoan does not collect these documents on this website. Share them only with the lender, through its
                official app, website or branch.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Loan terms, worked example and EMI calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" aria-labelledby="personal-terms">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">Loan terms</span>
          <h2 id="personal-terms" className="text-2xl sm:text-3xl font-heading font-bold text-navy">
            Personal loan terms and costs
          </h2>
          <p className="text-sm sm:text-base text-slate-blue mt-2">
            The lender sets every term below. Before you accept an offer, compare the APR (the yearly cost including
            interest and fees), the EMI and the total amount you will repay.
          </p>
        </div>

        <LoanTermsTable product="personal" />

        <div className="glass p-6 sm:p-8 rounded-2xl">
          <div className="flex items-center gap-2 text-navy font-heading font-bold text-base mb-4 pb-3 border-b border-neutral-border">
            <Info className="w-4 h-4 text-royal" aria-hidden="true" />
            <span>Worked example (hypothetical)</span>
          </div>
          <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-sm">
            {[
              ['Loan amount', formatINR(example.amount)],
              ['Interest rate', `${example.annualRate}% p.a. (reducing balance)`],
              ['Tenure', `${example.tenureMonths} months`],
              ['Monthly EMI', formatINR(example.emi)],
              ['Total repayment', formatINR(example.totalRepayment)],
            ].map(([label, value]) => (
              <div key={label} className="bg-neutral-bg p-3.5 rounded-xl border border-neutral-border">
                <dt className="text-neutral-muted mb-1">{label}</dt>
                <dd className="text-navy font-bold font-heading text-base">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-slate-blue leading-relaxed">
            Total interest in this example: {formatINR(example.totalInterest)}. Processing fees and other charges would
            add to the cost. This example only shows how the calculation works; the figures are not any lender's rates
            and are not an offer.
          </p>
        </div>

        <FinancialCalculator product="personal" />
      </section>
    </div>
  );
}
