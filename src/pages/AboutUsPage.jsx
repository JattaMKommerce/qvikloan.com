import React from 'react';
import { ShieldCheck, Building2, CheckCircle2, Award, Users, Scale, FileText, ArrowRight, MapPin, Mail, Phone, ExternalLink, Globe } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function AboutUsPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* Hero Header with Spacious Layout */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-soft text-royal text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                <span>Corporate Identity &amp; Governance</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
                About QvikLoan
                <span className="block text-xl sm:text-2xl lg:text-3xl font-semibold text-royal mt-2">
                  &amp; {companyInfo.name}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-blue leading-relaxed max-w-2xl">
                QvikLoan is a technology-driven loan enquiry and facilitation platform owned and operated by <strong>{companyInfo.name}</strong>. We help individuals and business owners connect with regulated lending partners.
              </p>
              <div className="pt-2">
                <a
                  href="https://jattamkommerce.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-50 text-navy border border-neutral-border hover:border-royal text-sm font-semibold shadow-subtle transition-all"
                >
                  <Globe className="w-4 h-4 text-royal" />
                  <span>Visit Company Website: jattamkommerce.com</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-muted" />
                </a>
              </div>
            </div>

            {/* Right Visual Graphic with Side Blending */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="backdrop-blur-md bg-white/95 rounded-2xl border border-neutral-border shadow-subtle overflow-hidden relative w-full max-w-md">
                <img
                  src="/images/about-us-hero.png"
                  alt="Corporate Identity and Governance"
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

      {/* Mission & Purpose */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-royal uppercase tracking-wider block">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-navy">
              Clear, honest and pressure-free
            </h2>
            <p className="text-slate-blue text-base leading-relaxed max-w-2xl">
              No approval guarantees and no artificial urgency. You review the lender’s terms and decide in your own time with complete freedom to accept or decline.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="backdrop-blur-md bg-white/95 border border-neutral-border p-6 rounded-2xl shadow-subtle space-y-2">
                <span className="font-heading font-bold text-navy text-base block">Integrity First</span>
                <span className="text-xs sm:text-sm text-slate-blue leading-relaxed block">Plain language, transparent APR disclosures, and honest borrowing information.</span>
              </div>
              <div className="backdrop-blur-md bg-white/95 border border-neutral-border p-6 rounded-2xl shadow-subtle space-y-2">
                <span className="font-heading font-bold text-navy text-base block">Borrower Autonomy</span>
                <span className="text-xs sm:text-sm text-slate-blue leading-relaxed block">You can decline any offer at any time, with zero obligation and zero cancellation charges.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 backdrop-blur-md bg-white/95 border border-neutral-border shadow-subtle rounded-3xl p-8 sm:p-10 space-y-6 text-navy">
            <h3 className="text-xl font-heading font-bold flex items-center gap-2.5">
              <Scale className="w-5 h-5 text-teal-accent" />
              <span>Compliance Framework</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-blue leading-relaxed">
              We operate under strict adherence to Indian regulatory standards:
            </p>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-blue">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                <span>Reserve Bank of India (RBI) Digital Lending Guidelines.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                <span>Information Technology Act, 2000 &amp; SPDI Rules.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                <span>Consumer Protection (E-Commerce) Rules, 2020.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Corporate Registration & Particulars - Spacious & Decongested */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-md bg-white/95 rounded-3xl border border-neutral-border p-8 sm:p-12 shadow-subtle space-y-8">
          <div className="border-b border-neutral-border pb-6">
            <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-1">
              Official Corporate Records
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
              Company Registration Particulars
            </h2>
            <p className="text-sm text-slate-blue mt-1">
              All platform services under QvikLoan are operated by {companyInfo.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-neutral-bg/60 border border-neutral-border/60">
              <span className="text-neutral-muted block mb-1">Company Legal Name</span>
              <span className="font-bold text-navy font-heading text-base">{companyInfo.name}</span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-bg/60 border border-neutral-border/60">
              <span className="text-neutral-muted block mb-1">Corporate Identity Number (CIN)</span>
              <span className="font-bold text-navy font-mono text-base">{companyInfo.cin}</span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-bg/60 border border-neutral-border/60">
              <span className="text-neutral-muted block mb-1">Company Official Website</span>
              <a
                href="https://jattamkommerce.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-royal text-base inline-flex items-center gap-1.5 hover:underline"
              >
                <span>jattamkommerce.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="p-4 rounded-xl bg-neutral-bg/60 border border-neutral-border/60">
              <span className="text-neutral-muted block mb-1">Brand Name</span>
              <span className="font-bold text-navy text-base">{companyInfo.brandName}</span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-bg/60 border border-neutral-border/60 sm:col-span-2">
              <span className="text-neutral-muted block mb-1">Nature of Platform</span>
              <span className="font-bold text-navy text-base">Loan Enquiry &amp; Digital Facilitation Intermediary</span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-bg/60 border border-neutral-border/60 sm:col-span-2 lg:col-span-3">
              <span className="text-neutral-muted block mb-1">Registered Office Address</span>
              <span className="font-medium text-navy text-sm leading-relaxed">
                {companyInfo.address.registeredOffice}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-bg/60 border border-neutral-border/60 sm:col-span-2 lg:col-span-3">
              <span className="text-neutral-muted block mb-1">Corporate Office Address</span>
              <span className="font-medium text-navy text-sm leading-relaxed">
                {companyInfo.address.corporateOffice}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-bg/60 border border-neutral-border/60">
              <span className="text-neutral-muted block mb-1">Official Support Desk</span>
              <a href={`mailto:${companyInfo.email}`} className="text-royal font-semibold text-sm hover:underline">
                {companyInfo.email}
              </a>
            </div>
            <div className="p-4 rounded-xl bg-neutral-bg/60 border border-neutral-border/60">
              <span className="text-neutral-muted block mb-1">Helpline Phone</span>
              <a href={`tel:${companyInfo.phone}`} className="text-royal font-semibold text-sm hover:underline">
                {companyInfo.phone}
              </a>
            </div>
            <div className="p-4 rounded-xl bg-neutral-bg/60 border border-neutral-border/60">
              <span className="text-neutral-muted block mb-1">Operating Hours</span>
              <span className="font-medium text-navy text-sm">
                Mon - Sat: 9:30 AM – 6:30 PM IST
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-border text-xs text-neutral-muted leading-relaxed">
            <strong>Mandatory Platform Clarification:</strong> QvikLoan is neither an RBI-registered NBFC nor a commercial bank. We do not accept public deposits, do not issue loans directly, and do not make credit risk underwriting decisions. All credit facilities are evaluated and extended exclusively by participating regulated lenders.
          </div>
        </div>
      </section>

    </div>
  );
}
