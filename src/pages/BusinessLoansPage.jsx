import { Link } from 'react-router-dom';
import React from 'react';
import { ArrowRight, Building2, Package, Layers, Info, Briefcase } from 'lucide-react';
import CtaDisclaimer from '../components/CtaDisclaimer';
import FinancialCalculator from '../components/FinancialCalculator';
import LoanDisclosure from '../components/LoanDisclosure';
import LoanTermsTable from '../components/LoanTermsTable';
import { companyInfo } from '../data/companyInfo';
import { enquiryRules } from '../data/loanProducts';
import { usePageMeta } from '../lib/usePageMeta';

export default function BusinessLoansPage() {
  usePageMeta('Business Loans', 'Explore business loan options for working capital, inventory or equipment through QvikLoan. Loan terms, eligibility and an EMI calculator. QvikLoan is not a lender.');
  const facilities = [
    {
      title: 'Working capital',
      desc: 'Manage day-to-day expenses and gaps between payments.',
      icon: Layers,
      image: '/images/business-facility-working-capital.png'
    },
    {
      title: 'Inventory & stock',
      desc: 'Buy stock and raw materials ahead of busy seasons.',
      icon: Package,
      image: '/images/business-facility-inventory.png'
    },
    {
      title: 'Equipment & machinery',
      desc: 'Purchase or upgrade machinery, tools and technology.',
      icon: Briefcase,
      image: '/images/business-facility-equipment.png'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">

      {/* Hero Header with Matching Visual Graphic & Feathering */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-soft text-royal-dark text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                <span>Commercial &amp; MSME Solutions</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
                Business Loan Options
              </h1>
              <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
                Explore business financing options. The lending institution decides eligibility, approval, rates and disbursement. QvikLoan is not a lender.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/#enquiry-section" state={{ loanType: 'business' }}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold text-sm shadow-subtle hover:shadow-premium transition-all"
                >
                  <span>Enquire for Business Loan</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <CtaDisclaimer className="max-w-xl" />
            </div>

            {/* Right Visual Graphic Matching HandLoan.ai Style */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="glass rounded-2xl overflow-hidden relative w-full max-w-md shadow-premium border border-white/80">
                <img
                  src="/images/business-hero.jpg"
                  alt="Boutique owner checking her phone in her clothing store"
                  className="w-full h-72 sm:h-80 object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Facilities: Working Capital, Inventory & Equipment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">
            Commercial Financing Types
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
            Financing Structured for Business Needs
          </h2>
          <p className="text-sm text-slate-blue mt-2">
            Lenders look at your business profile, turnover and financial health before deciding whether to offer credit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="backdrop-blur-md bg-white/95 rounded-2xl border border-neutral-border shadow-subtle hover-lift p-6 flex flex-col justify-between transition-all"
              >
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden bg-neutral-bg/60 border border-neutral-border/60 p-3 flex items-center justify-center">
                    <img
                      src={f.image}
                      alt={f.title}
                      className="w-full h-36 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-blue leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Eligibility & Documentation */}
      <section className="bg-neutral-bg/70 py-14 sm:py-20 border-y border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Eligibility */}
            <div className="backdrop-blur-md bg-white/95 p-7 sm:p-8 rounded-2xl border border-neutral-border shadow-subtle space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-soft text-royal-dark text-xs font-semibold">
                Evaluation Guidelines
              </div>
              <h3 className="text-xl font-heading font-bold text-navy">
                General Business Eligibility
              </h3>
              <p className="text-xs text-slate-blue leading-relaxed">
                To enquire through QvikLoan you must be {enquiryRules.minAge} to {enquiryRules.maxAge}, an Indian resident, with a monthly income of ₹{enquiryRules.minMonthlyIncome.toLocaleString('en-IN')} or more. Requirements differ by lender. These are the things lenders commonly look at:
              </p>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-blue">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Business Vintage:</span>
                  <span>A minimum period of continuous operation, set by each lender.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Registration Status:</span>
                  <span>Registered Sole Proprietorship, Partnership, LLP, or Private Limited Company.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Minimum Annual Turnover:</span>
                  <span>Verifiable annual turnover supported by filed GST returns and bank credits.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Commercial Credit Health:</span>
                  <span>The business’s and promoters’ credit reports and repayment record.</span>
                </li>
              </ul>
            </div>

            {/* Documentation Checklist */}
            <div className="backdrop-blur-md bg-white/95 p-7 sm:p-8 rounded-2xl border border-neutral-border shadow-subtle space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-soft text-royal-dark text-xs font-semibold">
                Verification Documents
              </div>
              <h3 className="text-xl font-heading font-bold text-navy">
                Documents Lenders May Ask For
              </h3>
              <p className="text-xs text-slate-blue leading-relaxed">
                The lender collects these directly; QvikLoan does not ask for them on this website.
              </p>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-blue">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Business Proof:</span>
                  <span>GST Registration Certificate, Udyam / MSME Registration, Partnership Deed or MOA/AOA.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Promoter KYC:</span>
                  <span>PAN card and Aadhaar card of key promoters / directors / partners.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Bank Statements:</span>
                  <span>Recent statements of the business’s main bank accounts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Financial Statements:</span>
                  <span>Recent financial statements and income tax returns.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Lender Responsibility & Loan Costs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass p-8 sm:p-10 rounded-2xl space-y-6">
          <div className="flex items-center gap-2.5 text-navy font-heading font-bold text-lg border-b border-neutral-border pb-3">
            <Info className="w-5 h-5 text-royal" />
            <span>Pricing and responsibilities</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-blue leading-relaxed">
            <div>
              <h4 className="font-heading font-bold text-navy mb-2">How Commercial Rates are Determined</h4>
              <p>
                The lender sets the interest rate, fees and any collateral requirement, based on factors such as business age, cash flow and financials.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-navy mb-2">Role of QvikLoan & {companyInfo.name}</h4>
              <p>
                QvikLoan is a facilitation platform, not a lender. Offers, the KFS, loan agreements and disbursement come from the lender.
              </p>
            </div>
          </div>

          <div className="bg-neutral-bg p-4 rounded-xl border border-neutral-border text-sm text-slate-blue">
            <strong>Please note:</strong> Available products and documentation requirements depend on the lender and your business profile. Submitting an enquiry does not commit you to borrowing or guarantee a commercial loan offer.
          </div>
        </div>
      </section>

      {/* Loan terms and EMI calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" aria-labelledby="business-terms">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">Loan terms</span>
          <h2 id="business-terms" className="text-2xl sm:text-3xl font-heading font-bold text-navy">
            Business loan terms and costs
          </h2>
          <p className="text-sm sm:text-base text-slate-blue mt-2">
            The lender sets every term below and shows it in its offer and Key Facts Statement before you sign.
          </p>
        </div>
        <LoanTermsTable product="business" />
        <FinancialCalculator product="business" />
      </section>

      <LoanDisclosure product="business" />
    </div>
  );
}
