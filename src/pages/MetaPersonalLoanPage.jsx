import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, ClipboardList, FileSearch, BadgeIndianRupee, CheckCircle2, FileText, HelpCircle } from 'lucide-react';
import CtaDisclaimer from '../components/CtaDisclaimer';
import GlassLoanEnquirySection from '../components/GlassLoanEnquirySection';
import LoanDisclosure from '../components/LoanDisclosure';
import { companyInfo } from '../data/companyInfo';
import { enquiryRules } from '../data/loanProducts';
import { formatINR } from '../lib/emi';
import { usePageMeta } from '../lib/usePageMeta';

const { minAge, maxAge, minMonthlyIncome } = enquiryRules;

const BENEFITS = [
  { icon: ClipboardList, title: 'One simple enquiry', body: 'Tell us what you need once. We contact you about it, and share it with a lender only if you agree.' },
  { icon: FileSearch, title: 'Clear terms before you decide', body: 'A lender that makes an offer must show the APR, EMI and all charges in its Key Facts Statement before you sign.' },
  { icon: BadgeIndianRupee, title: 'No upfront fee by QvikLoan', body: 'QvikLoan does not charge you for submitting an enquiry. Any lender fees are shown in the lender\'s KFS.' },
];

const ELIGIBILITY = [
  `Aged ${minAge} to ${maxAge}`,
  'Salaried or self-employed',
  `Monthly income of ${formatINR(minMonthlyIncome)} or more`,
  'Indian resident',
];

const DOCUMENTS = ['PAN card', 'Aadhaar (masked)', 'Last 3 months’ bank statement', 'Salary slip'];

const FAQS = [
  { q: 'Is QvikLoan a lender?', a: `No. QvikLoan is ${companyInfo.platformRole}, operated by ${companyInfo.name}. The lending institution decides on your loan and provides it.` },
  { q: 'How long does approval take?', a: 'It depends on the lender’s credit assessment and how quickly its checks are completed. We cannot promise a timeline or an approval.' },
  { q: 'Will checking eligibility affect my CIBIL score?', a: 'Submitting this enquiry does not make QvikLoan check your credit report. A lender may check it during its assessment, and some checks can appear on your credit report. Ask the lender what kind of check it runs before you agree.' },
  { q: 'Is there a fee?', a: 'QvikLoan charges no fee for an enquiry. Never pay anyone an upfront fee to get a loan approved.' },
  { q: 'Do you have any lender partners?', a: 'Yes. The banks and NBFCs we work with are listed on our Lending Partners page.' },
];

export default function MetaPersonalLoanPage() {
  usePageMeta('Personal Loan Enquiry', `Start a personal loan enquiry with QvikLoan, operated by ${companyInfo.name}. QvikLoan is not a lender. The lending institution decides eligibility, approval, rates and disbursement.`);

  return (
    <div className="space-y-14 sm:space-y-20 pb-16">

      {/* Minimal header: logo and who operates the site, no navigation */}
      <header className="bg-white border-b border-neutral-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          <Link to="/" className="rounded-lg p-0.5 focus:outline-none focus:ring-2 focus:ring-royal">
            <img src="/logos/QvikLoan_Web.webp" alt="QvikLoan home" className="h-9 w-auto object-contain" />
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-soft text-royal-dark text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            QvikLoan is not a lender
          </span>
        </div>
      </header>

      {/* Headline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
          Personal Loan Enquiry — Learn Your Options
        </h1>
        <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
          Tell us what you need and our team will explain your options. QvikLoan is not a lender, and we do not promise
          any offer, rate or approval.
        </p>
        <div>
          <Link
            to="#enquiry-section"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-bold text-sm shadow-subtle transition-all"
          >
            <span>Start your enquiry</span>
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Link>
        </div>
        <CtaDisclaimer className="max-w-2xl mx-auto" />
      </section>

      <GlassLoanEnquirySection initialType="personal" />

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6" aria-label="Why use QvikLoan">
        {BENEFITS.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl border border-neutral-border bg-white p-6 space-y-3 shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-royal-soft text-royal-dark flex items-center justify-center">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <h2 className="text-lg font-heading font-bold text-navy">{title}</h2>
            <p className="text-sm text-slate-blue leading-relaxed">{body}</p>
          </div>
        ))}
      </section>

      {/* Eligibility and documents */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-neutral-border bg-white p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-heading font-bold text-navy flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-teal-dark" aria-hidden="true" />
            Who can enquire
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-blue">
            {ELIGIBILITY.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="text-sm text-neutral-muted">
            These are QvikLoan's rules for accepting an enquiry. Each lender applies its own criteria, and meeting these does not guarantee a loan.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-border bg-white p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-heading font-bold text-navy flex items-center gap-2">
            <FileText className="w-5 h-5 text-royal" aria-hidden="true" />
            Documents a lender may ask for
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-blue">
            {DOCUMENTS.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="text-sm text-neutral-muted">
            You do not need these for this enquiry. Share them only with the lender, through its official channels.
          </p>
        </div>
      </section>

      <LoanDisclosure product="personal" />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" aria-labelledby="ad-faq">
        <h2 id="ad-faq" className="text-2xl sm:text-3xl font-heading font-bold text-navy text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-neutral-border bg-white p-6 space-y-2">
              <h3 className="text-base font-heading font-bold text-navy flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-royal shrink-0" aria-hidden="true" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm text-slate-blue leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
