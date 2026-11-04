import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Shield, Building2, MessageCircle, Clock } from 'lucide-react';
import { companyInfo, phoneDigits } from '../data/companyInfo';

const COLUMNS = [
  {
    title: 'Loans',
    links: [
      ['Personal Loans', '/personal-loans'],
      ['Business Loans', '/business-loans'],
      ['How It Works', '/how-it-works'],
      ['Start an Enquiry', '/#enquiry-section'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About Us', '/about-us'],
      ['Lending Partners', '/participating-lenders'],
      ['Contact Us', '/contact-us'],
      ['Grievance Redressal', '/grievance-redressal'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy Policy', '/privacy-policy'],
      ['Terms and Conditions', '/terms-and-conditions'],
      ['Financial Disclaimer', '/disclaimer'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-10 pb-8 sm:pt-12 sm:pb-10 border-t border-slate-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-white/10">

          {/* Company identity */}
          <div className="lg:col-span-2 space-y-3">
            <Link to="/" className="inline-block bg-white p-2 rounded-xl shadow-xs">
              <img src="/logos/QvikLoan_Web.webp" alt="QvikLoan home" className="h-7 w-auto object-contain" />
            </Link>

            <p className="text-sm text-slate-200/90 leading-relaxed max-w-md">
              A digital loan facilitation platform operated by{' '}
              <strong className="text-white font-semibold">{companyInfo.name}</strong>. QvikLoan is not a lender.
            </p>

            <ul className="space-y-2 pt-1 text-sm text-slate-300">
              {companyInfo.cin && (
                <li className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span>CIN: {companyInfo.cin}</span>
                </li>
              )}
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong className="text-white">Registered office:</strong> {companyInfo.address.registeredOffice}</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" aria-hidden="true" />
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

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-xs font-heading font-bold text-white uppercase tracking-wider mb-3">{col.title}</h2>
              <ul className="space-y-2 text-sm text-slate-300">
                {col.links.map(([text, to]) => (
                  <li key={to}>
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

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {companyInfo.name}. QvikLoan is a brand operated by {companyInfo.name}.
          </div>
          <div className="flex items-center gap-3">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <span aria-hidden="true">•</span>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms</Link>
            <span aria-hidden="true">•</span>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
