import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, FileSearch, Scale, FileText, Check, HelpCircle, UserCheck, Layers, FileSignature } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function HowItWorksPage({ onOpenEnquiry }) {
  const steps = [
    {
      num: '01',
      title: 'Tell us what you’re looking for',
      desc: 'Choose a personal or business loan and the amount you’d like to enquire about.',
      image: '/images/step-01-enquiry.png'
    },
    {
      num: '02',
      title: 'Submit your enquiry',
      desc: 'Share your basic contact details. You’ll see how your information is used before you submit.',
      image: '/images/step-02-consent.png'
    },
    {
      num: '03',
      title: 'Complete the lender’s checks',
      desc: 'If a lender can consider your application, it may ask for identity, income, credit or business documents.',
      image: '/images/step-03-evaluation.png'
    },
    {
      num: '04',
      title: 'Review the offer and decide',
      desc: 'If a lender makes an offer, read the Key Facts Statement (KFS) and loan agreement. You can accept or decline.',
      image: '/images/step-04-offer-kfs.png'
    }
  ];

  const faqs = [
    {
      q: 'Does submitting an enquiry guarantee a loan?',
      a: 'No. Any offer and approval is decided by the lender, based on its own eligibility criteria and checks.'
    },
    {
      q: 'Does QvikLoan charge any fees from borrowers?',
      a: 'QvikLoan does not charge borrowers for submitting an enquiry. Any lender fees are shown in the Key Facts Statement (KFS) before you accept an offer.'
    },
    {
      q: 'What is a Key Facts Statement (KFS)?',
      a: 'A standard summary of the loan terms — APR, monthly instalment, tenure, fees and penal charges — that the lender gives you before you accept.'
    },
    {
      q: 'How is my personal information protected?',
      a: 'We collect only what is needed for your enquiry and share it with participating lenders with your consent. We never ask for banking passwords or OTPs.'
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
                Four simple steps from enquiry to decision — and you stay in control the whole way.
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

            {/* Right Visual Graphic with Side Blending */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-premium bg-white">
                <img
                  src="/images/how-it-works-hero.png"
                  alt="How QvikLoan Facilitation Works"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                {/* Side blending feather overlays */}
                <div className="absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Connected 4-Step Process Cards - Compact 1-Line Desktop Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-1">
            The Journey
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy">
            Four Steps to Informed Borrowing
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl border border-neutral-border shadow-subtle hover-lift overflow-hidden flex flex-col justify-between transition-all p-3.5 sm:p-4"
            >
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden bg-neutral-bg/60">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-32 sm:h-36 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-royal-soft text-royal text-xs font-bold">
                    Step {step.num}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-heading font-bold text-navy leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-blue leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
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
              What QvikLoan does, and what the lender does.
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
            Submitting an enquiry does not commit you to borrowing.
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
