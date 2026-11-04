import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Lock, AlertCircle, Building2, User, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/companyInfo';

export default function GlassLoanEnquirySection({ initialType = 'personal' }) {
  const [loanType, setLoanType] = useState(initialType);
  const [amount, setAmount] = useState(loanType === 'personal' ? 300000 : 1000000);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    city: '',
    purpose: '',
    employmentType: 'salaried',
  });
  const [consentGiven, setConsentGiven] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [enquiryRef, setEnquiryRef] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name as per official records.');
      return;
    }
    if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.city.trim()) {
      setErrorMessage('Please enter your city of residence or business.');
      return;
    }
    if (!consentGiven) {
      setErrorMessage('Please provide explicit consent to submit your enquiry.');
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      const generatedRef = `QVK-${Math.floor(100000 + Math.random() * 900000)}`;
      setEnquiryRef(generatedRef);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEnquiryRef('');
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      city: '',
      purpose: '',
      employmentType: 'salaried',
    });
    setConsentGiven(false);
  };

  return (
    <section id="enquiry-section" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with user-provided geometric shapes image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/enquiry-bg.jpg')` }}
      />
      {/* Subtle overlay gradient to keep text crisp and enhance glassmorphic contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-royal-soft/40 to-white/80 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-royal/20 text-royal text-xs font-bold tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-royal" />
            <span>Direct Online Facilitation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy tracking-tight">
            Start Your Loan Enquiry
          </h2>
          <p className="text-sm sm:text-base text-slate-blue leading-relaxed">
            Submit your requirements directly below. QvikLoan connects you with participating lenders to review offers with Key Facts Statements (KFS).
          </p>
        </div>

        {/* Glassmorphic Box */}
        <div className="backdrop-blur-xl bg-white/85 rounded-card-lg border border-white/70 shadow-2xl p-6 sm:p-10 transition-all">
          
          {submitted ? (
            /* Success confirmation screen */
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 bg-teal-soft text-teal-dark mx-auto rounded-full flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy">
                Enquiry Submitted Successfully
              </h3>
              <p className="text-sm text-slate-blue max-w-md mx-auto">
                Your enquiry reference is <strong className="text-navy font-semibold">{enquiryRef}</strong>.
                Participating RBI-regulated lenders will assess your criteria and share eligible offers.
              </p>

              <div className="backdrop-blur-md bg-white/70 rounded-xl p-5 text-left border border-white/80 text-xs text-neutral-text space-y-2 max-w-lg mx-auto">
                <div className="font-semibold text-navy flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-dark" />
                  What happens next?
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-blue">
                  <li>Lenders independently evaluate your request and eligibility.</li>
                  <li>Eligible offers will include a Key Facts Statement (KFS) detailing APR and EMI.</li>
                  <li>You maintain full autonomy to accept or decline any offer with zero obligation.</li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-royal text-white font-semibold hover:bg-royal-hover shadow-subtle transition-colors text-sm"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Category Selector Tabs */}
              <div>
                <label className="block text-xs font-bold text-neutral-muted uppercase tracking-wider mb-2.5">
                  Select Loan Category
                </label>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setLoanType('personal');
                      setAmount(300000);
                    }}
                    className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl border text-sm font-bold transition-all ${
                      loanType === 'personal'
                        ? 'border-royal bg-royal text-white shadow-md'
                        : 'border-white/80 bg-white/60 hover:bg-white text-neutral-text'
                    }`}
                  >
                    <User className="w-4 h-4" />
                    <span>Personal Loan</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setLoanType('business');
                      setAmount(1000000);
                    }}
                    className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl border text-sm font-bold transition-all ${
                      loanType === 'business'
                        ? 'border-royal bg-royal text-white shadow-md'
                        : 'border-white/80 bg-white/60 hover:bg-white text-neutral-text'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Business Loan</span>
                  </button>
                </div>
              </div>

              {/* Amount Slider & Display */}
              <div className="backdrop-blur-md bg-white/60 p-4 sm:p-5 rounded-xl border border-white/80 space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-neutral-muted uppercase tracking-wider">
                    Desired Enquiry Amount
                  </label>
                  <span className="text-xl sm:text-2xl font-heading font-extrabold text-navy">
                    ₹{amount.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min={loanType === 'personal' ? 50000 : 100000}
                  max={loanType === 'personal' ? 2500000 : 5000000}
                  step={loanType === 'personal' ? 25000 : 50000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-border rounded-lg appearance-none cursor-pointer accent-royal"
                />
                <div className="flex justify-between text-[11px] text-neutral-muted font-medium">
                  <span>Min: {loanType === 'personal' ? '₹50,000' : '₹1,00,000'}</span>
                  <span>Max: {loanType === 'personal' ? '₹25,00,000' : '₹50,00,000'}</span>
                </div>
              </div>

              {/* Form Input Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-text mb-1">
                    Full Name (as per official ID) *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-border/80 bg-white/90 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-text mb-1">
                    Mobile Number (for lender updates) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-sm font-medium text-neutral-muted">+91</span>
                    <input
                      type="tel"
                      name="mobileNumber"
                      maxLength={10}
                      required
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="9876543210"
                      className="w-full pl-12 pr-3.5 py-2.5 text-sm rounded-xl border border-neutral-border/80 bg-white/90 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-text mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-border/80 bg-white/90 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-text mb-1">
                    City / State *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Mumbai, Maharashtra"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-border/80 bg-white/90 focus:border-royal focus:ring-1 focus:ring-royal outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-text mb-1">
                    {loanType === 'personal' ? 'Employment Category' : 'Business Structure'}
                  </label>
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-border/80 bg-white/90 focus:border-royal focus:ring-1 focus:ring-royal outline-none"
                  >
                    {loanType === 'personal' ? (
                      <>
                        <option value="salaried">Salaried Professional</option>
                        <option value="self-employed-prof">Self-Employed Professional</option>
                        <option value="self-employed-business">Self-Employed Business / Trader</option>
                      </>
                    ) : (
                      <>
                        <option value="proprietorship">Sole Proprietorship</option>
                        <option value="partnership">Partnership / LLP</option>
                        <option value="pvt-ltd">Private Limited Company</option>
                        <option value="other">Other Registered Entity</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-text mb-1">
                    Primary Purpose of Enquiry
                  </label>
                  <input
                    type="text"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    placeholder={loanType === 'personal' ? 'e.g. Planned Personal Expense' : 'e.g. Working Capital / Inventory'}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-border/80 bg-white/90 focus:border-royal focus:ring-1 focus:ring-royal outline-none"
                  />
                </div>
              </div>

              {/* Data Transparency & Consent */}
              <div className="backdrop-blur-md bg-white/70 p-4 sm:p-5 rounded-xl border border-white/80 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-navy">
                  <Lock className="w-3.5 h-3.5 text-royal" />
                  <span>Data Usage & Explicit Consent</span>
                </div>
                <p className="text-[12px] text-neutral-muted leading-relaxed">
                  QvikLoan is operated by <strong>{companyInfo.name}</strong>. Your contact information is used strictly to connect you with participating RBI-registered lenders to assess eligibility. We do not access contacts, photos, or banking credentials.
                </p>

                <label className="flex items-start gap-3 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={consentGiven}
                    onChange={(e) => setConsentGiven(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-neutral-border text-royal focus:ring-royal shrink-0"
                  />
                  <span className="text-[12px] text-neutral-text font-medium leading-relaxed">
                    I grant explicit consent to share my enquiry details with participating lenders for evaluating loan options. I have reviewed and agree to the{' '}
                    <Link to="/privacy-policy" className="text-royal font-semibold hover:underline">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link to="/terms-and-conditions" className="text-royal font-semibold hover:underline">
                      Terms and Conditions
                    </Link>
                    . I understand submitting this enquiry does not commit me to borrow or guarantee a loan offer.
                  </span>
                </label>
              </div>

              {errorMessage && (
                <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submission Button */}
              <div className="space-y-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-6 rounded-xl bg-royal hover:bg-royal-hover disabled:bg-slate-blue text-white font-bold text-sm shadow-premium transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  {submitting ? (
                    <span>Transmitting Enquiry Securely...</span>
                  ) : (
                    <>
                      <span>Submit Loan Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-neutral-muted">
                  Submitting an enquiry does not commit you to borrowing or guarantee a loan offer.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
