import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, ChevronRight, BadgeIndianRupee, UserCheck, Lock, Landmark, ChevronDown } from 'lucide-react';
import CtaDisclaimer from '../components/CtaDisclaimer';
import GlassLoanEnquirySection from '../components/GlassLoanEnquirySection';
import LenderLogoLoop from '../components/LenderLogoLoop';
import LoanDisclosure from '../components/LoanDisclosure';
import { companyInfo } from '../data/companyInfo';
import { usePageMeta } from '../lib/usePageMeta';

function TypewriterText() {
  const words = ['personal loan options', 'business loan options'];
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(words[0].length);
  const [reverse, setReverse] = React.useState(false);

  React.useEffect(() => {
    // Hold the finished phrase so it can be read before it is erased.
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 3200);
      return () => clearTimeout(timeout);
    }
    // Short pause on the empty line before typing the next phrase.
    if (subIndex === 0 && reverse) {
      const timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 500);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => setSubIndex((prev) => prev + (reverse ? -1 : 1)), reverse ? 55 : 120);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-royal inline">
      {/* Screen readers and search engines get the full phrase, not the animation. */}
      <span className="sr-only">personal and business loan options</span>
      <span aria-hidden="true">
        {words[index].substring(0, subIndex)}
        <span className="inline-block w-[3px] h-[0.8em] bg-royal align-baseline ml-1 animate-pulse" />
      </span>
    </span>
  );
}

const TRUST_POINTS = [
  { icon: BadgeIndianRupee, title: 'No fee to enquire', tone: 'bg-teal-soft text-teal-dark' },
  { icon: UserCheck, title: 'Your consent comes first', tone: 'bg-royal-soft text-royal-dark' },
  { icon: Lock, title: 'We never ask for OTPs', tone: 'bg-orange-soft text-orange' },
  { icon: Landmark, title: 'The lender decides approval', tone: 'bg-royal-soft text-royal-dark' },
];

const LOAN_TYPES = [
  {
    title: 'Personal loan',
    body: 'For planned expenses like medical bills, education, a wedding or home repairs.',
    image: '/images/personal-loan.jpg',
    to: '/personal-loans',
    link: 'See personal loans',
    linkClass: 'text-royal',
  },
  {
    title: 'Business loan',
    body: 'For working capital, stock or new equipment for your business.',
    image: '/images/business-loan.jpg',
    to: '/business-loans',
    link: 'See business loans',
    linkClass: 'text-teal-dark',
  },
];

const STEPS = [
  { num: '1', title: 'Choose your loan', desc: 'Personal or business, and the amount you have in mind.', image: '/images/step-01-enquiry.png' },
  { num: '2', title: 'Share basic details', desc: 'Name, mobile and city. No documents needed here.', image: '/images/step-02-consent.png' },
  { num: '3', title: 'Lender checks', desc: 'A listed lender checks your details, only with your consent.', image: '/images/step-03-evaluation.png' },
  { num: '4', title: 'Review and decide', desc: 'Read the lender’s Key Facts Statement. Accept or say no.', image: '/images/step-04-offer-kfs.png' },
];

const FAQS = [
  {
    q: 'Is QvikLoan a lender?',
    a: `No. QvikLoan takes your enquiry and explains your options. Any loan comes from a bank or RBI-registered NBFC, which decides on it.`,
  },
  {
    q: 'Do I have to pay anything?',
    a: 'No. QvikLoan charges no fee for an enquiry. Never pay anyone an upfront fee to get a loan approved.',
  },
  {
    q: 'Will I definitely get a loan?',
    a: 'No. Whether you get an offer, and the amount and rate, is decided by the lender after its own checks.',
  },
  {
    q: 'Who sees my details?',
    a: 'Our team, and the service providers that run our systems. No lender receives your details today.',
  },
  {
    q: 'Can I ask you to delete my details?',
    a: `Yes. Email ${companyInfo.email} and we will delete your enquiry.`,
  },
];

export default function HomePage() {
  usePageMeta(null, 'QvikLoan is a loan enquiry platform operated by Jatta M Kommerce Private Limited. Explore personal and business loan options. QvikLoan is not a lender; the lending institution decides eligibility, approval and rates.');

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">

      <div>
      {/* ============ Hero ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#eef3fe] to-[#eef3fe]/0">
        {/* Orange swoosh behind the photo */}
        <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[20%] w-[90%] h-28 sm:h-40" viewBox="0 0 1000 160" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="hero-swoosh" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#FD6C00" stopOpacity="0" />
              <stop offset="0.35" stopColor="#FD6C00" stopOpacity="0.85" />
              <stop offset="1" stopColor="#FFB067" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path d="M0 160 C 220 40, 560 10, 1000 70" stroke="url(#hero-swoosh)" strokeWidth="5" />
        </svg>

        <div className="relative mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]">
          {/* Text: lined up with the logo above it */}
          <div className="relative z-10 self-center px-4 sm:px-6 lg:pr-4 lg:pl-[max(2rem,calc((min(100vw,1440px)_-_1280px)/2_+_2rem))] pt-10 sm:pt-14 lg:pt-14 lg:pb-24">
            <div className="max-w-xl space-y-6 sm:space-y-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-royal/30 text-royal text-xs sm:text-sm font-semibold shadow-sm">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Transparent Loan Facilitation Platform</span>
              </div>

              <h1 className="text-[34px] sm:text-5xl xl:text-[56px] font-heading font-extrabold text-navy tracking-tight leading-[1.1] min-h-[2.2em]">
                Explore <TypewriterText />
              </h1>

              <p className="text-base sm:text-lg text-slate-blue leading-relaxed max-w-lg">
                Tell us what you need. Our team will call you and explain your options in simple words.
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/#enquiry-section"
                  state={{ loanType: 'personal' }}
                  className="inline-flex items-center justify-center whitespace-nowrap px-6 py-3.5 sm:py-4 rounded-xl bg-royal hover:bg-royal-hover text-white text-base font-semibold shadow-[0_10px_24px_-10px_rgba(53,106,230,0.7)] transition-colors"
                >
                  Explore personal loans
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
                <Link
                  to="/#enquiry-section"
                  state={{ loanType: 'business' }}
                  className="inline-flex items-center justify-center whitespace-nowrap px-6 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-neutral-50 text-navy border border-neutral-border hover:border-royal text-base font-semibold shadow-sm transition-colors"
                >
                  Explore business loans
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </div>

              <div className="pt-5 border-t border-neutral-border max-w-lg">
                <CtaDisclaimer />
              </div>
            </div>
          </div>

          {/* Photo: top-aligned under the navbar, edges faded into the background */}
          <div className="relative self-start mt-6 lg:mt-0">
            <img
              src="/images/home-hero-woman.webp"
              alt="Smiling woman holding a phone that shows a submitted QvikLoan enquiry"
              width="846"
              height="687"
              className="hero-photo w-full h-auto select-none"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>
      </section>

      {/* ============ Trust strip ============ */}
      <section aria-label="Why people use QvikLoan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-14 relative z-10">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 rounded-2xl bg-white border border-neutral-border shadow-premium p-3 sm:p-4">
          {TRUST_POINTS.map(({ icon: Icon, title, tone }) => (
            <li key={title} className="flex items-center gap-3 rounded-xl p-2 sm:p-3">
              <span className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 ${tone}`}>
                <Icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="text-[13px] sm:text-[15px] font-semibold text-navy leading-snug">{title}</span>
            </li>
          ))}
        </ul>
      </section>
      </div>

      {/* Verified lending partners only (data/lendersData.js); hidden while there are none */}
      <LenderLogoLoop />

      {/* ============ Loan types ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="loan-types">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">Loan options</span>
          <h2 id="loan-types" className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">What do you need a loan for?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {LOAN_TYPES.map((t) => (
            <Link key={t.title} to={t.to} className="glass rounded-2xl hover-lift overflow-hidden flex flex-col group">
              <div className="p-4 sm:p-5 pb-0">
                <div className="rounded-xl overflow-hidden">
                  <img src={t.image} alt="" className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col gap-2">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy">{t.title}</h3>
                <p className="text-slate-blue text-sm sm:text-base leading-relaxed">{t.body}</p>
                <span className={`mt-auto pt-3 inline-flex items-center font-bold text-sm ${t.linkClass}`}>
                  {t.link}
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ How it works ============ */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28" aria-labelledby="how-it-works-title">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">How it works</span>
          <h2 id="how-it-works-title" className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">Four simple steps</h2>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <li key={step.num} className="glass rounded-2xl overflow-hidden flex flex-col">
              <div className="p-3 pb-0">
                <div className="relative rounded-xl overflow-hidden bg-white/60 aspect-[9/10]">
                  <img src={step.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute top-3 left-3 w-9 h-9 rounded-full bg-royal text-white font-heading font-extrabold flex items-center justify-center shadow-premium">
                    {step.num}
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-1.5">
                <h3 className="text-lg font-heading font-bold text-navy">{step.title}</h3>
                <p className="text-sm text-slate-blue leading-relaxed">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-center text-sm text-slate-blue max-w-2xl mx-auto">
          QvikLoan has no active lending partner today, so steps 3 and 4 start only once a lender is listed on our{' '}
          <Link to="/participating-lenders" className="text-royal font-semibold underline">Lending Partners</Link> page and you agree.
        </p>
      </section>

      <GlassLoanEnquirySection />

      {/* ============ FAQ ============ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="faq-title">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-2">Questions</span>
          <h2 id="faq-title" className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">Good to know</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group glass rounded-2xl px-5 sm:px-6 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-base font-heading font-bold text-navy">
                {faq.q}
                <ChevronDown className="w-5 h-5 text-royal shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-sm sm:text-[15px] text-slate-blue leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-blue">
          A complaint? Use our{' '}
          <Link to="/grievance-redressal" className="text-royal font-semibold underline">Grievance Redressal</Link> page.
        </p>
      </section>

      <LoanDisclosure product="personal" />
    </div>
  );
}
