import React from 'react';
import { ShieldCheck, FileText, AlertCircle, Scale } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function TermsAndConditionsPage() {
  const lastUpdated = "November 4, 2026";

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-soft text-royal text-xs font-semibold">
            <FileText className="w-3.5 h-3.5" />
            Platform Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">
            Terms and Conditions
          </h1>
          <p className="text-xs sm:text-sm text-neutral-muted">
            Last Updated: {lastUpdated} • Operated by {companyInfo.name}
          </p>
        </div>
      </section>

      {/* Terms Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-card-lg border border-neutral-border p-8 sm:p-12 shadow-subtle space-y-8 text-xs sm:text-sm text-slate-blue leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy">
              1. Acceptance of Terms
            </h2>
            <p>
              Welcome to <strong>QvikLoan</strong> (accessible at <a href="https://qvikloan.com" className="text-royal font-semibold hover:underline">https://qvikloan.com</a>), an online loan enquiry and digital facilitation platform owned and managed by <strong>{companyInfo.name}</strong> ("Company", "we", "us", or "our").
            </p>
            <p>
              By accessing our website, browsing our financial informational content, or submitting a loan enquiry, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, you must refrain from using the platform.
            </p>
          </div>

          <div className="space-y-3 bg-neutral-bg p-5 rounded-xl border border-neutral-border">
            <h2 className="text-base font-heading font-bold text-navy flex items-center gap-2">
              <Scale className="w-4 h-4 text-royal" />
              <span>2. Intermediary Status & Nature of Services</span>
            </h2>
            <p className="text-xs">
              <strong>CRITICAL REGULATORY NOTICE:</strong> QvikLoan is an intermediary digital facilitation platform as defined under Section 2(1)(w) of the Information Technology Act, 2000. QvikLoan is <strong>NOT</strong> a bank, Non-Banking Financial Company (NBFC), or financial institution registered under Section 45-IA of the Reserve Bank of India Act, 1934.
            </p>
            <p className="text-xs">
              QvikLoan does not lend money, issue credit, manage escrow funds, underwrite risk, guarantee approval, or execute disbursements. Our role is strictly limited to capturing prospective borrower enquiries and routing them to participating RBI-registered lending partners for independent credit evaluation.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy">
              3. No Loan Approval Guarantee or Commitment
            </h2>
            <p>
              Submitting an online enquiry through QvikLoan does <strong>NOT</strong> constitute a loan sanction, loan agreement, or commitment to lend. All loan evaluations, interest rates, annual percentage rates (APR), tenures, charges, and disbursements are decided exclusively by the participating lender in accordance with their independent credit policies and regulatory compliance guidelines.
            </p>
            <p>
              The user retains the complete, unconstrained right to review any Key Facts Statement (KFS) received from a lender and decide whether to accept or decline the loan offer.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy">
              4. User Representations & Eligibility
            </h2>
            <p>By using QvikLoan and submitting an enquiry, you warrant and represent that:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>You are a natural person at least 18 years of age possessing legal capacity to contract under the Indian Contract Act, 1872, or an authorized representative of a legally registered business entity.</li>
              <li>All information provided by you (including your legal name, mobile number, employment or business status, and desired loan parameters) is true, accurate, current, and complete.</li>
              <li>You are submitting an enquiry for legitimate personal or business financial requirements and not for any fraudulent, speculative, or unlawful activity.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy">
              5. Intellectual Property
            </h2>
            <p>
              All trademarks, service marks, logos, brand names (including "QvikLoan"), graphics, user interfaces, website architecture, and software code are the intellectual property of Jatta M Kommerce Private Limited or its respective licensors. You may not reproduce, copy, distribute, or create derivative works without prior written consent.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, Jatta M Kommerce Private Limited and its directors, employees, or affiliates shall not be liable for any direct, indirect, incidental, punitive, or consequential damages arising out of your relationship with any participating lender, loan approval decisions, interest rate determinations, or lender customer service interactions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy">
              7. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes or claims arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts in Gurugram, Haryana or New Delhi, India.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-neutral-border">
            <h2 className="text-lg font-heading font-bold text-navy">
              8. Contact & Notice
            </h2>
            <p>
              If you have any questions or require legal clarification regarding these Terms, please contact our Legal & Compliance Team:
            </p>
            <div className="bg-neutral-bg p-4 rounded-xl border border-neutral-border text-xs space-y-1">
              <div><strong>Company:</strong> {companyInfo.name} (CIN: {companyInfo.cin})</div>
              <div><strong>Address:</strong> {companyInfo.address.line1}, {companyInfo.address.city}, {companyInfo.address.state} - {companyInfo.address.postalCode}</div>
              <div><strong>Email:</strong> <a href={`mailto:${companyInfo.complianceEmail}`} className="text-royal font-semibold">{companyInfo.complianceEmail}</a></div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
