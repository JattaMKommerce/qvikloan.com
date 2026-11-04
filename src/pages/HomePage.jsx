import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Percent, Calendar, CreditCard, DollarSign, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import FinancialCalculator from '../components/FinancialCalculator';
import GlassLoanEnquirySection from '../components/GlassLoanEnquirySection';
import FintechShowcaseCards from '../components/FintechShowcaseCards';
import { companyInfo } from '../data/companyInfo';
import { participatingLenders } from '../data/lendersData';

export default function HomePage({ onOpenEnquiry }) {
  const navigate = useNavigate();

  const scrollToEnquiry = (type = 'personal') => {
    const el = document.getElementById('enquiry-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenEnquiry(type);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* ==================================================
          SECTION 1: HERO
          ================================================== */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 lg:pb-16 bg-gradient-to-b from-white via-royal-soft/20 to-neutral-bg border-b border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Content & Buttons */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-royal/20 text-royal text-xs font-semibold tracking-wide shadow-sm">
                <ShieldCheck className="w-4 h-4 text-royal" />
                <span>Transparent Loan Facilitation Platform</span>
              </div>

              {/* Exact CEO Approved Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy tracking-tight leading-[1.15]">
                Explore personal and business loan options
              </h1>

              {/* Exact CEO Approved Description */}
              <p className="text-base sm:text-lg text-slate-blue font-normal leading-relaxed">
                Start with an online enquiry. QvikLoan helps connect you with participating lenders so you can review any offer you receive and decide whether it suits your needs.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => scrollToEnquiry('personal')}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white text-sm sm:text-base font-bold shadow-subtle hover:shadow-premium transition-all duration-200"
                >
                  <span>Explore personal loans</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>

                <button
                  onClick={() => scrollToEnquiry('business')}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl backdrop-blur-md bg-white/80 hover:bg-white text-navy border border-neutral-border text-sm sm:text-base font-bold shadow-subtle hover:border-slate-blue transition-all duration-200"
                >
                  <span>Explore business loans</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Exact CEO Approved Disclosure */}
              <div className="pt-3 border-t border-neutral-border/80">
                <p className="text-xs text-neutral-muted leading-relaxed">
                  <strong>Important Disclosure:</strong> Loan offers are subject to the lender’s eligibility criteria, verification and approval. The lender determines the loan amount, interest rate, charges, repayment period and disbursement timing.
                </p>
              </div>

            </div>

            {/* Right Column: Hero Visual Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none">
                <div className="overflow-hidden rounded-card-lg border border-neutral-border shadow-premium backdrop-blur-md bg-white/80">
                  <img
                    src="/images/qvikloan-hero-illustration.png"
                    alt="QvikLoan Loan Enquiry Assessment and Participating Lenders"
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          FINTECH SHOWCASE CARDS (Paritetbank Style Aesthetic)
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FintechShowcaseCards onEnquireClick={() => scrollToEnquiry('personal')} />
      </section>

      {/* ==================================================
          SECTION 2: LOAN CATEGORIES (Screenshot Matching)
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">
            Tailored Options
          </span>
          {/* Exact CEO Approved Heading */}
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">
            Find the right place to start
          </h2>
        </div>

        {/* Clean, normal-sized cards matching user's screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* CARD 1: Personal loans */}
          <div className="backdrop-blur-md bg-white/95 rounded-2xl border border-neutral-border shadow-subtle hover-lift overflow-hidden flex flex-col justify-between transition-all">
            {/* Top Illustration Container */}
            <div className="p-4 sm:p-5 pb-0">
              <div className="rounded-xl overflow-hidden bg-neutral-bg/60 border border-neutral-border/60 flex items-center justify-center">
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
          <div className="backdrop-blur-md bg-white/95 rounded-2xl border border-neutral-border shadow-subtle hover-lift overflow-hidden flex flex-col justify-between transition-all">
            {/* Top Illustration Container */}
            <div className="p-4 sm:p-5 pb-0">
              <div className="rounded-xl overflow-hidden bg-neutral-bg/60 border border-neutral-border/60 flex items-center justify-center">
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

      {/* ==================================================
          ON-PAGE GLASSMORPHIC ENQUIRY SECTION (User Request)
          ================================================== */}
      <GlassLoanEnquirySection />

      {/* ==================================================
          SECTION 3: HOW QVIKLOAN WORKS
          ================================================== */}
      <section className="bg-neutral-bg/80 py-16 sm:py-20 border-y border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">
              Step-by-Step Transparency
            </span>
            {/* Exact CEO Approved Heading */}
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">
              How QvikLoan works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* CARD 01 */}
            <div className="backdrop-blur-md bg-white/90 rounded-card p-6 sm:p-7 border border-neutral-border shadow-subtle hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-royal-soft text-royal font-heading font-extrabold text-lg flex items-center justify-center border border-royal/20">
                  01
                </div>
                <h3 className="text-lg font-heading font-bold text-navy leading-snug">
                  Tell us what you’re looking for.
                </h3>
                <p className="text-sm text-slate-blue leading-relaxed">
                  Select the type of loan and enter the amount you wish to enquire about.
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-border/60 text-xs font-semibold text-royal">
                Step 1: Preference Input
              </div>
            </div>

            {/* CARD 02 */}
            <div className="backdrop-blur-md bg-white/90 rounded-card p-6 sm:p-7 border border-neutral-border shadow-subtle hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-royal-soft text-royal font-heading font-extrabold text-lg flex items-center justify-center border border-royal/20">
                  02
                </div>
                <h3 className="text-lg font-heading font-bold text-navy leading-snug">
                  Submit your enquiry.
                </h3>
                <p className="text-sm text-slate-blue leading-relaxed">
                  Provide your contact details and review how your information will be used before you submit.
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-border/60 text-xs font-semibold text-royal">
                Step 2: Consent & Details
              </div>
            </div>

            {/* CARD 03 */}
            <div className="backdrop-blur-md bg-white/90 rounded-card p-6 sm:p-7 border border-neutral-border shadow-subtle hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-soft text-teal-dark font-heading font-extrabold text-lg flex items-center justify-center border border-teal-accent/20">
                  03
                </div>
                <h3 className="text-lg font-heading font-bold text-navy leading-snug">
                  Complete the lender’s checks.
                </h3>
                <p className="text-sm text-slate-blue leading-relaxed">
                  If a lender can consider your application, it may ask for identity, income, credit or business documents.
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-border/60 text-xs font-semibold text-teal-dark">
                Step 3: Verification
              </div>
            </div>

            {/* CARD 04 */}
            <div className="backdrop-blur-md bg-white/90 rounded-card p-6 sm:p-7 border border-neutral-border shadow-subtle hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-navy text-white font-heading font-extrabold text-lg flex items-center justify-center">
                  04
                </div>
                <h3 className="text-lg font-heading font-bold text-navy leading-snug">
                  Review the offer and decide.
                </h3>
                <p className="text-sm text-slate-blue leading-relaxed">
                  If a lender makes an offer, read the Key Facts Statement (KFS), where applicable, and the loan agreement before accepting. You can decline an offer.
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-border/60 text-xs font-semibold text-navy">
                Step 4: Decision & Agreement
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-sm font-bold text-royal hover:underline"
            >
              <span>Learn more about how our digital facilitation works</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 4: FINANCIAL TRANSPARENCY
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">
            Informed Decisions
          </span>
          {/* Exact CEO Approved Heading */}
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy mb-4">
            Know what to compare
          </h2>
          {/* Exact CEO Approved Content */}
          <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
            Look at the APR, monthly instalment, repayment period and total amount payable together. A lower monthly instalment can come with a longer repayment period. Check the lender’s fees and the terms for late payments and early repayment.
          </p>
        </div>

        {/* Four Visual Information Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Block 1: Annual Percentage Rate */}
          <div className="backdrop-blur-md bg-white/90 rounded-card p-6 border border-neutral-border shadow-subtle hover-lift">
            <div className="w-12 h-12 rounded-xl bg-royal-soft text-royal flex items-center justify-center mb-4">
              <Percent className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-heading font-bold text-navy mb-2">
              Annual Percentage Rate
            </h3>
            <p className="text-xs text-neutral-muted leading-relaxed">
              APR reflects the total annual cost of borrowing, including the nominal interest rate and mandatory lender processing fees.
            </p>
          </div>

          {/* Block 2: Monthly Instalment */}
          <div className="backdrop-blur-md bg-white/90 rounded-card p-6 border border-neutral-border shadow-subtle hover-lift">
            <div className="w-12 h-12 rounded-xl bg-teal-soft text-teal-dark flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-heading font-bold text-navy mb-2">
              Monthly Instalment
            </h3>
            <p className="text-xs text-neutral-muted leading-relaxed">
              The fixed amount you agree to pay each month to service the loan, encompassing both principal repayment and interest components.
            </p>
          </div>

          {/* Block 3: Repayment Period */}
          <div className="backdrop-blur-md bg-white/90 rounded-card p-6 border border-neutral-border shadow-subtle hover-lift">
            <div className="w-12 h-12 rounded-xl bg-royal-soft text-royal flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-heading font-bold text-navy mb-2">
              Repayment Period
            </h3>
            <p className="text-xs text-neutral-muted leading-relaxed">
              The duration across which the loan is repaid. Longer tenures reduce monthly payments but increase total cumulative interest.
            </p>
          </div>

          {/* Block 4: Total Amount Payable */}
          <div className="backdrop-blur-md bg-white/90 rounded-card p-6 border border-neutral-border shadow-subtle hover-lift">
            <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-heading font-bold text-navy mb-2">
              Total Amount Payable
            </h3>
            <p className="text-xs text-neutral-muted leading-relaxed">
              The exact aggregate sum of all principal repayments, cumulative interest, and upfront processing fees over the loan tenure.
            </p>
          </div>

        </div>

        {/* Interactive Comparison Calculator */}
        <FinancialCalculator onEnquireClick={() => scrollToEnquiry('personal')} />

      </section>

      {/* ==================================================
          SECTION 5: LENDER INFORMATION
          ================================================== */}
      <section className="bg-white py-16 sm:py-20 border-y border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-soft text-royal text-xs font-semibold">
                Platform Transparency & Lending Governance
              </div>
              
              {/* Exact CEO Approved Heading */}
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">
                Who provides the loan?
              </h2>

              {/* Exact CEO Approved Content */}
              <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
                QvikLoan is a loan enquiry and facilitation platform operated by Jatta M Kommerce Private Limited. The lender evaluates the application, issues any loan offer and handles disbursement under the applicable loan agreement.
              </p>

              {/* Exact CEO Approved Links */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <Link
                  to="/participating-lenders"
                  className="inline-flex items-center text-royal font-bold text-base hover:underline"
                >
                  <span>View participating lenders</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>

                <span className="text-neutral-border font-bold">·</span>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center text-slate-blue font-bold text-base hover:underline"
                >
                  <span>Contact support</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>

              <div className="pt-4 border-t border-neutral-border text-xs text-neutral-muted space-y-1">
                <div><strong>Operating Corporate Entity:</strong> {companyInfo.name}</div>
                <div><strong>Registered Office:</strong> {companyInfo.address.registeredOffice}</div>
                <div><strong>Helpline:</strong> {companyInfo.phone} ({companyInfo.email})</div>
              </div>
            </div>

            {/* Participating Lenders Snapshot */}
            <div className="lg:col-span-5 backdrop-blur-md bg-neutral-bg/90 p-6 sm:p-7 rounded-card-lg border border-neutral-border space-y-4 shadow-subtle">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-border">
                <span className="text-xs font-bold text-navy uppercase tracking-wider">
                  Partner Institutional Lenders
                </span>
                <span className="text-xs text-teal-dark font-semibold">RBI Regulated NBFCs</span>
              </div>

              <div className="space-y-3">
                {participatingLenders.slice(0, 3).map((lender) => (
                  <div
                    key={lender.id}
                    className="p-3.5 bg-white rounded-xl border border-neutral-border text-xs space-y-1 shadow-xs"
                  >
                    <div className="flex justify-between font-bold text-navy">
                      <span>{lender.name}</span>
                      <span className="text-royal text-[11px] font-medium">{lender.products[0]}</span>
                    </div>
                    <div className="text-neutral-muted text-[11px]">
                      Registration: {lender.rbiRegNo} • Direct Disbursement
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

      {/* ==================================================
          SECTION 6: FINAL CTA
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-card-lg text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-premium text-center">
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-accent text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Transparent & Free Online Enquiry
            </span>

            {/* Exact CEO Approved Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
              Ready to explore your options?
            </h2>

            {/* Exact CEO Approved Button */}
            <div className="pt-2">
              <button
                onClick={() => scrollToEnquiry('personal')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-royal hover:bg-royal-hover text-white text-base font-bold shadow-lg transition-all duration-200"
              >
                <span>Start an enquiry</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Exact CEO Approved Disclosure */}
            <div className="pt-4">
              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed max-w-xl mx-auto">
                Submitting an enquiry does not commit you to borrowing or guarantee a loan offer.
              </p>
            </div>
          </div>

          {/* Subtle Background Elements */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-royal/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-teal-accent/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>

    </div>
  );
}
