import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Building2, Package, Layers, FileCheck, Info, Briefcase, TrendingUp } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function BusinessLoansPage({ onOpenEnquiry }) {
  const facilities = [
    {
      title: 'Working Capital Lines',
      desc: 'Optimise cash-flow liquidity to bridge receivables cycles, supplier payment terms, and day-to-day operational requirements.',
      icon: Layers,
      tenure: 'Tenures 6 to 36 Months',
      badge: 'Cash-Flow Management',
      image: '/images/business-facility-working-capital.png'
    },
    {
      title: 'Inventory & Stock Financing',
      desc: 'Purchase inventory and raw materials in volume ahead of peak demand periods without locking up existing operating funds.',
      icon: Package,
      tenure: 'Revolving & Term Options',
      badge: 'Procurement Growth',
      image: '/images/business-facility-inventory.png'
    },
    {
      title: 'Equipment & Machinery',
      desc: 'Invest in revenue-generating commercial equipment, industrial machinery, or technology hardware to increase operational capacity.',
      icon: Briefcase,
      tenure: 'Up to 60 Months',
      badge: 'Capital Asset Investment',
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
                Explore financing options for business expenses such as inventory, equipment, or working capital. QvikLoan connects registered enterprises with participating institutional lenders for objective evaluation.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenEnquiry('business')}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-navy hover:bg-slate-blue text-white font-bold text-sm shadow-subtle hover:shadow-premium transition-all"
                >
                  <span>Enquire for Business Loan</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <div className="text-xs text-neutral-muted">
                  Direct evaluation by partner NBFCs
                </div>
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
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-teal-soft text-teal-dark flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-blue">{f.tenure}</span>
                    </div>
                    <span className="text-[11px] font-bold text-royal bg-royal-soft px-2.5 py-0.5 rounded-full">
                      {f.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-blue leading-relaxed">
                    {f.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-border/60 text-xs font-semibold text-teal-dark">
                  Direct Lender Sanction
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
            <span>Commercial Loan Pricing, Lender Responsibility & Disclosures</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-blue leading-relaxed">
            <div>
              <h4 className="font-heading font-bold text-navy mb-2">How Commercial Rates are Determined</h4>
              <p>
                Business loan interest rates, processing fees, and collateral requirements are decided entirely by the assessing lender. Rates depend on your business vintage, cash flow predictability, balance sheet ratios, and the presence of any collateral or government credit guarantee schemes (such as CGTMSE).
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-navy mb-2">Role of QvikLoan & {companyInfo.name}</h4>
              <p>
                QvikLoan operates strictly as a loan facilitation and technology platform. We do not act as an underwriter or lender. All loan sanctions, Key Facts Statements, legal loan agreements, and disbursements are executed exclusively by the participating lending institution.
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
            Connect with participating lenders to review customized working capital and term facilities.
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
