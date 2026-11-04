import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, FileSearch, Scale, FileText, Check, HelpCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function HowItWorksPage({ onOpenEnquiry }) {
  const steps = [
    {
      num: '01',
      title: 'Tell us what you’re looking for',
      desc: 'Select whether you need a personal loan or business loan, and specify the amount you wish to enquire about using our intuitive selectors.',
      details: 'You can explore amounts ranging from ₹50,000 for planned personal expenses up to ₹50,00,000 for commercial growth.',
      badge: 'Step 1: Preference Discovery'
    },
    {
      num: '02',
      title: 'Submit your enquiry with explicit consent',
      desc: 'Provide your basic contact details (full name, phone number, email, and city). You will review clear disclosures about how your data is used before clicking submit.',
      details: 'We believe in absolute data transparency: your details are shared strictly with participating RBI-registered lenders to evaluate eligibility.',
      badge: 'Step 2: Transparent Consent'
    },
    {
      num: '03',
      title: 'Complete the lender’s checks',
      desc: 'If a participating lender identifies that your profile matches their criteria, they will request relevant documentation to verify identity, income, or business turnover.',
      details: 'KYC checks, bank statement analysis, and credit score reviews are conducted directly by the regulated underwriting entity.',
      badge: 'Step 3: Direct Underwriting'
    },
    {
      num: '04',
      title: 'Review the offer and Key Facts Statement (KFS)',
      desc: 'If an offer is sanctioned, the lender provides a formal Key Facts Statement (KFS) detailing the sanctioned amount, APR, monthly instalment, processing fee, and total amount repayable.',
      details: 'You have complete freedom to examine the terms and decide whether to accept or decline. You are under no obligation to proceed.',
      badge: 'Step 4: Informed Choice'
    }
  ];

  const faqs = [
    {
      q: 'Does submitting an enquiry guarantee a loan?',
      a: 'No. Submitting an enquiry does not guarantee a loan offer or approval. Approval is solely determined by participating lenders based on their independent underwriting criteria, verification checks, and regulatory risk guidelines.'
    },
    {
      q: 'Does QvikLoan charge any fees from borrowers?',
      a: 'No. QvikLoan does not charge any upfront application or facilitation fees to borrowers. If a participating lender sanctions a loan, any applicable processing fee is disclosed in the Key Facts Statement (KFS) and deducted directly from the sanctioned disbursement amount.'
    },
    {
      q: 'What is a Key Facts Statement (KFS)?',
      a: 'A Key Facts Statement (KFS) is a standardised disclosure sheet mandated by the Reserve Bank of India (RBI). It provides a concise summary of the loan terms, including the annual percentage rate (APR), monthly instalment (EMI), tenure, all applicable fees, and penal charges.'
    },
    {
      q: 'Who actually lends the money?',
      a: 'All loans facilitated through QvikLoan are provided directly by participating RBI-registered Non-Banking Financial Companies (NBFCs) and scheduled commercial banks. QvikLoan, operated by Jatta M Kommerce Private Limited, functions as a loan facilitation and technology platform.'
    },
    {
      q: 'How is my personal information protected?',
      a: 'Your data is encrypted using 256-bit SSL protocols. We only collect the minimal information necessary to match your requirements with lenders. We never sell your information or collect sensitive banking passwords or biometric credentials.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-soft text-royal text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Process Transparency
            </div>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight">
              How QvikLoan Works
            </h1>
            <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
              We believe financial decisions should be transparent, straightforward, and free from hidden terms. Learn how our digital loan facilitation platform connects you with participating institutional lenders.
            </p>
          </div>
        </div>
      </section>

      {/* Connected 4-Step Process Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-white rounded-card-lg border border-neutral-border p-8 sm:p-10 shadow-subtle hover-lift flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-royal text-white font-heading font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm">
                  {step.num}
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-royal uppercase tracking-wider block">
                    {step.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-blue leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                  <p className="text-xs text-neutral-muted leading-relaxed max-w-2xl pt-1">
                    {step.details}
                  </p>
                </div>
              </div>

              <div className="lg:shrink-0 lg:pl-6 lg:border-l border-neutral-border">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-dark bg-teal-soft px-3 py-2 rounded-xl">
                  <Check className="w-4 h-4" />
                  <span>Fair Practice Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lender Role vs QvikLoan Role Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-card-lg border border-neutral-border p-8 sm:p-10 shadow-subtle space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
              Clear Division of Responsibilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-blue mt-2">
              For complete compliance and trust, understand what QvikLoan does and what the participating lender handles.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-neutral-border bg-neutral-bg">
                  <th className="py-3.5 px-4 font-bold text-navy">Function / Operational Step</th>
                  <th className="py-3.5 px-4 font-bold text-royal">QvikLoan (Jatta M Kommerce Pvt Ltd)</th>
                  <th className="py-3.5 px-4 font-bold text-teal-dark">Participating Regulated Lender</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-border text-slate-blue">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-navy">Digital Enquiry Intake</td>
                  <td className="py-3.5 px-4 text-royal font-semibold">✓ Collects and routes borrower preferences</td>
                  <td className="py-3.5 px-4 text-neutral-muted">—</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-navy">Credit & Risk Underwriting</td>
                  <td className="py-3.5 px-4 text-neutral-muted">Does not evaluate or approve credit</td>
                  <td className="py-3.5 px-4 text-teal-dark font-semibold">✓ Conducts KYC, bureau checks, and underwriting</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-navy">Interest Rates & Fee Setting</td>
                  <td className="py-3.5 px-4 text-neutral-muted">Does not determine pricing</td>
                  <td className="py-3.5 px-4 text-teal-dark font-semibold">✓ Sets APR, fees, and repayment terms</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-navy">Key Facts Statement (KFS) Issuance</td>
                  <td className="py-3.5 px-4 text-neutral-muted">—</td>
                  <td className="py-3.5 px-4 text-teal-dark font-semibold">✓ Issues legally binding KFS disclosure</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-navy">Loan Disbursement</td>
                  <td className="py-3.5 px-4 text-neutral-muted">Does not hold or disburse funds</td>
                  <td className="py-3.5 px-4 text-teal-dark font-semibold">✓ Disburses funds directly to borrower's bank</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-neutral-bg py-14 sm:py-20 border-y border-neutral-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-neutral-border p-6 shadow-subtle space-y-2"
              >
                <h4 className="text-base font-heading font-bold text-navy flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-royal shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-blue leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-navy rounded-card text-white p-8 sm:p-12 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold">
            Ready to Start Your Loan Enquiry?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Experience a transparent, streamlined loan facilitation process.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenEnquiry('personal')}
              className="px-6 py-3 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold text-sm transition-colors"
            >
              Start Online Enquiry
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
