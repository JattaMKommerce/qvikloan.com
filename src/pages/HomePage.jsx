import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Percent, Calendar, CreditCard, DollarSign, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import FinancialCalculator from '../components/FinancialCalculator';
import GlassLoanEnquirySection from '../components/GlassLoanEnquirySection';
import { companyInfo } from '../data/companyInfo';
import { participatingLenders } from '../data/lendersData';

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
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, 2500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 25 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-royal inline">
      {words[index].substring(0, subIndex)}
      <span className="inline-block w-[3px] h-[0.8em] bg-royal align-baseline ml-1 animate-pulse" />
    </span>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [heroAmount, setHeroAmount] = React.useState(300000);
  const [heroCategory, setHeroCategory] = React.useState('personal');

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

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
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-heading font-extrabold text-[#111827] tracking-tight leading-[1.15] min-h-[2.4em]">
              Explore <TypewriterText />
            </h1>

            {/* Exact CEO Approved Description */}
            <p className="text-base sm:text-[17px] text-[#4b5563] font-normal leading-relaxed max-w-lg">
              Start with an online enquiry. QvikLoan helps connect you with participating lenders so you can review any offer you receive and decide whether it suits your needs.
            </p>

            {/* Important Disclosure - Clean & Spacious without redundant Start Enquiry button */}
            <div className="pt-5 border-t border-[#f3f4f6] max-w-lg">
              <p className="text-[11px] text-[#6b7280] leading-relaxed">
                <strong>Important Disclosure:</strong> Loan offers are subject to the lender’s eligibility criteria, verification and approval. The lender determines the loan amount, interest rate, charges, repayment period and disbursement timing.
              </p>
            </div>

          </div>
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
          <div className="glass rounded-2xl hover-lift overflow-hidden flex flex-col justify-between transition-all">
            {/* Top Illustration Container */}
            <div className="p-4 sm:p-5 pb-0">
              <div className="rounded-xl overflow-hidden bg-white/50 border border-white/70 flex items-center justify-center">
                <img
                  src="/images/qvikloan-personal-loan-illustration.png"
                  alt="Personal Loans"
                  className="w-full h-44 sm:h-48 object-contain object-center"
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
          <div className="glass rounded-2xl hover-lift overflow-hidden flex flex-col justify-between transition-all">
            {/* Top Illustration Container */}
            <div className="p-4 sm:p-5 pb-0">
              <div className="rounded-xl overflow-hidden bg-white/50 border border-white/70 flex items-center justify-center">
                <img
                  src="/images/qvikloan-business-loan-illustration.png"
                  alt="Business Loans"
                  className="w-full h-44 sm:h-48 object-contain object-center"
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
      <section className="py-16 sm:py-20 bg-white/30 backdrop-blur-sm border-y border-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-soft text-royal text-xs font-semibold">
                Platform Transparency & Lending Governance
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">
                Who provides the loan?
              </h2>
              <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
                QvikLoan is a loan enquiry and facilitation platform operated by Jatta M Kommerce Private Limited. The lender evaluates the application, issues any loan offer and handles disbursement under the applicable loan agreement.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <Link
                  to="/participating-lenders"
                  className="inline-flex items-center text-royal font-bold text-base hover:underline"
                >
                  <span>View participating lenders</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>

                <span className="text-neutral-border font-bold">·</span>

                <a
                  href={`mailto:${companyInfo.email}`}
                  className="inline-flex items-center text-slate-blue font-bold text-base hover:underline"
                >
                  <span>Contact support</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            </div>

            {/* Participating Lenders Snapshot */}
            <div className="lg:col-span-5 glass rounded-card-lg p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-border">
                <span className="text-xs font-bold text-navy uppercase tracking-wider">
                  Partner Institutional Lenders
                </span>
                <span className="text-xs text-teal-dark font-semibold">Participating lenders</span>
              </div>

              <div className="space-y-3">
                {participatingLenders.slice(0, 3).map((lender) => (
                  <div
                    key={lender.id}
                    className="p-3.5 bg-white/60 rounded-xl border border-white/80 text-xs space-y-1"
                  >
                    <div className="flex justify-between font-bold text-navy">
                      <span>{lender.name}</span>
                      <span className="text-royal text-[11px] font-medium">{lender.products[0]}</span>
                    </div>
                    <div className="text-neutral-muted text-[11px]">
                      Loan terms are set by the lender
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/participating-lenders"
                className="block text-center text-xs font-bold text-royal hover:underline pt-2"
              >
                See all participating lenders & grievance contacts →
              </Link>
            </div>

          </div>
        </div>
      </section>
      

    </div>
  );
}
