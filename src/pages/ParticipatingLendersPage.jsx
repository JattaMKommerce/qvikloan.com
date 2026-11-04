import { Link } from 'react-router-dom';
import React from 'react';
import { ExternalLink, ShieldCheck, Building2, Mail, Phone, Info, CheckCircle2, ArrowRight } from 'lucide-react';
import { participatingLenders } from '../data/lendersData';
import { companyInfo } from '../data/companyInfo';

export default function ParticipatingLendersPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Header with Rich Graphic */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-soft text-royal text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Institutional Lending Network</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
                Participating Lenders & Partners
              </h1>
              <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
                The regulated lenders that may review your enquiry, with their registration and grievance details.
              </p>
            </div>

            {/* Right Visual Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="glass rounded-2xl overflow-hidden w-full max-w-md">
                <img
                  src="/images/participating-lenders-hero.png"
                  alt="Participating Lenders Network Disclosures"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Role of Platform Advisory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass p-7 sm:p-9 rounded-2xl space-y-4">
          <div className="flex items-center gap-2.5 text-navy font-heading font-bold text-lg">
            <Info className="w-5 h-5 text-royal" />
            <span>Role of QvikLoan & Participating Lenders</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-blue leading-relaxed">
            QvikLoan, operated by <strong>{companyInfo.name}</strong>, is not a bank or NBFC. The lender assesses your application, sets the rate and fees, issues the Key Facts Statement (KFS) and disburses the loan.
          </p>
        </div>
      </section>

      {/* Participating Lenders Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">
            Regulated Entities
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
            Institutional Lending Partners
          </h2>
          <p className="text-xs sm:text-sm text-slate-blue mt-2">
            Participating lenders that may review loan enquiries submitted through QvikLoan. Lender-specific terms are set by each lender.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {participatingLenders.map((lender) => (
            <div
              key={lender.id}
              className="glass rounded-2xl p-7 sm:p-8 hover-lift flex flex-col justify-between space-y-6"
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
                    className="p-2.5 rounded-xl bg-neutral-bg hover:bg-royal-soft text-slate-blue hover:text-royal transition-colors shadow-xs"
                    title={`Visit official website of ${lender.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-blue leading-relaxed">
                  {lender.description}
                </p>

                <div className="space-y-2.5 pt-3 border-t border-neutral-border/70 text-xs">
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-muted">Products Offered:</span>
                    <span className="font-semibold text-navy">{lender.products.join(", ")}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-muted">Lender Grievance Desk:</span>
                    <a href={`mailto:${lender.grievanceEmail}`} className="text-royal font-semibold hover:underline">
                      {lender.grievanceEmail}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Regulatory Consumer Guidance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-md bg-neutral-bg/80 p-8 rounded-2xl border border-neutral-border space-y-4">
          <h3 className="text-lg font-heading font-bold text-navy flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-royal" />
            <span>Your rights as a borrower</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-blue leading-relaxed">
            You should receive a KFS from the lender before signing, and you can decline any offer. For unresolved complaints, contact the lender’s grievance officer or escalate to the RBI Ombudsman.
          </p>
        </div>
      </section>

    </div>
  );
}
