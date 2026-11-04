import React from 'react';
import { ExternalLink, ShieldCheck, Building2, Mail, Phone, Info, CheckCircle2 } from 'lucide-react';
import { participatingLenders } from '../data/lendersData';
import { companyInfo } from '../data/companyInfo';

export default function ParticipatingLendersPage({ onOpenEnquiry }) {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-soft text-royal text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Institutional Lending Network
            </div>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight">
              Participating Lenders & Partners
            </h1>
            <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
              In full compliance with Reserve Bank of India (RBI) Digital Lending Guidelines and Meta financial advertising standards, QvikLoan provides complete disclosures regarding our participating lending institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Role of Platform Advisory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-card border border-neutral-border shadow-subtle space-y-4">
          <div className="flex items-center gap-2 text-navy font-heading font-bold text-base">
            <Info className="w-5 h-5 text-royal" />
            <span>Role of QvikLoan & Participating Lenders</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-blue leading-relaxed">
            QvikLoan is a technology and loan facilitation platform operated by <strong>Jatta M Kommerce Private Limited</strong>. QvikLoan is not a bank or Non-Banking Financial Company (NBFC). The evaluation of your loan application, interest rate calculations, processing fees, credit decisioning, Key Facts Statement (KFS) issuance, and disbursement of loan proceeds are handled exclusively by the respective participating regulated lender.
          </p>
        </div>
      </section>

      {/* Participating Lenders Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
            Regulated Lending Entities
          </h2>
          <p className="text-xs sm:text-sm text-slate-blue mt-2">
            Details of RBI-registered financial institutions reviewing loan enquiries submitted through QvikLoan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {participatingLenders.map((lender) => (
            <div
              key={lender.id}
              className="bg-white rounded-card-lg border border-neutral-border p-7 sm:p-8 shadow-subtle hover-lift flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold text-teal-dark uppercase tracking-wider block mb-1">
                      {lender.type}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-navy">
                      {lender.name}
                    </h3>
                  </div>
                  <a
                    href={lender.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-neutral-bg hover:bg-royal-soft text-slate-blue hover:text-royal transition-colors"
                    title={`Visit official website of ${lender.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-blue leading-relaxed">
                  {lender.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-neutral-border/70 text-xs">
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-muted">RBI Registration Number:</span>
                    <span className="font-mono font-bold text-navy">{lender.rbiRegNo}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-muted">Products Offered:</span>
                    <span className="font-semibold text-navy">{lender.products.join(', ')}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-muted">Indicative APR Range:</span>
                    <span className="font-semibold text-royal">{lender.aprRange}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-muted">Repayment Tenures:</span>
                    <span className="font-semibold text-navy">{lender.tenureRange}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-muted">Lender Grievance Desk:</span>
                    <a href={`mailto:${lender.grievanceEmail}`} className="text-royal font-semibold hover:underline">
                      {lender.grievanceEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-border flex items-center justify-between">
                <span className="text-[11px] text-teal-dark font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  RBI Fair Practices Compliant
                </span>
                <button
                  onClick={() => onOpenEnquiry('personal')}
                  className="text-xs font-bold text-royal hover:underline"
                >
                  Enquire with this Partner →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regulatory Consumer Guidance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-bg p-8 rounded-card border border-neutral-border space-y-4">
          <h3 className="text-lg font-heading font-bold text-navy flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-royal" />
            <span>Borrower Rights & Fair Lending Verification</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-blue leading-relaxed">
            Borrowers have the right to receive an official Key Facts Statement (KFS) directly from the lending entity before signing any agreement. If an offer does not meet your personal or commercial requirements, you may decline the offer without any penalty or obligation. If you experience any unaddressed grievance with a lending partner, you may contact their respective grievance officer or escalate to the Reserve Bank of India’s Ombudsman mechanism.
          </p>
        </div>
      </section>

    </div>
  );
}

