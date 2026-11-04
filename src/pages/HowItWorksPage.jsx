import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, FileSearch, Scale, FileText, Check, HelpCircle, UserCheck, Layers, FileSignature } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function HowItWorksPage({ onOpenEnquiry }) {
  const steps = [
    {
      num: '01',
      title: 'Tell us what you’re looking for',
      desc: 'Select whether you need a personal loan or business loan, and specify the amount you wish to enquire about using our intuitive selectors.',
      details: 'Explore amounts ranging from ₹50,000 for planned personal expenses up to ₹50,00,000 for enterprise growth.',
      badge: 'Preference Discovery',
      icon: Layers,
      image: '/images/step-01-enquiry.png'
    },
    {
      num: '02',
      title: 'Submit your enquiry with explicit consent',
      desc: 'Provide your basic contact details (full name, phone number, email, and city). You will review clear disclosures about how your data is used before clicking submit.',
      details: 'We believe in absolute data transparency: your details are shared strictly with participating RBI-registered lenders to evaluate eligibility.',
      badge: 'Data Protection & Consent',
      icon: ShieldCheck,
      image: '/images/step-02-consent.png'
    },
    {
      num: '03',
      title: 'Complete the lender’s checks',
      desc: 'If a participating lender identifies that your profile matches their criteria, they will request relevant documentation to verify identity, income, or business turnover.',
      details: 'KYC checks, bank statement analysis, and credit bureau reviews are conducted directly by the regulated underwriting entity.',
      badge: 'Institutional Underwriting',
      icon: UserCheck,
      image: '/images/step-03-evaluation.png'
    },
    {
      num: '04',
      title: 'Review the offer and Key Facts Statement (KFS)',
      desc: 'If an offer is sanctioned, the lender provides a formal Key Facts Statement (KFS) detailing the sanctioned amount, APR, monthly instalment, processing fee, and total amount repayable.',
      details: 'You have complete freedom to examine the terms and decide whether to accept or decline. You are under no obligation to proceed.',
      badge: 'Informed Choice',
      icon: FileSignature,
      image: '/images/step-04-offer-kfs.png'
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
      a: `All loans facilitated through QvikLoan are provided directly by participating RBI-registered Non-Banking Financial Companies (NBFCs) and scheduled commercial banks. QvikLoan, operated by ${companyInfo.name}, functions as a loan facilitation and technology platform.`
    },
    {
      q: 'How is my personal information protected?',
      a: 'Your data is encrypted using 256-bit SSL protocols. We only collect the minimal information necessary to match your requirements with lenders. We never sell your information or collect sensitive banking passwords or biometric credentials.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Header with Rich Visual Graphic */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-soft text-royal text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Process Transparency</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
                How QvikLoan Works
              </h1>
              <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
                We believe financial decisions should be transparent, straightforward, and free from hidden terms. Learn how our digital loan facilitation platform connects you with participating institutional lenders.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry('personal')}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold text-sm shadow-subtle hover:shadow-premium transition-all"
                >
                  <span>Start Your Enquiry</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Right Visual Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md rounded-2xl overflow-hidden border border-neutral-border shadow-premium bg-white">
                <img
                  src="/images/how-it-works-hero.png"
                  alt="How QvikLoan Facilitation Works"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Connected 4-Step Process Cards with Icons & Visuals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">
            The Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
            Four Steps to Informed Borrowing
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="backdrop-blur-md bg-white/95 rounded-2xl border border-neutral-border p-6 sm:p-8 shadow-subtle hover-lift grid grid-cols-1 lg:grid-cols-12 gap-6 items-center transition-all"
              >
                {/* Step Illustration Graphic */}
                <div className="lg:col-span-4 rounded-xl overflow-hidden bg-neutral-bg/60 border border-neutral-border/60 p-2 flex items-center justify-center">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-44 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Step Content */}
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-navy text-white text-[11px] font-extrabold font-mono">
                      Step {step.num}
                    </span>
                    <span className="text-xs font-bold text-royal uppercase tracking-wider">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-blue leading-relaxed">
                    {step.desc}
                  </p>
                  <p className="text-xs text-neutral-muted leading-relaxed pt-1">
                    {step.details}
                  </p>
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-dark bg-teal-soft px-3 py-1.5 rounded-lg">
                      <Check className="w-3.5 h-3.5" />
                      <span>Fair Practice Verified</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Lender Role vs QvikLoan Role Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-neutral-border p-8 sm:p-10 shadow-subtle space-y-6">
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
                  <th className="py-3.5 px-4 font-bold text-royal">QvikLoan ({companyInfo.name})</th>
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
      <section className="bg-neutral-bg/70 py-14 sm:py-20 border-y border-neutral-border">
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
                className="bg-white rounded-2xl border border-neutral-border p-6 shadow-subtle space-y-2"
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
        <div className="bg-navy rounded-3xl text-white p-8 sm:p-12 space-y-4 shadow-premium">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold">
            Ready to Start Your Loan Enquiry?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Experience a transparent, streamlined loan facilitation process.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenEnquiry('personal')}
              className="px-8 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold text-sm transition-colors shadow-subtle"
            >
              Start Online Enquiry
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
