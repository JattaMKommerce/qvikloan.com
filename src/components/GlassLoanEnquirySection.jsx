import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Lock, AlertCircle, Building2, User, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CtaDisclaimer from './CtaDisclaimer';
import { companyInfo } from '../data/companyInfo';
import { loanProducts, enquiryRules } from '../data/loanProducts';
import { formatINR } from '../lib/emi';
import { submitLead } from '../lib/lead';

const { minAge, maxAge, minMonthlyIncome } = enquiryRules;

// The consent wording shown next to each checkbox. The exact text and its version are stored with
// every lead as the consent record, so change CONSENT_VERSION whenever the wording changes.
const CONSENT_VERSION = '2026-11-05.4';
const TERMS_CONSENT = 'I have read and agree to the Privacy Policy and Terms & Conditions.';
const CONTACT_CONSENT = 'I consent to QvikLoan contacting me about my enquiry by call, SMS and WhatsApp. I understand QvikLoan is not a lender and does not share my enquiry with any lender without my fresh consent.';
const FUTURE_SHARING_CONSENT = 'I understand that QvikLoan will only share my details with a lender listed on its Lending Partners page, and only after taking my fresh consent.';
const MARKETING_TEXT = 'Optional: Send me information about other loan products from QvikLoan by SMS, WhatsApp or email. I can withdraw this at any time.';

const EMPTY_FORM = { fullName: '', mobileNumber: '', age: '', city: '', employmentType: 'salaried', monthlyIncome: '' };
const NO_CONSENTS = { terms: false, contact: false, futureSharing: false };

const inputClass =
  'w-full px-4 py-2.5 rounded-xl border border-neutral-border bg-white/90 text-navy text-sm focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition';
const labelClass = 'block text-xs font-bold text-navy mb-1.5';
const checkboxClass = 'mt-1 h-4 w-4 rounded border-neutral-border text-royal focus:ring-royal cursor-pointer flex-shrink-0';

// Why each detail is asked for (shown in the "Why we ask" panel under the form fields).
const FIELD_PURPOSES = [
  ['Full name and mobile number', 'To identify you and call you about this enquiry.'],
  ['Age', `QvikLoan accepts enquiries from people aged ${minAge} to ${maxAge}.`],
  ['City', 'Lenders lend only in certain locations.'],
  ['Loan type and amount', 'To understand what you are looking for.'],
  ['Employment type and monthly income', 'To understand your requirement and explain suitable options.'],
];

export default function GlassLoanEnquirySection({ initialType = 'personal' }) {
  const location = useLocation();
  const [loanType, setLoanType] = useState(location.state?.loanType || initialType);
  const range = loanProducts[loanType].enquiryRange;
  const [amount, setAmount] = useState(range.default);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [consents, setConsents] = useState(NO_CONSENTS);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [enquiryRef, setEnquiryRef] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // Hidden "website" field: people never see it, spam bots fill it in.
  const [honeypot, setHoneypot] = useState('');

  const switchLoanType = (type) => {
    setLoanType(type);
    setAmount(loanProducts[type].enquiryRange.default);
  };

  // The hero buttons ("Explore personal / business loans") and the hero enquiry card link here
  // with a loan type (and, from the card, an amount); switch the form to match each time.
  useEffect(() => {
    const requested = location.state?.loanType;
    if (requested === 'personal' || requested === 'business') {
      switchLoanType(requested);
      const r = loanProducts[requested].enquiryRange;
      const requestedAmount = Number(location.state?.amount);
      if (requestedAmount >= r.min && requestedAmount <= r.max) {
        setAmount(Math.round(requestedAmount / r.step) * r.step);
      }
    }
  }, [location.key]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setErrorMessage('');

    const age = Number(formData.age);
    const monthlyIncome = Number(formData.monthlyIncome.replace(/[^\d]/g, ''));

    if (formData.fullName.trim().length < 2) {
      setErrorMessage('Please enter your full name as per official records.');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number.');
      return;
    }
    if (!Number.isInteger(age) || age < minAge || age > maxAge) {
      setErrorMessage(`QvikLoan currently accepts enquiries from people aged ${minAge} to ${maxAge}.`);
      return;
    }
    if (!formData.city.trim()) {
      setErrorMessage('Please enter your city.');
      return;
    }
    if (monthlyIncome < minMonthlyIncome) {
      setErrorMessage(`QvikLoan currently accepts enquiries with a monthly income of ${formatINR(minMonthlyIncome)} or more.`);
      return;
    }
    if (!consents.terms || !consents.contact || !consents.futureSharing) {
      setErrorMessage('Please tick all three required boxes so we can process your enquiry.');
      return;
    }

    setSubmitting(true);
    try {
      // Sent to /api/lead.php, which forwards the lead to iamkratu.ai.
      const reference = await submitLead({
        fullName: formData.fullName,
        mobileNumber: formData.mobileNumber.replace(/\D/g, ''),
        age,
        city: formData.city,
        employmentType: formData.employmentType,
        monthlyIncome,
        loanType,
        amount,
        consent: true,
        consentText: [TERMS_CONSENT, CONTACT_CONSENT, FUTURE_SHARING_CONSENT, ...(marketingConsent ? [MARKETING_TEXT] : [])].join('\n'),
        consentVersion: CONSENT_VERSION,
        marketingConsent,
        website: honeypot,
      });
      setEnquiryRef(reference);
      setSubmitted(true);
    } catch (err) {
      setErrorMessage(
        err.retryable
          ? `${err.message} You can also call or WhatsApp us on ${companyInfo.phone}.`
          : err.message
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setEnquiryRef('');
    setFormData(EMPTY_FORM);
    setConsents(NO_CONSENTS);
    setMarketingConsent(false);
  };

  return (
    <section id="enquiry-section" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white/20 backdrop-blur-sm border-y border-white/70">
      
      {/* ==================================================
          END-TO-END SEAMLESS GEOMETRIC ART LAYER
          Matches exact design from CEO/user attachment:
          - Amber Yellow arc
          - Emerald Green curved quarter-donut
          - Coral Red semi-circle
          - Cyan-Blue thick hollow ring
          - Purple solid circle
          Spanning all the way from top to bottom seamlessly!
          ================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        
        {/* Subtle background base grid */}
        <div 
          className="absolute inset-0 opacity-[0.35]" 
          style={{
            backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }} 
        />

        {/* --- TOP ZONE GEOMETRIC SHAPES --- */}
        {/* Top-Left: Amber Yellow Arc */}
        <svg className="absolute -top-4 -left-6 w-36 h-36" viewBox="0 0 140 140" fill="none">
          <path d="M 15 110 A 55 55 0 0 1 15 30" stroke="#F59E0B" strokeWidth="22" strokeLinecap="round" />
        </svg>

        {/* Top-Center: Green Curved Quarter-Donut Arc */}
        <svg className="absolute top-6 left-1/2 -translate-x-12 w-32 h-32" viewBox="0 0 120 120" fill="none">
          <path d="M 25 95 A 65 65 0 0 1 95 25" stroke="#10B981" strokeWidth="28" strokeLinecap="square" />
        </svg>

        {/* Top-Right: Coral Red Semi-Circle */}
        <svg className="absolute top-12 right-[18%] w-24 h-24" viewBox="0 0 100 100" fill="none">
          <path d="M 15 65 A 35 35 0 0 1 85 65 Z" fill="#EF4444" />
        </svg>

        {/* Top-Right Edge: Giant Cyan-Blue Ring */}
        <svg className="absolute -top-10 -right-14 w-60 h-60" viewBox="0 0 240 240" fill="none">
          <circle cx="120" cy="120" r="80" stroke="#0284C7" strokeWidth="38" />
        </svg>


        {/* --- MID-UPPER ZONE (Behind category switch & slider) --- */}
        {/* Left Mid: Purple Solid Circle */}
        <svg className="absolute top-[28%] left-8 w-16 h-16" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="22" fill="#8B5CF6" />
        </svg>

        {/* Right Mid: Amber Yellow Ring */}
        <svg className="absolute top-[32%] -right-8 w-44 h-44" viewBox="0 0 160 160" fill="none">
          <circle cx="80" cy="80" r="50" stroke="#F59E0B" strokeWidth="20" strokeDasharray="140 70" />
        </svg>

        {/* Center-Left subtle floating ring under glass */}
        <svg className="absolute top-[38%] left-[16%] w-28 h-28 opacity-70" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="32" stroke="#0284C7" strokeWidth="14" />
        </svg>


        {/* --- MID-LOWER ZONE (Behind form fields & inputs) --- */}
        {/* Left: Green Curved Quarter Donut */}
        <svg className="absolute top-[52%] -left-10 w-44 h-44" viewBox="0 0 160 160" fill="none">
          <path d="M 30 130 A 80 80 0 0 1 130 30" stroke="#10B981" strokeWidth="30" strokeLinecap="round" />
        </svg>

        {/* Center-Right: Coral Red Semi-Circle under glass */}
        <svg className="absolute top-[56%] right-[20%] w-20 h-20 opacity-75" viewBox="0 0 100 100" fill="none">
          <path d="M 15 65 A 35 35 0 0 1 85 65 Z" fill="#EF4444" />
        </svg>

        {/* Right Mid-Lower: Cyan-Blue Ring */}
        <svg className="absolute top-[62%] -right-10 w-48 h-48" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="65" stroke="#0284C7" strokeWidth="32" />
        </svg>


        {/* --- BOTTOM ZONE (Behind submit button, consent & disclosures) --- */}
        {/* Bottom-Left: Purple Solid Circle */}
        <svg className="absolute bottom-28 left-10 w-16 h-16" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="22" fill="#8B5CF6" />
        </svg>

        {/* Bottom-Left: Yellow Ring Arc */}
        <svg className="absolute -bottom-6 -left-6 w-36 h-36" viewBox="0 0 140 140" fill="none">
          <circle cx="70" cy="70" r="45" stroke="#F59E0B" strokeWidth="20" />
        </svg>

        {/* Bottom-Center: Green Arc Accent */}
        <svg className="absolute bottom-6 left-1/3 w-28 h-28" viewBox="0 0 100 100" fill="none">
          <path d="M 20 80 A 50 50 0 0 1 80 20" stroke="#10B981" strokeWidth="18" strokeLinecap="round" />
        </svg>

        {/* Bottom-Right: Coral Semi-Circle */}
        <svg className="absolute bottom-20 right-[15%] w-20 h-20" viewBox="0 0 100 100" fill="none">
          <path d="M 15 65 A 35 35 0 0 1 85 65 Z" fill="#EF4444" />
        </svg>

        {/* Bottom-Right: Cyan Ring Anchor */}
        <svg className="absolute -bottom-10 -right-8 w-52 h-52" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="70" stroke="#0284C7" strokeWidth="30" />
        </svg>
      </div>

      {/* Main Glassmorphic Container Content */}
      <div className="relative max-w-4xl mx-auto z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-royal/20 text-royal text-xs font-bold tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-royal" aria-hidden="true" />
            <span>Digital Loan Facilitation Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy tracking-tight">
            Start Your Loan Enquiry
          </h2>
          <p className="text-sm sm:text-base text-slate-blue leading-relaxed">
            Tell us what you need and our team will call you. We share your enquiry with a lender only if you agree.
          </p>
        </div>

        {/* True Frosted Glassmorphic Box */}
        <div className="backdrop-blur-2xl bg-white/75 rounded-3xl border border-white/90 shadow-[0_25px_60px_-15px_rgba(20,36,58,0.12)] p-6 sm:p-10 transition-all">

          {submitted ? (
            /* Success confirmation screen */
            <div role="status" className="text-center py-8 space-y-5">
              <div className="w-16 h-16 bg-teal-soft text-teal-dark mx-auto rounded-full flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy">
                Thank you!
              </h3>
              <p className="text-sm text-slate-blue max-w-md mx-auto">
                Our team will contact you within 24 working hours. Your Reference ID is{' '}
                <strong className="text-navy font-semibold">{enquiryRef}</strong>. Do not share your OTP with anyone.
              </p>

              <div className="backdrop-blur-md bg-white/80 rounded-2xl p-5 text-left border border-white text-sm text-neutral-text space-y-2 max-w-lg mx-auto shadow-sm">
                <div className="font-semibold text-navy flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-dark" aria-hidden="true" />
                  What happens next?
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-blue">
                  <li>We share your enquiry only with a lender listed on our Lending Partners page, and only after you give fresh consent.</li>
                  <li>Any future offer must come with the lender's Key Facts Statement (KFS). You can accept or decline it.</li>
                  <li>QvikLoan will never ask you for an upfront fee, an OTP or your banking password.</li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-royal text-white text-sm font-bold shadow-subtle hover:bg-royal-hover transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            /* Loan Enquiry Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-7">

              {/* Spam trap: hidden from people and screen readers, bots fill it in */}
              <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                <label>
                  Website
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </label>
              </div>

              {/* Loan Category Selector Tabs */}
              <fieldset>
                <legend className="block text-xs font-bold text-neutral-muted uppercase tracking-wider mb-2.5">
                  Loan Type
                </legend>
                <div className="grid grid-cols-2 gap-3">
                  {[['personal', 'Personal Loan', User], ['business', 'Business Loan', Building2]].map(([type, text, Icon]) => (
                    <button
                      key={type}
                      type="button"
                      aria-pressed={loanType === type}
                      onClick={() => switchLoanType(type)}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all border ${
                        loanType === type
                          ? 'bg-royal text-white border-royal shadow-subtle'
                          : 'bg-white/80 hover:bg-white text-navy border-neutral-border'
                      }`}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                      <span>{text}</span>
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Desired Amount Interactive Slider */}
              <div className="space-y-3 bg-white/70 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-white">
                <div className="flex justify-between items-center">
                  <label htmlFor="enq-amount" className="text-xs font-bold text-neutral-muted uppercase tracking-wider">
                    Loan Amount Needed
                  </label>
                  <span className="text-xl sm:text-2xl font-heading font-extrabold text-navy" aria-hidden="true">
                    ₹{amount.toLocaleString('en-IN')}
                  </span>
                </div>

                <input
                  id="enq-amount"
                  type="range"
                  min={range.min}
                  max={range.max}
                  step={range.step}
                  value={amount}
                  aria-valuetext={`₹${amount.toLocaleString('en-IN')}`}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-border rounded-lg appearance-none cursor-pointer accent-royal"
                />

                <div className="flex justify-between text-xs text-neutral-muted">
                  <span>₹{range.min.toLocaleString('en-IN')}</span>
                  <span>₹{range.max.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-xs text-neutral-muted">
                  This is the range you can enquire about here. The amount you can borrow is decided by the lender.
                </p>
              </div>

              {/* Form Input Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label htmlFor="enq-fullName" className={labelClass}>Full Name *</label>
                  <input id="enq-fullName" type="text" name="fullName" autoComplete="name" required value={formData.fullName} onChange={handleInputChange} placeholder="e.g. Rahul Sharma" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="enq-mobile" className={labelClass}>Mobile Number *</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-sm text-neutral-muted font-medium" aria-hidden="true">+91</span>
                    <input id="enq-mobile" type="tel" name="mobileNumber" inputMode="numeric" autoComplete="tel-national" required maxLength="10" value={formData.mobileNumber} onChange={handleInputChange} placeholder="9876543210" className={`${inputClass} pl-12`} />
                  </div>
                </div>

                <div>
                  <label htmlFor="enq-age" className={labelClass}>Age *</label>
                  <input id="enq-age" type="text" name="age" inputMode="numeric" required maxLength="2" value={formData.age} onChange={handleInputChange} placeholder={`${minAge} to ${maxAge}`} className={inputClass} />
                </div>

                <div>
                  <label htmlFor="enq-city" className={labelClass}>City *</label>
                  <input id="enq-city" type="text" name="city" autoComplete="address-level2" required value={formData.city} onChange={handleInputChange} placeholder="e.g. Mumbai" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="enq-employment" className={labelClass}>Employment Type *</label>
                  <select id="enq-employment" name="employmentType" value={formData.employmentType} onChange={handleInputChange} className={inputClass}>
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self-Employed</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="enq-income" className={labelClass}>Monthly Income (₹) *</label>
                  <input id="enq-income" type="text" name="monthlyIncome" inputMode="numeric" required maxLength="12" value={formData.monthlyIncome} onChange={handleInputChange} placeholder="e.g. 40000" className={inputClass} />
                </div>
              </div>

              {/* How the details are used: always visible summary + field-by-field reasons */}
              <div className="rounded-2xl border border-neutral-border bg-white/85 p-4 sm:p-5 text-sm text-slate-blue space-y-3">
                <p className="font-semibold text-navy">How we use these details</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>{companyInfo.name} (QvikLoan) uses them to understand your requirement and contact you about it.</li>
                  <li>We share them only with a lender listed on our <Link to="/participating-lenders" className="text-royal font-semibold underline">Lending Partners</Link> page, and only after taking your fresh consent.</li>
                  <li>We keep enquiry records {companyInfo.dataRetention}. You can ask us to delete them or withdraw consent at any time: email <a href={`mailto:${companyInfo.email}`} className="text-royal font-semibold underline">{companyInfo.email}</a>.</li>
                </ul>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-royal hover:underline">Why we ask for each detail</summary>
                  <dl className="mt-3 space-y-2">
                    {FIELD_PURPOSES.map(([field, reason]) => (
                      <div key={field} className="grid grid-cols-1 sm:grid-cols-[40%_1fr] gap-x-4">
                        <dt className="font-semibold text-navy">{field}</dt>
                        <dd>{reason}</dd>
                      </div>
                    ))}
                  </dl>
                </details>
              </div>

              {/* Consent: three required for the service, one optional for marketing. None is pre-ticked. */}
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={consents.terms} onChange={(e) => setConsents(prev => ({ ...prev, terms: e.target.checked }))} className={checkboxClass} />
                  <span className="text-sm text-slate-blue leading-relaxed">
                    I have read and agree to the{' '}
                    <Link to="/privacy-policy" className="text-royal font-semibold underline">Privacy Policy</Link> and{' '}
                    <Link to="/terms-and-conditions" className="text-royal font-semibold underline">Terms &amp; Conditions</Link>. *
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={consents.contact} onChange={(e) => setConsents(prev => ({ ...prev, contact: e.target.checked }))} className={checkboxClass} />
                  <span className="text-sm text-slate-blue leading-relaxed">{CONTACT_CONSENT} *</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={consents.futureSharing} onChange={(e) => setConsents(prev => ({ ...prev, futureSharing: e.target.checked }))} className={checkboxClass} />
                  <span className="text-sm text-slate-blue leading-relaxed">{FUTURE_SHARING_CONSENT} *</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={marketingConsent} onChange={(e) => setMarketingConsent(e.target.checked)} className={checkboxClass} />
                  <span className="text-sm text-slate-blue leading-relaxed">{MARKETING_TEXT}</span>
                </label>
              </div>

              {/* Submit Button (errors show right above it, where the visitor is looking) */}
              <div className="space-y-4">
                {errorMessage && (
                  <div role="alert" className="p-4 rounded-xl bg-red-50/90 border border-red-200 text-red-700 text-sm flex items-start gap-2.5 shadow-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" aria-hidden="true" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-6 rounded-xl bg-royal hover:bg-royal-hover text-white font-heading font-bold text-base shadow-subtle hover:shadow-premium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {submitting ? (
                    <span>Sending your enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Loan Enquiry</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>
                <p className="text-[13px] text-slate-blue text-center leading-relaxed">
                  By submitting, you confirm you are aged {minAge} to {maxAge} and an Indian resident. No lender will receive
                  your details unless you give fresh consent. QvikLoan does not fetch your credit report; a lender that
                  reviews your enquiry may do so.
                </p>
                <CtaDisclaimer className="text-center" />
              </div>

              <div className="pt-4 border-t border-neutral-border/80 flex items-start gap-2 text-xs text-neutral-muted leading-relaxed">
                <Lock className="w-3.5 h-3.5 mt-0.5 text-teal-dark flex-shrink-0" aria-hidden="true" />
                <span>
                  Sent over an encrypted (HTTPS) connection | No obligation to accept any offer | We do not ask for PAN,
                  Aadhaar, bank details or documents here, and we do not send the contents of this form to advertising or
                  analytics platforms.
                </span>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}
