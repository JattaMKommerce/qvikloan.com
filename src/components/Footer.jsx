import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { companyInfo, phoneDigits } from '../data/companyInfo';
import { participatingLenders } from '../data/lendersData';

const COLUMNS = [
  {
    title: 'Loans',
    links: [
      ['Personal Loan', '/personal-loans'],
      ['Business Loan', '/business-loans'],
      ['How It Works', '/#how-it-works'],
      ['Start an Enquiry', '/#enquiry-section'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About Us', '/about-us'],
      ['Contact Us', '/contact-us'],
      ['Grievance Redressal', '/grievance-redressal'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy Policy', '/privacy-policy'],
      ['Terms & Conditions', '/terms-and-conditions'],
      ['Refund Policy', '/refund-policy'],
      ['Financial Disclaimer', '/disclaimer'],
    ],
  },
];

export default function Footer() {
  const officer = companyInfo.grievanceOfficer;

  return (
    <footer className="bg-navy text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-6 gap-y-8 pb-8 border-b border-white/10">
          {/* Brand and contact */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link to="/" className="inline-block bg-white px-3 py-2 rounded-xl">
              <img src="/logos/QvikLoan_Web.webp" alt="QvikLoan home" className="h-7 w-auto object-contain" />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
              A loan enquiry platform by {companyInfo.name}. We are not a lender.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href={`mailto:${companyInfo.email}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Mail className="w-4 h-4 text-teal-accent" aria-hidden="true" />
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex flex-wrap gap-x-4 gap-y-2">
                <a href={`tel:+${phoneDigits(companyInfo.phone)}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Phone className="w-4 h-4 text-teal-accent" aria-hidden="true" />
                  {companyInfo.phone}
                </a>
                <a
                  href={`https://wa.me/${phoneDigits(companyInfo.whatsapp)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-accent font-semibold hover:text-white"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <Clock className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" aria-hidden="true" />
                Mon to Sat, 9:30 AM – 6:30 PM IST
              </li>
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-xs font-heading font-bold text-white uppercase tracking-wider mb-3">{col.title}</h2>
              <ul className="space-y-2 text-sm text-slate-300">
                {col.links.map(([text, to]) => (
                  <li key={text}>
                    <Link to={to} className="hover:text-teal-accent transition-colors">{text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* One short disclosure, in plain words */}
        <p className="my-6 flex items-start gap-2.5 text-[13px] text-slate-300 leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            <strong className="text-white">Please note:</strong> QvikLoan is not a bank or NBFC. We do not lend money or
            make credit decisions; the lender decides eligibility, approval, rates and charges. An enquiry does not
            guarantee a loan. We never ask for an upfront fee, OTP or banking password.
          </span>
        </p>

        {/* Company and grievance details (kept for legal and regulatory reasons) */}
        <div className="pt-5 border-t border-white/10 space-y-1.5 text-xs text-slate-400 leading-relaxed">
          <p>
            © {new Date().getFullYear()} QvikLoan, a brand of {companyInfo.name}
            {companyInfo.cin && <> · CIN: {companyInfo.cin}</>}
          </p>
          <p>Registered office: {companyInfo.address.registeredOffice}</p>
          <p>Operating office: {companyInfo.address.corporateOffice}</p>
          <p>
            Grievance Officer: {officer.name} ·{' '}
            <a href={`mailto:${officer.email}`} className="hover:text-white underline-offset-2 hover:underline">{officer.email}</a>{' '}
            · {officer.phone}
          </p>
          {/* Filled from data/lendersData.js: only verified lenders ever appear here */}
          {participatingLenders.length > 0 ? (
            <p>
              Partner Lenders:{' '}
              {participatingLenders
                .map((l) => `${l.legalName}${l.rbiRegistration ? ` - RBI Reg No: ${l.rbiRegistration}` : ''}`)
                .join(' | ')}
            </p>
          ) : (
            <p>QvikLoan currently has no active lending partner and does not share enquiries with any lender.</p>
          )}
        </div>
      </div>
    </footer>
  );
}
