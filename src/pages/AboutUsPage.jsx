import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle2, XCircle, ExternalLink, Globe } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { usePageMeta } from '../lib/usePageMeta';

const WE_DO = [
  'Help you understand personal and business loan options in plain language',
  'Take your loan enquiry and contact you about it',
  'Share your enquiry only with one of our lending partners, and only with your fresh consent',
  'Handle complaints about our own service',
];

const WE_DO_NOT = [
  'Lend money, take deposits or hold loan funds',
  'Assess creditworthiness, approve or reject loans',
  'Set interest rates, fees or repayment terms',
  'Charge borrowers a fee for submitting an enquiry',
  'Ask for OTPs, banking passwords or upfront payments',
];

function Detail({ label, children, wide }) {
  return (
    <div className={`p-4 rounded-xl bg-neutral-bg/60 border border-neutral-border/60 ${wide ? 'sm:col-span-2 lg:col-span-3' : ''}`}>
      <dt className="text-sm text-neutral-muted mb-1">{label}</dt>
      <dd className="font-semibold text-navy text-sm sm:text-base leading-relaxed">{children}</dd>
    </div>
  );
}

export default function AboutUsPage() {
  usePageMeta('About Us', `QvikLoan is a digital loan facilitation platform operated by ${companyInfo.name}. Company details, registered office, contact information and what QvikLoan does and does not do.`);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">

      {/* Hero */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-soft text-royal-dark text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Company information</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
                About QvikLoan
                <span className="block text-xl sm:text-2xl lg:text-3xl font-semibold text-royal mt-2">
                  operated by {companyInfo.name}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-blue leading-relaxed max-w-2xl">
                QvikLoan helps people and businesses explore loan options. We take your enquiry and explain your options
                in simple words. We are not a lender; our lending partners are RBI-registered banks and NBFCs.
              </p>
              <a
                href={companyInfo.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-50 text-navy border border-neutral-border hover:border-royal text-sm font-semibold shadow-subtle transition-all"
              >
                <Globe className="w-4 h-4 text-royal" aria-hidden="true" />
                <span>Company website: jattamkommerce.com</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-muted" aria-hidden="true" />
              </a>
            </div>

            {/* Right Visual Graphic Matching HandLoan.ai Style */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="backdrop-blur-md bg-white/95 rounded-2xl border border-white/80 shadow-premium overflow-hidden relative w-full max-w-md">
                <img
                  src="/images/about-team.jpg"
                  alt="People working together in an office"
                  className="w-full aspect-[3/2] object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do / don't do */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block">Our role</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-navy">Clear about what we do</h2>
          <p className="text-slate-blue text-base leading-relaxed">
            No approval promises and no pressure. You decide in your own time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-border bg-white p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-heading font-bold text-navy">QvikLoan does</h3>
            <ul className="space-y-3 text-sm text-slate-blue">
              {WE_DO.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-dark shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-border bg-white p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-heading font-bold text-navy">QvikLoan does not</h3>
            <ul className="space-y-3 text-sm text-slate-blue">
              {WE_DO_NOT.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm text-slate-blue">
          Our lending partners are shown on our <Link to="/#lending-partners" className="text-royal font-semibold underline">home page</Link>.
          Technology providers that run parts of this website are named in our{' '}
          <Link to="/privacy-policy" className="text-royal font-semibold underline">Privacy Policy</Link>.
        </p>
      </section>

      {/* Company details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="company-details">
        <div className="backdrop-blur-md bg-white/95 rounded-3xl border border-neutral-border p-6 sm:p-12 shadow-subtle space-y-8">
          <div className="border-b border-neutral-border pb-6">
            <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-1">Company details</span>
            <h2 id="company-details" className="text-2xl sm:text-3xl font-heading font-bold text-navy">Who operates QvikLoan</h2>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Detail label="Registered company name">{companyInfo.name}</Detail>
            <Detail label="CIN"><span className="font-mono">{companyInfo.cin}</span></Detail>
            <Detail label="Brand name">{companyInfo.brandName}</Detail>
            {companyInfo.gstin && <Detail label="GSTIN"><span className="font-mono">{companyInfo.gstin}</span></Detail>}
            <Detail label="Nature of business">Digital loan facilitation platform. Not a bank or NBFC.</Detail>
            <Detail label="Company website">
              <a href={companyInfo.companyWebsite} target="_blank" rel="noopener noreferrer" className="text-royal inline-flex items-center gap-1.5 hover:underline">
                jattamkommerce.com <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </Detail>
            <Detail label="Registered office" wide>{companyInfo.address.registeredOffice}</Detail>
            <Detail label="Operating (corporate) office" wide>{companyInfo.address.corporateOffice}</Detail>
            <Detail label="Customer support email">
              <a href={`mailto:${companyInfo.email}`} className="text-royal hover:underline">{companyInfo.email}</a>
            </Detail>
            <Detail label="Customer support phone">
              <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="text-royal hover:underline">{companyInfo.phone}</a>
            </Detail>
            <Detail label="Grievance Officer">
              {companyInfo.grievanceOfficer.name}, <a href={`mailto:${companyInfo.grievanceOfficer.email}`} className="text-royal hover:underline break-all">{companyInfo.grievanceOfficer.email}</a>, {companyInfo.grievanceOfficer.phone}
            </Detail>
            <Detail label="Business hours">{companyInfo.operatingHours}</Detail>
          </dl>

          <p className="pt-6 border-t border-neutral-border text-sm text-slate-blue leading-relaxed">
            <strong className="text-navy">Please note:</strong> {companyInfo.roleDisclosure}
          </p>
        </div>
      </section>

    </div>
  );
}
