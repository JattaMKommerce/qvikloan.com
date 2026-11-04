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
                <span>Corporate Identity & Purpose</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
                About QvikLoan & {companyInfo.name}
              </h1>
              <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
                QvikLoan is a technology-driven loan enquiry and facilitation platform owned and operated by <strong>{companyInfo.name}</strong>. We empower individuals and business owners to discover, compare, and connect with reputable, regulated financial institutions.
              </p>
            </div>

            {/* Right Visual Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md rounded-2xl overflow-hidden border border-neutral-border shadow-premium bg-white">
                <img
                  src="/images/about-us-hero.png"
                  alt="Corporate Identity and Governance"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
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
              Democratising Lending Through Absolute Transparency
            </h2>
            <p className="text-slate-blue text-sm sm:text-base leading-relaxed">
              In an era crowded with opaque financial terms and misleading promises, QvikLoan was founded on a singular principle: <strong>financial advertising and lending facilitation must be completely honest, transparent, and respectful of the borrower</strong>.
            </p>
            <p className="text-slate-blue text-sm sm:text-base leading-relaxed">
              We never promote unrealistic approval guarantees, artificial urgency, or hidden charges. Instead, we offer a clean, reliable digital interface where prospective borrowers can assess their requirements, review Key Facts Statements, understand APR metrics, and make unpressured decisions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-white rounded-2xl border border-neutral-border shadow-subtle space-y-1.5">
                <span className="font-heading font-bold text-navy text-sm block">Integrity First</span>
                <span className="text-xs text-neutral-muted">Zero artificial claims, misleading statistics, or deceptive promotional tactics.</span>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-neutral-border shadow-subtle space-y-1.5">
                <span className="font-heading font-bold text-navy text-sm block">Borrower Autonomy</span>
                <span className="text-xs text-neutral-muted">Full right to review, compare, and decline any offer without penalty or pressure.</span>
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
                <span>Meta Financial Services Advertising Policies.</span>
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

      {/* Dual Presence Showcase: Mumbai & Hubli */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">
            Physical Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
            Our Corporate Presence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="backdrop-blur-md bg-white/95 p-7 rounded-2xl border border-neutral-border shadow-subtle space-y-3">
            <div className="flex items-center gap-2 text-royal font-bold text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Registered Office (Mumbai)</span>
            </div>
            <h3 className="text-lg font-heading font-bold text-navy">
              Citi Mall, Andheri West
            </h3>
            <p className="text-xs sm:text-sm text-slate-blue leading-relaxed">
              {companyInfo.address.registeredOffice}
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/95 p-7 rounded-2xl border border-neutral-border shadow-subtle space-y-3">
            <div className="flex items-center gap-2 text-teal-dark font-bold text-xs uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Corporate Office (Hubli)</span>
            </div>
            <h3 className="text-lg font-heading font-bold text-navy">
              Park E Block, Hubli
            </h3>
            <p className="text-xs sm:text-sm text-slate-blue leading-relaxed">
              {companyInfo.address.corporateOffice}
            </p>
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
