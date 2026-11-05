import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Shield, Building2, MessageCircle, Clock } from 'lucide-react';
import { companyInfo, phoneDigits } from '../data/companyInfo';
import { participatingLenders } from '../data/lendersData';

const COLUMNS = [
  {
    title: 'Quick Links',
    links: [
      ['Personal Loan', '/personal-loans'],
      ['Business Loan', '/business-loans'],
      ['How It Works', '/how-it-works'],
      ['About Us', '/about-us'],
      ['Contact Us', '/contact-us'],
      ['Start an Enquiry', '/#enquiry-section'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy Policy', '/privacy-policy'],
      ['Terms & Conditions', '/terms-and-conditions'],
      ['Refund & Cancellation Policy', '/refund-policy'],
      ['Financial Disclaimer', '/disclaimer'],
      ['Grievance Redressal Policy', '/grievance-redressal'],
      ['Lending Partners', '/participating-lenders'],
    ],
  },
];

export default function Footer() {
  const officer = companyInfo.grievanceOfficer;

  return (
    <footer className="bg-navy text-white pt-10 pb-8 sm:pt-12 sm:pb-10 border-t border-slate-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-8 pb-8 border-b border-white/10">

          {/* Column 1: company */}
          <div className="space-y-3">
            <Link to="/" className="inline-block bg-white p-2 rounded-xl shadow-xs">
              <img src="/logos/QvikLoan_Web.webp" alt="QvikLoan home" className="h-7 w-auto object-contain" />
            </Link>

            <h2 className="text-xs font-heading font-bold text-white uppercase tracking-wider">Company</h2>

            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-white">Legal name:</strong> {companyInfo.name}
                  {companyInfo.cin && <span className="block">CIN: {companyInfo.cin}</span>}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong className="text-white">Registered address:</strong> {companyInfo.address.registeredOffice}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong className="text-white">Operating office:</strong> {companyInfo.address.corporateOffice}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span>{companyInfo.operatingHours}</span>
              </li>
              <li className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <a href={`mailto:${companyInfo.email}`} className="inline-flex items-center gap-1.5 hover:text-white hover:underline">
                  <Mail className="w-4 h-4 text-teal-accent" aria-hidden="true" />
                  {companyInfo.email}
                </a>
                <a href={`tel:+${phoneDigits(companyInfo.phone)}`} className="inline-flex items-center gap-1.5 hover:text-white">
                  <Phone className="w-4 h-4 text-teal-accent" aria-hidden="true" />
                  {companyInfo.phone}
                </a>
                <a
                  href={`https://wa.me/${phoneDigits(companyInfo.whatsapp)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-teal-accent font-semibold hover:text-white"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Columns 2 and 3: quick links and legal */}
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

        {/* Disclosures: kept at a readable size, not fine print */}
        <div className="py-5 my-6 px-5 rounded-xl bg-white/[0.04] border border-white/10 text-[13px] text-slate-300 space-y-2.5 leading-relaxed">
          <p className="flex items-center gap-2 text-white font-semibold text-sm">
            <Shield className="w-4 h-4 text-teal-accent" aria-hidden="true" />
            Important disclosures
          </p>
          <p>
            <strong className="text-white">Role of QvikLoan:</strong> {companyInfo.roleDisclosure}
          </p>
          <p>
            <strong className="text-white">No guarantee:</strong> Submitting an enquiry does not guarantee a loan offer,
            approval or disbursement, and does not commit you to borrow. Before accepting any offer, review the lender’s
            Key Facts Statement (KFS), including the Annual Percentage Rate (APR), repayment schedule and all charges.
          </p>
          <p>
            <strong className="text-white">Fraud warning:</strong> QvikLoan does not charge borrowers for enquiries and
            will never ask for an upfront fee, OTP or banking password. Pay loan-related amounts only to the lender
            through its official channels.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-2 space-y-1.5 text-xs text-slate-300 leading-relaxed">
          <p>© {new Date().getFullYear()} QvikLoan, a brand operated by {companyInfo.name}. All Rights Reserved.</p>
          <p>
            QvikLoan is {companyInfo.platformRole}, not a lender. Loans are provided by lending institutions (banks and
            RBI-registered NBFCs).
          </p>
          {/* Filled from data/lendersData.js: only verified lenders ever appear here */}
          {participatingLenders.length > 0 && (
            <p>
              Partner Lenders:{' '}
              {participatingLenders
                .map((l) => `${l.legalName}${l.rbiRegistration ? ` - RBI Reg No: ${l.rbiRegistration}` : ''}`)
                .join(' | ')}
            </p>
          )}
          <p>
            Grievance Officer{officer.name ? `: ${officer.name}` : ''} | Email:{' '}
            <a href={`mailto:${officer.email}`} className="hover:text-white underline-offset-2 hover:underline">{officer.email}</a>{' '}
            | Phone: {officer.phone} | Working Hours: {companyInfo.operatingHours}
          </p>
        </div>
      </div>
    </footer>
  );
}
