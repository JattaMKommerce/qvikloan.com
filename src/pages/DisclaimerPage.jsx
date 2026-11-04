import React from 'react';
import { AlertTriangle, ShieldCheck, Info, CheckCircle2, Building2 } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function DisclaimerPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-soft text-royal text-xs font-semibold">
            <Info className="w-3.5 h-3.5" />
            Statutory Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">
            Platform Disclaimers
          </h1>
          <p className="text-xs sm:text-sm text-neutral-muted">
            Important regulatory disclosures regarding QvikLoan and Jatta M Kommerce Private Limited
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-card-lg p-8 sm:p-12 space-y-8 text-xs sm:text-sm text-slate-blue leading-relaxed">
          
          {/* Main Non-Lender Status */}
          <div className="bg-neutral-bg p-6 rounded-card border border-neutral-border space-y-3">
            <div className="flex items-center gap-2 font-heading font-bold text-navy text-base">
              <ShieldCheck className="w-5 h-5 text-royal" />
              <span>1. Regulatory Status & Non-Lender Clarification</span>
            </div>
            <p>
              <strong>QvikLoan</strong> (accessible at <a href="https://qvikloan.com" className="text-royal font-semibold hover:underline">https://qvikloan.com</a>) is an online loan enquiry, discovery, and digital facilitation platform operated by <strong>{companyInfo.name}</strong> (CIN: {companyInfo.cin}).
            </p>
            <p className="font-semibold text-navy">
              QvikLoan is NOT a bank, Non-Banking Financial Company (NBFC), or financial institution registered with the Reserve Bank of India (RBI).
            </p>
            <p>
              QvikLoan does not directly extend loans, provide credit, take deposits from the public, underwrite credit risk, or disburse funds. We act strictly as an intermediary technology bridge connecting prospective borrowers with participating, regulated lending partners.
            </p>
          </div>

          {/* Underwriting & Discretion */}
          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy">
              2. Lender Evaluation & Approval Discretion
            </h2>
            <p>
              Submitting an enquiry through QvikLoan does not guarantee that you will receive a loan offer, nor does it guarantee loan approval or disbursement.
            </p>
            <p>
              All loan approvals, sanctioned amounts, interest rates, annual percentage rates (APR), processing fees, repayment tenures, and disbursement timings are determined at the sole and independent discretion of the participating lending institution. Each lender conducts its own eligibility verification, credit bureau inquiries, KYC authentication, and risk evaluations in accordance with its internal underwriting policies and applicable regulatory guidelines.
            </p>
          </div>

          {/* Key Facts Statement (KFS) */}
          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy">
              3. Key Facts Statement (KFS) & Borrower Decision
            </h2>
            <p>
              In accordance with the Reserve Bank of India’s Digital Lending Framework, any lender extending an offer is required to provide the prospective borrower with an official Key Facts Statement (KFS) prior to the execution of any loan contract.
            </p>
            <p>
              Borrowers are strongly encouraged to carefully examine the KFS, which contains the all-inclusive Annual Percentage Rate (APR), recovery mechanisms, processing charges, and monthly instalment breakdown. Submitting an enquiry does not create any contractual obligation to borrow. Borrowers may freely decline any loan offer at their sole discretion.
            </p>
          </div>

          {/* Financial Illustrations */}
          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy">
              4. Illustrative Nature of Website Figures
            </h2>
            <p>
              Any financial calculators, representative cost illustrations, interest rate estimates, or EMI computations displayed on this website are for general illustrative and educational purposes only. They do not constitute financial advice, formal quotations, or binding promises. Actual terms extended by participating lenders may differ based on individual credit profiles and prevailing market parameters.
            </p>
          </div>

          {/* Fraud Warning */}
          <div className="bg-amber-50/70 border border-amber-200 p-6 rounded-card space-y-3">
            <div className="flex items-center gap-2 font-heading font-bold text-amber-900 text-base">
              <AlertTriangle className="w-5 h-5 text-amber-700" />
              <span>5. Fraud Advisory – Never Pay Upfront Fees</span>
            </div>
            <p className="text-amber-950">
              QvikLoan, Jatta M Kommerce Private Limited, and their authorised representatives will <strong>NEVER</strong> demand advance processing charges, registration fees, security deposits, or refundable cash transfers into personal bank accounts or UPI IDs to approve or disburse a loan.
            </p>
            <p className="text-amber-950">
              Any legitimate lender processing fee is deducted directly from the sanctioned loan amount upon disbursement and clearly documented in the Key Facts Statement. If you receive suspicious communications demanding upfront payment, report it immediately to <a href={`mailto:${companyInfo.complianceEmail}`} className="font-bold underline">{companyInfo.complianceEmail}</a> and local law enforcement authorities.
            </p>
          </div>

          {/* Corporate Entity Details */}
          <div className="pt-4 border-t border-neutral-border text-xs text-neutral-muted space-y-1">
            <div><strong>Platform Name:</strong> QvikLoan (https://qvikloan.com)</div>
            <div><strong>Legal Entity:</strong> {companyInfo.name}</div>
            <div><strong>Corporate Identity Number (CIN):</strong> {companyInfo.cin}</div>
            <div><strong>Registered Office:</strong> {companyInfo.address.registeredOffice}</div>
            <div><strong>Corporate Office:</strong> {companyInfo.address.corporateOffice}</div>
            <div><strong>Email:</strong> {companyInfo.email} | <strong>Helpline:</strong> {companyInfo.phone}</div>
          </div>

        </div>
      </section>

    </div>
  );
}

