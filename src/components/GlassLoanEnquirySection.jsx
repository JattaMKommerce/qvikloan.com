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
      setErrorMessage('Please enter your full legal name as per official records.');
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
      setErrorMessage('Please enter your city.');
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
    <section id="enquiry-section" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F4F5F7] border-y border-neutral-border">
      
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
            <Sparkles className="w-3.5 h-3.5 text-royal" />
            <span>Digital Loan Facilitation Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy tracking-tight">
            Start Your Loan Enquiry
          </h2>
          <p className="text-sm sm:text-base text-slate-blue leading-relaxed">
            Submit your requirements directly below. QvikLoan connects you with participating RBI-registered lenders to evaluate options with a complete Key Facts Statement (KFS).
          </p>
        </div>

        {/* True Frosted Glassmorphic Box */}
        <div className="backdrop-blur-2xl bg-white/75 rounded-3xl border border-white/90 shadow-[0_25px_60px_-15px_rgba(20,36,58,0.12)] p-6 sm:p-10 transition-all">
          
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

              <div className="backdrop-blur-md bg-white/80 rounded-2xl p-5 text-left border border-white text-xs text-neutral-text space-y-2 max-w-lg mx-auto shadow-sm">
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
            <form onSubmit={handleSubmit} className="space-y-7">
              
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50/90 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5 shadow-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Loan Category Selector Tabs */}
              <div>
                <label className="block text-xs font-bold text-neutral-muted uppercase tracking-wider mb-2.5">
                  Select Loan Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setLoanType('personal');
                      setAmount(300000);
                    }}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all border ${
                      loanType === 'personal'
                        ? 'bg-royal text-white border-royal shadow-subtle'
                        : 'bg-white/80 hover:bg-white text-navy border-neutral-border'
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
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all border ${
                      loanType === 'business'
                        ? 'bg-royal text-white border-royal shadow-subtle'
                        : 'bg-white/80 hover:bg-white text-navy border-neutral-border'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Business Loan</span>
                  </button>
                </div>
              </div>

              {/* Desired Amount Interactive Slider */}
              <div className="space-y-3 bg-white/70 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-white">
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
                  min={loanType === 'personal' ? 50000 : 200000}
                  max={loanType === 'personal' ? 2500000 : 5000000}
                  step={loanType === 'personal' ? 10000 : 50000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-border rounded-lg appearance-none cursor-pointer accent-royal"
                />

                <div className="flex justify-between text-[11px] text-neutral-muted">
                  <span>Min: ₹{loanType === 'personal' ? '50,000' : '2,00,000'}</span>
                  <span>Max: ₹{loanType === 'personal' ? '25,00,000' : '50,00,000'}</span>
                </div>
              </div>

              {/* Form Input Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5">
                    Full Name (as per official ID) *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-border bg-white/90 text-navy text-sm focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5">
                    Mobile Number (for lender updates) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-sm text-neutral-muted font-medium">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="mobileNumber"
                      required
                      maxLength="10"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="9876543210"
                      className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-neutral-border bg-white/90 text-navy text-sm focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-border bg-white/90 text-navy text-sm focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition"
                  />
                </div>

                {/* City / State */}
                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5">
                    City / State *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Mumbai, Maharashtra"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-border bg-white/90 text-navy text-sm focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition"
                  />
                </div>

                {/* Employment / Business Profile */}
                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5">
                    {loanType === 'personal' ? 'Employment Type' : 'Business Entity Type'}
                  </label>
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-border bg-white/90 text-navy text-sm focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition"
                  >
                    {loanType === 'personal' ? (
                      <>
                        <option value="salaried">Salaried (Private / Govt)</option>
                        <option value="self-employed-professional">Self-Employed Professional (Doctor, CA, etc.)</option>
                        <option value="self-employed-business">Self-Employed Business Owner</option>
                      </>
                    ) : (
                      <>
                        <option value="sole-proprietorship">Sole Proprietorship</option>
                        <option value="partnership-llp">Partnership / LLP</option>
                        <option value="private-limited">Private Limited Company</option>
                      </>
                    )}
                  </select>
                </div>

                {/* Stated Purpose */}
                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5">
                    Planned Purpose (Optional)
                  </label>
                  <input
                    type="text"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    placeholder={loanType === 'personal' ? 'e.g. Home Renovation, Education' : 'e.g. Working Capital, Inventory'}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-border bg-white/90 text-navy text-sm focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition"
                  />
                </div>

              </div>

              {/* Explicit Consent & Meta Compliance Disclosures */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consentGiven}
                    onChange={(e) => setConsentGiven(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-neutral-border text-royal focus:ring-royal cursor-pointer flex-shrink-0"
                  />
                  <span className="text-xs text-slate-blue leading-relaxed">
                    I authorize QvikLoan (operated by <strong>{companyInfo.name}</strong>) to securely share my enquiry details with participating RBI-registered lenders to evaluate my eligibility for loan offers. I understand that submitting an enquiry does not guarantee a loan offer or approval, and that I will receive a Key Facts Statement (KFS) prior to accepting any agreement. I have reviewed and agree to the{' '}
                    <Link to="/privacy-policy" className="text-royal font-medium underline">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link to="/terms" className="text-royal font-medium underline">
                      Terms &amp; Conditions
                    </Link>.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-6 rounded-xl bg-royal hover:bg-royal-hover text-white font-heading font-bold text-base shadow-subtle hover:shadow-premium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {submitting ? (
                    <span>Transmitting Enquiry to Regulated Partners...</span>
                  ) : (
                    <>
                      <span>Submit Loan Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Regulatory Notice & Bottom Disclaimer */}
              <div className="pt-4 border-t border-neutral-border/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-muted">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-teal-dark flex-shrink-0" />
                  <span>256-Bit SSL Encrypted • Zero Upfront Fees Charged</span>
                </div>
                <div>
                  <span>No obligation to accept offers • Freedom to decline</span>
                </div>
              </div>

            </form>
          )}

        </div>

        {/* Regulatory Intermediary Disclosure Footer Box */}
        <div className="mt-8 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-neutral-border text-xs text-slate-blue leading-relaxed">
          <p>
            <strong>Important Facilitation Disclosures:</strong> QvikLoan is an online loan facilitation and discovery platform owned and operated by {companyInfo.name}. QvikLoan does not directly lend money, issue credit sanctions, or collect upfront facilitation fees from borrowers. Loan offers, APR (indicative range 11.99% – 36% p.a.), repayment tenure (3 to 60 months; no loans under 61 days), processing fees, and sanction decisions are determined exclusively by participating RBI-registered NBFCs and banking partners based on their underwriting policies.
          </p>
        </div>

      </div>
    </section>
  );
}
