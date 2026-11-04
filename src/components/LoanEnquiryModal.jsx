import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Lock, AlertCircle, Building2, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/companyInfo';

export default function LoanEnquiryModal({ isOpen, onClose, initialType = 'personal' }) {
  const [loanType, setLoanType] = useState(initialType);
  const [amount, setAmount] = useState(loanType === 'personal' ? 300000 : 1000000);
  const [tenure, setTenure] = useState(36);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    city: '',
    purpose: '',
    employmentType: 'salaried',
    annualIncome: '',
  });
  const [consentGiven, setConsentGiven] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [enquiryRef, setEnquiryRef] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
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

    // Simulate reliable API integration
    setTimeout(() => {
      setSubmitting(false);
      const generatedRef = `QVK-${Math.floor(100000 + Math.random() * 900000)}`;
      setEnquiryRef(generatedRef);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEnquiryRef('');
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-card-lg shadow-2xl border border-neutral-border overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-navy text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-royal/20 rounded-lg text-teal-accent">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold">Online Loan Enquiry</h3>
              <p className="text-xs text-slate-300">
                Operated by {companyInfo.name}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            /* Success confirmation */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-teal-soft text-teal-dark mx-auto rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-heading font-bold text-navy">
                Enquiry Received Successfully
              </h4>
              <p className="text-sm text-neutral-muted max-w-md mx-auto">
                Your enquiry reference is <strong className="text-navy font-semibold">{enquiryRef}</strong>.
                Participating lenders will evaluate your criteria and share eligible offers with complete Key Facts Statements (KFS).
              </p>

              <div className="bg-neutral-bg rounded-xl p-4 text-left border border-neutral-border text-xs text-neutral-text space-y-2 my-4">
                <div className="font-semibold text-navy flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-dark" />
                  What happens next?
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-blue">
                  <li>Participating lenders review your basic requirements.</li>
                  <li>If eligible, you will receive an offer with clear APR, EMI, and all charges.</li>
                  <li>You can review and decide whether to accept or decline. Submitting an enquiry does not obligate you.</li>
                </ul>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-royal text-white font-semibold hover:bg-royal-hover transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            /* Form view */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Loan Type Selector */}
              <div>
                <label className="block text-xs font-bold text-neutral-muted uppercase tracking-wider mb-2">
                  Select Loan Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setLoanType('personal');
                      setAmount(300000);
                    }}
                    className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-bold transition-all ${
                      loanType === 'personal'
                        ? 'border-royal bg-royal-soft text-royal shadow-sm'
                        : 'border-neutral-border hover:bg-neutral-bg text-neutral-text'
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
                    className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-bold transition-all ${
                      loanType === 'business'
                        ? 'border-royal bg-royal-soft text-royal shadow-sm'
                        : 'border-neutral-border hover:bg-neutral-bg text-neutral-text'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Business Loan</span>
                  </button>
                </div>
              </div>

              {/* Amount Selector */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-neutral-muted uppercase tracking-wider">
                    Desired Enquiry Amount
                  </label>
                  <span className="text-lg font-heading font-extrabold text-navy">
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
                <div className="flex justify-between text-[11px] text-neutral-muted mt-1 font-medium">
                  <span>{loanType === 'personal' ? '₹50,000' : '₹1,00,000'}</span>
                  <span>{loanType === 'personal' ? '₹25,00,000' : '₹50,00,000'}</span>
                </div>
              </div>

              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-text mb-1">
                    Full Name (as per PAN / Official ID) *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-border focus:border-royal focus:ring-1 focus:ring-royal outline-none"
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
                      className="w-full pl-12 pr-3.5 py-2.5 text-sm rounded-xl border border-neutral-border focus:border-royal focus:ring-1 focus:ring-royal outline-none"
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
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-border focus:border-royal focus:ring-1 focus:ring-royal outline-none"
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
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-border focus:border-royal focus:ring-1 focus:ring-royal outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-text mb-1">
                    {loanType === 'personal' ? 'Employment Status' : 'Business Structure'}
                  </label>
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-border focus:border-royal focus:ring-1 focus:ring-royal outline-none bg-white"
                  >
                    {loanType === 'personal' ? (
                      <>
                        <option value="salaried">Salaried Professional</option>
                        <option value="self-employed-prof">Self-Employed Professional</option>
                        <option value="self-employed-business">Self-Employed Non-Professional</option>
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
                    placeholder={loanType === 'personal' ? 'e.g. Home Improvement / Medical' : 'e.g. Working Capital / Inventory'}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-border focus:border-royal focus:ring-1 focus:ring-royal outline-none"
                  />
                </div>
              </div>

              {/* Data Privacy & Consent Box */}
              <div className="bg-neutral-bg p-4 rounded-xl border border-neutral-border space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-navy">
                  <Lock className="w-3.5 h-3.5 text-royal" />
                  <span>Transparent Data Usage Disclosure</span>
                </div>
                <p className="text-[12px] text-neutral-muted leading-relaxed">
                  Before collecting your information, we want you to know: QvikLoan (operated by Jatta M Kommerce Private Limited) is a loan facilitation platform. We only collect the basic contact and loan requirement details above to share them with participating RBI-registered lenders who evaluate your eligibility. We do not collect unnecessary sensitive data such as biometric information or banking passwords.
                </p>

                <label className="flex items-start gap-3 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={consentGiven}
                    onChange={(e) => setConsentGiven(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-neutral-border text-royal focus:ring-royal shrink-0"
                  />
                  <span className="text-[12px] text-neutral-text font-medium leading-relaxed">
                    I provide explicit consent for QvikLoan and Jatta M Kommerce Private Limited to share my enquiry details with participating lenders for evaluating borrowing options. I have read and agree to the{' '}
                    <Link to="/privacy-policy" target="_blank" className="text-royal font-semibold hover:underline">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link to="/terms-and-conditions" target="_blank" className="text-royal font-semibold hover:underline">
                      Terms and Conditions
                    </Link>
                    . I acknowledge that submitting an enquiry does not guarantee a loan offer or obligate me to borrow.
                  </span>
                </label>
              </div>

              {errorMessage && (
                <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submission CTA */}
              <div className="space-y-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-royal hover:bg-royal-hover disabled:bg-slate-blue text-white font-bold text-sm shadow-subtle hover:shadow-premium transition-all flex items-center justify-center gap-2"
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
    </div>
  );
}
