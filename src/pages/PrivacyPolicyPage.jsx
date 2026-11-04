import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 4, 2026";

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-soft text-royal text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Legal & Data Protection
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-neutral-muted">
            Last Updated: {lastUpdated} • Applicable to QvikLoan, operated by {companyInfo.name}
          </p>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-card-lg p-8 sm:p-12 space-y-8 text-xs sm:text-sm text-slate-blue leading-relaxed">
          
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy">
              1. Introduction & Operating Entity
            </h2>
            <p>
              This Privacy Policy describes how <strong>{companyInfo.name}</strong> ("Company", "we", "us", or "our"), operating the digital platform <strong>QvikLoan</strong> (available at <a href="https://qvikloan.com" className="text-royal font-semibold hover:underline">https://qvikloan.com</a>), collects, handles, stores, and protects personal information provided by individuals and businesses ("Users", "you", or "Borrowers") when submitting an online loan enquiry.
            </p>
            <p>
              We are committed to maintaining the highest standards of financial privacy and strictly comply with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules), and the Reserve Bank of India’s (RBI) Guidelines on Digital Lending.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy">
              2. Information We Collect
            </h2>
            <p>
              We practice data minimisation. We only collect information that is strictly required to facilitate your loan enquiry with participating institutional lenders:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Contact Information:</strong> Full legal name, verified mobile phone number, email address, and residential / commercial city.</li>
              <li><strong>Enquiry Preferences:</strong> Loan type sought (Personal or Business), desired loan amount, and broad loan purpose.</li>
              <li><strong>Broad Employment Profile:</strong> Category of employment (salaried, self-employed professional, business owner) to determine eligible lender categories.</li>
              <li><strong>Technical Data:</strong> IP address, device type, browser metadata, and access timestamps strictly for fraud prevention and security verification.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 bg-neutral-bg p-5 rounded-xl border border-neutral-border">
            <h2 className="text-base font-heading font-bold text-navy flex items-center gap-2">
              <Lock className="w-4 h-4 text-royal" />
              <span>3. Information We Do NOT Collect</span>
            </h2>
            <p className="text-xs">
              In accordance with RBI Digital Lending Guidelines and responsible privacy standards:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-blue">
              <li>We do <strong>NOT</strong> request or access your mobile phone contacts, call logs, SMS logs, or device photo galleries.</li>
              <li>We do <strong>NOT</strong> collect or store your net banking passwords, debit/credit card PINs, or CVVs.</li>
              <li>We do <strong>NOT</strong> collect biometric identifiers.</li>
              <li>We do <strong>NOT</strong> ask for upfront processing payments to personal UPI IDs or bank accounts.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy">
              4. Purpose of Data Processing & Legal Basis
            </h2>
            <p>
              We process your personal information strictly based on your explicit consent for the following defined purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To match your requirements with participating lenders.</li>
              <li>To transmit your enquiry details to chosen lending partners for eligibility evaluation.</li>
              <li>To provide customer support and service updates regarding your enquiry status.</li>
              <li>To prevent cyber fraud, unauthorised automated submissions, and malicious activity.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy">
              5. How Your Information is Shared with Participating Lenders
            </h2>
            <p>
              QvikLoan is not a lender. When you submit an enquiry and select the explicit consent checkbox, you authorize QvikLoan (Jatta M Kommerce Private Limited) to transmit your basic profile to participating lenders.
            </p>
            <p>
              These lenders evaluate your preliminary eligibility and may contact you directly with offers. We require all partner lenders to treat your data in strict compliance with RBI regulations and confidentiality laws. We do not sell your data to unaffiliated third-party marketing brokers.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy">
              6. Data Security & Storage
            </h2>
            <p>
              All data transmitted through QvikLoan is secured using industry-standard 256-bit Secure Sockets Layer (SSL) encryption. Servers are housed in secure data centers with multi-tier access controls. We retain your enquiry information only for as long as necessary to fulfill the facilitation purpose or satisfy regulatory compliance requirements.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy">
              7. Your Rights Regarding Your Data
            </h2>
            <p>You have full autonomy over your personal information:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Right to Review:</strong> You may request a copy of the personal information we hold about you.</li>
              <li><strong>Right to Rectify:</strong> You may request correction of inaccurate contact or profile details.</li>
              <li><strong>Right to Withdraw Consent / Erase:</strong> You may withdraw your consent for future data processing or request deletion of your records by writing to our Privacy Desk at <a href={`mailto:${companyInfo.email}`} className="text-royal font-semibold hover:underline">{companyInfo.email}</a>.</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="space-y-3 pt-4 border-t border-neutral-border">
            <h2 className="text-lg font-heading font-bold text-navy">
              8. Grievance Officer & Contact Information
            </h2>
            <p>
              In accordance with Information Technology Act, 2000 and SPDI Rules, the designated Grievance Officer for data protection concerns is:
            </p>
            <div className="bg-neutral-bg p-4 rounded-xl border border-neutral-border text-xs space-y-1.5">
              <div><strong>Name:</strong> {companyInfo.grievanceOfficer.name}</div>
              <div><strong>Designation:</strong> {companyInfo.grievanceOfficer.designation}</div>
              <div><strong>Company:</strong> {companyInfo.name}</div>
              <div><strong>Registered Office:</strong> {companyInfo.address.registeredOffice}</div>
              <div><strong>Corporate Office:</strong> {companyInfo.address.corporateOffice}</div>
              <div><strong>Email:</strong> <a href={`mailto:${companyInfo.email}`} className="text-royal font-semibold">{companyInfo.email}</a></div>
              <div><strong>Helpline Phone:</strong> {companyInfo.phone}</div>
              <div><strong>Resolution Timeline:</strong> Acknowledgment within 48 hours; resolution within 14 working days.</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

