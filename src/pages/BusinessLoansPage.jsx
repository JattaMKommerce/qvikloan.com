import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Building2, Package, Layers, FileCheck, Info, Briefcase, TrendingUp } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function BusinessLoansPage({ onOpenEnquiry }) {
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
      
      {/* Hero Header with Rich Graphic */}
      <section className="bg-gradient-to-b from-white via-teal-soft/20 to-neutral-bg border-b border-neutral-border py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-soft text-teal-dark text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Commercial & MSME Solutions</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
                Business Loan Options
              </h1>
              <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
                Explore financing for inventory, equipment or working capital through participating lenders.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenEnquiry('business')}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-navy hover:bg-slate-blue text-white font-bold text-sm shadow-subtle hover:shadow-premium transition-all"
                >
                  <span>Enquire for Business Loan</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Right Visual Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md rounded-2xl overflow-hidden border border-neutral-border shadow-premium bg-white">
                <img
                  src="/images/business-loans-hero.png"
                  alt="Business Loans Capital Facilities"
                  className="w-full h-auto object-cover"
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
          <span className="text-xs font-bold text-teal-dark uppercase tracking-wider block mb-2">
            Commercial Financing Types
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
            Financing Structured for Business Needs
          </h2>
          <p className="text-sm text-slate-blue mt-2">
            Participating lenders assess your business profile, operating turnover, and financial health to structure suitable commercial credit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="backdrop-blur-md bg-white/95 rounded-2xl border border-neutral-border p-6 shadow-subtle hover-lift flex flex-col justify-between transition-all"
              >
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden bg-neutral-bg/60 border border-neutral-border/60 p-2 flex items-center justify-center">
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
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-neutral-border shadow-subtle space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-soft text-royal text-xs font-semibold">
                Evaluation Guidelines
              </div>
              <h3 className="text-xl font-heading font-bold text-navy">
                General Business Eligibility
              </h3>
              <p className="text-xs text-slate-blue leading-relaxed">
                Underwriting requirements differ by lender, but participating institutions commonly review the following fundamentals:
              </p>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-blue">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Business Vintage:</span>
                  <span>Minimum 12 to 24 months of continuous, verified business operations.</span>
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
                  <span>Satisfactory commercial credit score (e.g. CIBIL Commercial or CMR score).</span>
                </li>
              </ul>
            </div>

            {/* Documentation Checklist */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-neutral-border shadow-subtle space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-soft text-teal-dark text-xs font-semibold">
                Verification Documents
              </div>
              <h3 className="text-xl font-heading font-bold text-navy">
                Documents Lenders Typically Require
              </h3>
              <p className="text-xs text-slate-blue leading-relaxed">
                Preparing these records beforehand speeds up the evaluation process with participating lenders:
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
                  <span>Last 6 to 12 months' official operative business bank accounts (in PDF format).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-navy shrink-0">• Financial Statements:</span>
                  <span>Last 2 financial years' audited balance sheets, profit & loss statements, and ITR filings.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Lender Responsibility & Loan Costs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-border shadow-subtle space-y-6">
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

          <div className="bg-neutral-bg p-4 rounded-xl border border-neutral-border text-xs text-neutral-muted">
            <strong>Statutory Disclosure:</strong> Available products and documentation requirements depend on the lender and your business profile. Submitting an enquiry does not commit you to borrowing or guarantee a commercial loan offer.
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-3xl text-white p-8 sm:p-12 text-center space-y-4 shadow-premium">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold">
            Explore Business Financing Options
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Submitting an enquiry does not commit you to borrowing.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenEnquiry('business')}
              className="px-8 py-3.5 rounded-xl bg-teal-accent hover:bg-teal-dark text-navy font-bold text-sm transition-colors shadow-subtle"
            >
              Start Business Loan Enquiry
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
