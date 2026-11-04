import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Shield, Building2, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-12 border-t border-slate-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Corporate Identity (Cols 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block bg-white p-2.5 rounded-xl shadow-sm">
              <img
                src="/logos/QvikLoan_Web.webp"
                alt="QvikLoan"
                className="h-8 w-auto object-contain"
              />
            </Link>
            
            <p className="text-[14px] text-slate-200/80 leading-relaxed max-w-md">
              A transparent digital loan enquiry and facilitation platform operated by{' '}
              <strong className="text-white font-semibold">{companyInfo.name}</strong>. Connecting individuals and businesses with participating RBI-registered lenders.
            </p>

            <div className="space-y-2.5 pt-2 text-[13px] text-slate-300">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Operating Entity:</strong> {companyInfo.name}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Registered Office:</strong><br />
                  {companyInfo.address.registeredOffice}
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Corporate Office:</strong><br />
                  {companyInfo.address.corporateOffice}
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-teal-accent shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors underline-offset-2 hover:underline">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-accent shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-white transition-colors">
                  {companyInfo.phone} ({companyInfo.operatingHours})
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-teal-accent shrink-0" />
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}?text=Hi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-teal-accent font-semibold"
                >
                  WhatsApp Us ({companyInfo.whatsapp})
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-[15px] font-heading font-bold text-white uppercase tracking-wider mb-4">
              Explore Products
            </h4>
            <ul className="space-y-2.5 text-[14px] text-slate-300">
              <li>
                <Link to="/" className="hover:text-teal-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/personal-loans" className="hover:text-teal-accent transition-colors">
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link to="/business-loans" className="hover:text-teal-accent transition-colors">
                  Business Loans
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-teal-accent transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/participating-lenders" className="hover:text-teal-accent transition-colors">
                  Participating Lenders
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-[15px] font-heading font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-[14px] text-slate-300">
              <li>
                <Link to="/about-us" className="hover:text-teal-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-teal-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/participating-lenders" className="hover:text-teal-accent transition-colors">
                  Lender Disclosure
                </Link>
              </li>
              <li>
                <Link to="/grievance-redressal" className="hover:text-teal-accent transition-colors">
                  Grievance Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Links */}
          <div>
            <h4 className="text-[15px] font-heading font-bold text-white uppercase tracking-wider mb-4">
              Legal & Disclosures
            </h4>
            <ul className="space-y-2.5 text-[14px] text-slate-300">
              <li>
                <Link to="/privacy-policy" className="hover:text-teal-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-teal-accent transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-teal-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/grievance-redressal" className="hover:text-teal-accent transition-colors">
                  Grievance Redressal
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Detailed Compliance Disclosures */}
        <div className="py-8 text-[12px] text-slate-400 space-y-3 leading-relaxed border-b border-white/10">
          <div className="flex items-center gap-2 text-white font-semibold text-[13px]">
            <Shield className="w-4 h-4 text-teal-accent" />
            <span>Important Regulatory Disclosures</span>
          </div>
          <p>
            <strong>Role of Platform:</strong> QvikLoan is an online loan enquiry and facilitation platform operated by <strong>{companyInfo.name}</strong>. QvikLoan is neither a bank nor a Non-Banking Financial Company (NBFC) and does not directly provide loans, disburse funds, or make credit decisions. All credit evaluations, loan approvals, interest rates, processing fees, repayment tenures, and disbursements are governed solely by our participating RBI-registered NBFCs and banks under applicable lending agreements.
          </p>
          <p>
            <strong>Borrower Decision & KFS:</strong> Submitting an online enquiry does not guarantee a loan offer or commit the applicant to borrow. If a participating lender issues a loan offer, applicants are advised to review the Key Facts Statement (KFS), Annual Percentage Rate (APR), repayment schedule, and all associated charges before acceptance. Borrowers retain the unconditional right to decline any loan offer.
          </p>
          <p>
            <strong>Fraud Advisory:</strong> QvikLoan and its representatives will never ask applicants for advance processing fees, security deposits, or personal OTPs to approve loans. All official fees (if any) are deducted by the underwriting lender directly from the sanctioned loan amount as disclosed in the KFS.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved. QvikLoan™ is an official brand of {companyInfo.name}.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms</Link>
            <span>•</span>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
