import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, ChevronRight, Monitor, Landmark, Cpu } from 'lucide-react';
import CtaDisclaimer from '../components/CtaDisclaimer';
import FinancialCalculator from '../components/FinancialCalculator';
import GlassLoanEnquirySection from '../components/GlassLoanEnquirySection';
import LoanDisclosure from '../components/LoanDisclosure';
import RoleTable from '../components/RoleTable';
import { companyInfo } from '../data/companyInfo';
import { usePageMeta } from '../lib/usePageMeta';

function TypewriterText() {
  const words = [
    'personal and business loan options',
    'personal loan options',
    'business loan options',
  ];
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(words[0].length);
  const [reverse, setReverse] = React.useState(false);

  React.useEffect(() => {
    // Hold the finished phrase so it can be read before it is erased.
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, 3200);
      return () => clearTimeout(timeout);
    }

    // Short pause on the empty line before typing the next phrase.
    if (subIndex === 0 && reverse) {
      const timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 500);
      return () => clearTimeout(timeout);
    }

    // Typing speed per letter (ms): slower when writing, a bit quicker when erasing.
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 55 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-royal inline">
      {/* Screen readers and search engines get the full phrase, not the animation. */}
      <span className="sr-only">{words[0]}</span>
      <span aria-hidden="true">
        {words[index].substring(0, subIndex)}
        <span className="inline-block w-[3px] h-[0.8em] bg-royal align-baseline ml-1 animate-pulse" />
      </span>
    </span>
  );
}

export default function HomePage() {
  usePageMeta(null, 'QvikLoan is a digital loan facilitation platform operated by Jatta M Kommerce Private Limited. Explore personal and business loan options; the lending institution decides eligibility, approval, rates and disbursement.');

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <section className="relative overflow-hidden bg-white">
        
        {/* Full 3D Glass Ribbon in Background - Exactly Like Before */}
        <div className="absolute inset-y-0 right-0 w-full sm:w-[85%] lg:w-[65%] xl:w-[60%] pointer-events-none select-none overflow-hidden flex items-center justify-end opacity-40 sm:opacity-100 [mask-image:linear-gradient(to_right,transparent_0%,black_30%,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_30%,black_85%,transparent_100%)]">
          <img
            src="/images/qvikloan-hero-glass-ribbon.png"
            alt=""
            className="h-full w-auto max-w-none object-contain object-right mix-blend-multiply"
            loading="eager"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="max-w-xl lg:max-w-xl space-y-7 sm:space-y-8">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-royal/30 text-royal text-xs font-semibold tracking-wide shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-royal" />
              <span>Transparent Loan Facilitation Platform</span>
            </div>

            {/* Dynamic Typewriter Headline: Constant 'Explore' + Autowriting Options */}
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-heading font-extrabold text-[#111827] tracking-tight leading-[1.15] min-h-[2.4em] max-[349px]:min-h-[3.45em]">
              Explore <TypewriterText />
            </h1>

            {/* Exact CEO Approved Description */}
            <p className="text-base sm:text-[17px] text-[#4b5563] font-normal leading-relaxed max-w-lg">
              Start with an online enquiry. QvikLoan collects your enquiry and explains loan options in plain language. If a lender partnership is active, we share your enquiry with a listed lender only with your consent. We are not a lender.
            </p>

            {/* CTA Buttons: each opens the enquiry form below with its loan type already selected */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <Link
                to="/#enquiry-section"
                state={{ loanType: 'personal' }}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white text-sm sm:text-base font-semibold shadow-sm transition-all duration-200"
              >
                <span>Explore personal loans</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                to="/#enquiry-section"
                state={{ loanType: 'business' }}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-50 text-[#1f2937] border border-[#e5e7eb] hover:border-royal text-sm sm:text-base font-semibold shadow-sm transition-all duration-200"
              >
                <span>Explore business loans</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Important Disclosure */}
            <div className="pt-5 border-t border-[#f3f4f6] max-w-lg">
              <CtaDisclaimer />
            </div>

          </div>
        </div>
      </section>

      {/* What QvikLoan does: platform vs lender vs technology providers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="what-we-do">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">About the platform</span>
          <h2 id="what-we-do" className="text-3xl sm:text-4xl font-heading font-extrabold text-navy mb-4">
            What QvikLoan does
          </h2>
          <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
            QvikLoan is a digital loan facilitation platform that helps individuals and businesses explore suitable
            loan options through a loan enquiry facilitation process. QvikLoan currently has no active lending partner.
          </p>
          <p className="text-base text-slate-blue leading-relaxed mt-3">
            QvikLoan is not a lender. Final loan eligibility, approval, applicable interest rates, repayment terms and
            disbursement are always determined by the lending institution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Monitor,
              title: 'QvikLoan, the platform',
              body: 'Takes your enquiry, explains your options and contacts you about it. We do not currently share enquiries with any lender. When a lender partnership is confirmed, that lender will be listed on our Lending Partners page before any sharing begins.',
            },
            {
              icon: Landmark,
              title: 'The lending institution',
              body: 'If and when a lender partnership is confirmed, that bank or RBI-registered NBFC will be named on our Lending Partners page. That lender alone will check eligibility, decide, set rates, give KFS, disburse and collect repayment.',
            },
            {
              icon: Cpu,
              title: 'Technology providers',
              body: 'Companies that run parts of this website for us, such as hosting and the AI chat assistant. They do not make lending decisions. They are named in our Privacy Policy.',
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-neutral-border bg-white p-6 space-y-3 shadow-subtle">
              <div className="w-10 h-10 rounded-xl bg-royal-soft text-royal-dark flex items-center justify-center">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-heading font-bold text-navy">{title}</h3>
              <p className="text-sm text-slate-blue leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">
            Tailored Options
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">
            Find the right place to start
          </h2>
        </div>

        {/* Clean, normal-sized cards matching user's screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* CARD 1: Personal loans */}
          <div className="glass rounded-2xl hover-lift overflow-hidden flex flex-col justify-between transition-all group">
            {/* Top Image Container */}
            <div className="p-4 sm:p-5 pb-0">
              <div className="rounded-xl overflow-hidden bg-slate-100/60 border border-white/80 shadow-sm flex items-center justify-center">
                <img
                  src="/images/personal-loan.jpg"
                  alt="Personal Loans"
                  className="w-full h-48 sm:h-56 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content matching CEO copy & user screenshot format */}
            <div className="p-6 sm:p-7 space-y-3">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy">
                Personal loans
              </h3>
              <p className="text-slate-blue text-xs sm:text-sm leading-relaxed">
                Explore borrowing options for planned personal expenses. Before accepting an offer, check the monthly instalment, annual percentage rate (APR), fees and total amount repayable.
              </p>
              
              <div className="pt-2">
                <Link
                  to="/personal-loans"
                  className="inline-flex items-center text-royal font-bold text-sm hover:underline group"
                >
                  <span>View personal loan options</span>
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 2: Business loans */}
          <div className="glass rounded-2xl hover-lift overflow-hidden flex flex-col justify-between transition-all group">
            {/* Top Image Container */}
            <div className="p-4 sm:p-5 pb-0">
              <div className="rounded-xl overflow-hidden bg-slate-100/60 border border-white/80 shadow-sm flex items-center justify-center">
                <img
                  src="/images/business-loan.jpg"
                  alt="Business Loans"
                  className="w-full h-48 sm:h-56 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content matching CEO copy & user screenshot format */}
            <div className="p-6 sm:p-7 space-y-3">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy">
                Business loans
              </h3>
              <p className="text-slate-blue text-xs sm:text-sm leading-relaxed">
                Explore financing options for business expenses such as inventory, equipment or working capital. Available products and documentation requirements depend on the lender and your business profile.
              </p>

              <div className="pt-2">
                <Link
                  to="/business-loans"
                  className="inline-flex items-center text-teal-dark font-bold text-sm hover:underline group"
                >
                  <span>View business loan options</span>
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
      <GlassLoanEnquirySection />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">
            Informed Decisions
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy mb-4">
            Know what to compare
          </h2>
          <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
            Look at the APR, monthly instalment, repayment period and total amount payable together. A lower monthly instalment can come with a longer repayment period. Check the lender’s fees and the terms for late payments and early repayment.
          </p>
        </div>

        {/* Interactive Comparison Calculator */}
        <FinancialCalculator />

      </section>
      <section className="py-16 sm:py-20 bg-white/30 backdrop-blur-sm border-y border-white/70" aria-labelledby="who-provides">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-royal uppercase tracking-wider block">Who does what</span>
            <h2 id="who-provides" className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">
              Who provides the loan?
            </h2>
            <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
              The lending institution, not QvikLoan. Here is how responsibilities are split.
            </p>
          </div>

          <RoleTable />

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link to="/participating-lenders" className="inline-flex items-center text-royal font-bold text-base hover:underline">
              <span>Lending partners</span>
              <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
            </Link>
            <Link to="/grievance-redressal" className="inline-flex items-center text-royal font-bold text-base hover:underline">
              <span>Raise a complaint</span>
              <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
            </Link>
            <Link to="/contact-us" className="inline-flex items-center text-slate-blue font-bold text-base hover:underline">
              <span>Contact us</span>
              <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <LoanDisclosure product="personal" />
    </div>
  );
}
