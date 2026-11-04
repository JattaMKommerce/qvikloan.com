import React from 'react';
import { ShieldCheck, Building2, CheckCircle2, Award, Users, Scale, FileText, ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function AboutUsPage({ onOpenEnquiry }) {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Header with Rich Graphic */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-soft text-royal text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                <span>Corporate Identity &amp; Purpose</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
                About QvikLoan
                <span className="block text-xl sm:text-2xl lg:text-3xl font-semibold text-royal mt-2">
                  &amp; {companyInfo.name}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
                QvikLoan is a technology-driven loan enquiry and facilitation platform owned and operated by <strong>{companyInfo.name}</strong>. We help individuals and business owners connect with regulated lenders.
              </p>
            </div>

            {/* Right Visual Graphic with Side Blending */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-premium bg-white">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-royal uppercase tracking-wider block">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
              Clear, honest and pressure-free
            </h2>
            <p className="text-slate-blue text-sm sm:text-base leading-relaxed">
              No approval guarantees, no artificial urgency, no hidden charges. You review the lender’s terms and decide in your own time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-white rounded-2xl border border-neutral-border shadow-subtle space-y-1.5">
                <span className="font-heading font-bold text-navy text-sm block">Integrity First</span>
                <span className="text-xs text-neutral-muted">Plain language and honest information.</span>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-neutral-border shadow-subtle space-y-1.5">
                <span className="font-heading font-bold text-navy text-sm block">Borrower Autonomy</span>
                <span className="text-xs text-neutral-muted">You can decline any offer, with no obligation.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy text-white rounded-3xl p-8 space-y-6 shadow-premium">
            <h3 className="text-xl font-heading font-bold flex items-center gap-2">
              <Scale className="w-5 h-5 text-teal-accent" />
              <span>Compliance Framework</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We operate under strict adherence to:
            </p>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                <span>Reserve Bank of India (RBI) Digital Lending Guidelines.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                <span>Information Technology Act, 2000 & SPDI Rules.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                <span>Consumer Protection (E-Commerce) Rules, 2020.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Corporate Registration & Particulars */}
      <section className="bg-white py-14 sm:py-20 border-y border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">
              Corporate Records
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
              Company Registration Particulars
            </h2>
            <p className="text-sm text-slate-blue mt-2">
              All platform services under QvikLoan are operated by {companyInfo.name}.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-neutral-bg/70 rounded-2xl border border-neutral-border p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div>
                <span className="text-neutral-muted block mb-1">Company Legal Name</span>
                <span className="font-bold text-navy font-heading text-base">{companyInfo.name}</span>
              </div>
              <div>
                <span className="text-neutral-muted block mb-1">Corporate Identity Number (CIN)</span>
                <span className="font-bold text-navy font-mono text-base">{companyInfo.cin}</span>
              </div>
              <div>
                <span className="text-neutral-muted block mb-1">Brand Name</span>
                <span className="font-bold text-navy text-base">{companyInfo.brandName}</span>
              </div>
              <div>
                <span className="text-neutral-muted block mb-1">Nature of Platform</span>
                <span className="font-bold text-navy text-base">Loan Enquiry & Digital Facilitation Intermediary</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-neutral-muted block mb-1">Registered Office</span>
                <span className="font-medium text-navy text-sm">
                  {companyInfo.address.registeredOffice}
                </span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-neutral-muted block mb-1">Corporate Office</span>
                <span className="font-medium text-navy text-sm">
                  {companyInfo.address.corporateOffice}
                </span>
              </div>
              <div>
                <span className="text-neutral-muted block mb-1">Official Support Desk</span>
                <a href={`mailto:${companyInfo.email}`} className="text-royal font-semibold hover:underline">
                  {companyInfo.email}
                </a>
              </div>
              <div>
                <span className="text-neutral-muted block mb-1">Helpline Phone</span>
                <a href={`tel:${companyInfo.phone}`} className="text-royal font-semibold hover:underline">
                  {companyInfo.phone}
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-border text-xs text-neutral-muted leading-relaxed">
              <strong>Mandatory Platform Clarification:</strong> QvikLoan is neither an RBI-registered NBFC nor a commercial bank. We do not accept public deposits, do not issue loans directly, and do not make credit risk underwriting decisions. All credit facilities are evaluated and extended exclusively by participating RBI-registered lenders.
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-navy rounded-3xl text-white p-8 sm:p-12 space-y-4 shadow-premium">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold">
            Explore Options with an Established Platform
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Discover personal and commercial lending facilities from trusted institutional lenders.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenEnquiry('personal')}
              className="px-8 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold text-sm transition-colors shadow-subtle"
            >
              Start Free Online Enquiry
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
