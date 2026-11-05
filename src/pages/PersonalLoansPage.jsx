import { Link } from 'react-router-dom';
import React from 'react';
import { ArrowRight, UserRound } from 'lucide-react';
import CtaDisclaimer from '../components/CtaDisclaimer';
import GlassLoanEnquirySection from '../components/GlassLoanEnquirySection';
import LoanDisclosure from '../components/LoanDisclosure';
import { EligibilityAndDocuments, LoanCosts, LoanUses } from '../components/LoanPageSections';
import { enquiryRules } from '../data/loanProducts';
import { formatINR } from '../lib/emi';
import { usePageMeta } from '../lib/usePageMeta';

const USES = [
  { title: 'Home improvement', image: '/images/personal-purpose-home.png' },
  { title: 'Medical expenses', image: '/images/personal-purpose-medical.png' },
  { title: 'Education', image: '/images/personal-purpose-education.png' },
  { title: 'Combine existing repayments', image: '/images/personal-purpose-consolidation.png' },
];

const WHO_CAN_ENQUIRE = [
  `Aged ${enquiryRules.minAge} to ${enquiryRules.maxAge}`,
  'Salaried or self-employed',
  `Monthly income of ${formatINR(enquiryRules.minMonthlyIncome)} or more`,
  'Indian resident',
];

const DOCUMENTS = ['PAN card', 'Aadhaar (masked)', 'Last 3 months’ bank statements', 'Salary slips or ITR'];

export default function PersonalLoansPage() {
  usePageMeta('Personal Loans', 'Explore personal loan options through QvikLoan: who can enquire, documents a lender may ask for, and an EMI calculator. QvikLoan is not a lender.');

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">

      {/* Hero */}
      <section className="bg-gradient-to-b from-white via-[#f6f8fe] to-transparent py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-soft text-royal-dark text-xs font-semibold">
              <UserRound className="w-3.5 h-3.5" aria-hidden="true" />
              Personal loan
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
              Personal loan options
            </h1>
            <p className="text-base sm:text-lg text-slate-blue leading-relaxed max-w-xl">
              For planned expenses like medical bills, education, a wedding or home repairs. Tell us what you need and our
              team will explain your options.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="#enquiry-section"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-semibold shadow-subtle transition-colors"
              >
                Start your enquiry
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
              <span className="text-sm text-neutral-muted">No fee · No obligation</span>
            </div>
            <CtaDisclaimer className="max-w-xl" />
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="rounded-2xl overflow-hidden w-full max-w-md shadow-premium border border-white">
              <img src="/images/personal-hero.jpg" alt="Couple looking at loan options on a laptop at home" className="w-full aspect-[4/3] object-cover" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <LoanUses title="What people use it for" items={USES} />

      <EligibilityAndDocuments
        who={WHO_CAN_ENQUIRE}
        whoNote="Meeting these does not guarantee a loan. Each lender has its own rules."
        documents={DOCUMENTS}
      />

      <GlassLoanEnquirySection initialType="personal" />

      <LoanCosts product="personal" />

      <LoanDisclosure product="personal" />
    </div>
  );
}
