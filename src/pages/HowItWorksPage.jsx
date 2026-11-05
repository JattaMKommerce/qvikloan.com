import { Link } from 'react-router-dom';
import React from 'react';
import { ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import CtaDisclaimer from '../components/CtaDisclaimer';
import RoleTable from '../components/RoleTable';
import { companyInfo } from '../data/companyInfo';
import { usePageMeta } from '../lib/usePageMeta';

const STEPS = [
  {
    num: '01',
    title: 'Tell us what you’re looking for',
    desc: 'Choose a personal or business loan and the amount you’d like to enquire about.',
    image: '/images/step-01-enquiry.png',
  },
  {
    num: '02',
    title: 'Submit your enquiry with consent',
    desc: 'Share your basic contact details. You see how they are used before you submit. No lender receives them today.',
    image: '/images/step-02-consent.png',
  },
  {
    num: '03',
    title: 'Complete the lender’s checks',
    desc: 'IF a lender partnership is active and you give fresh consent, that lender may ask you for identity, income, credit or business documents.',
    image: '/images/step-03-evaluation.png',
  },
  {
    num: '04',
    title: 'Review the offer and decide',
    desc: 'If the lender makes an offer, read its Key Facts Statement (KFS) and loan agreement. You can accept or decline.',
    image: '/images/step-04-offer-kfs.png',
  },
];

const FAQS = [
  {
    q: 'Does submitting an enquiry guarantee a loan?',
    a: 'No. Whether you get an offer, and on what terms, is decided by the lender after its own eligibility checks, verification and credit assessment.',
  },
  {
    q: 'Does QvikLoan charge borrowers any fees?',
    a: 'QvikLoan does not charge borrowers any fee for submitting an enquiry. Any fees charged by the lender, such as a processing fee, are listed in its Key Facts Statement before you accept an offer. Never pay anyone an upfront fee to get a loan approved.',
  },
  {
    q: 'How fast will I get a loan?',
    a: 'We cannot promise a timeline. How long the lender takes to assess, approve and disburse a loan depends on the lender and on how quickly the checks it needs are completed.',
  },
  {
    q: 'What is a Key Facts Statement (KFS)?',
    a: 'A standard summary of the loan terms (the APR, EMI, tenure, fees, penal charges and cooling-off period) that the lender must give you before you accept.',
  },
  {
    q: 'Who will see my details?',
    a: 'Our team and the service providers that run our systems. No lender receives your details today. If a lender partnership is confirmed, only a lender listed on our Lending Partners page could receive them, and only with your fresh consent. We never ask for OTPs, banking passwords or upfront payments.',
  },
  {
    q: 'Can I ask you to delete my details?',
    a: `Yes. Email ${companyInfo.email} to withdraw your consent or ask us to delete your enquiry. If a lender already has your details, we will tell you how to contact that lender too.`,
  },
  {
    q: 'How do I complain?',
    a: 'Use our Grievance Redressal page. Complaints about a loan itself go to the lender, and can be escalated to the RBI if the lender does not resolve them within 30 days.',
  },
];

export default function HowItWorksPage() {
  usePageMeta('How It Works', 'How a QvikLoan enquiry works, step by step, what QvikLoan does and what the lender does, and answers to common questions.');

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">

      {/* Hero */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-soft text-royal-dark text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Step by step</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
                How QvikLoan Works
              </h1>
              <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
                How an enquiry works, and what would happen if a lender partnership becomes active. QvikLoan currently has no active lending partner.
              </p>
              <Link
                to="/#enquiry-section"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold text-sm shadow-subtle transition-all"
              >
                <span>Start an enquiry</span>
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
              <CtaDisclaimer className="max-w-xl" />
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="glass rounded-2xl overflow-hidden relative w-full max-w-md">
                <img src="/images/how-it-works-hero.png" alt="" className="w-full h-auto object-cover" loading="eager" />
                <div className="absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="steps">
        <h2 id="steps" className="text-2xl sm:text-3xl font-heading font-bold text-navy text-center mb-10">Four steps</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <li key={step.num} className="glass rounded-2xl overflow-hidden flex flex-col">
              <img src={step.image} alt="" className="w-full h-44 object-cover object-top" loading="lazy" />
              <div className="p-5 space-y-2">
                <span className="text-xs font-bold text-royal">STEP {step.num}</span>
                <h3 className="text-base font-heading font-bold text-navy">{step.title}</h3>
                <p className="text-sm text-slate-blue leading-relaxed">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Responsibilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" aria-labelledby="responsibilities">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="responsibilities" className="text-2xl sm:text-3xl font-heading font-bold text-navy">
            Who does what
          </h2>
          <p className="text-sm sm:text-base text-slate-blue mt-2">What QvikLoan does, and what the lender does.</p>
        </div>
        <RoleTable />
      </section>

      {/* FAQ */}
      <section className="bg-neutral-bg/70 py-14 sm:py-20 border-y border-neutral-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">Common questions</span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="glass rounded-2xl p-6 space-y-2">
                <h3 className="text-base font-heading font-bold text-navy flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-royal shrink-0" aria-hidden="true" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-blue leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
