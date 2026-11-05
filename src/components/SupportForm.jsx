import React, { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';
import { submitSupportMessage } from '../lib/lead';
import { companyInfo } from '../data/companyInfo';

// Category keys must match $categories in public/api/contact.php.
const CATEGORIES = {
  contact: [
    ['general', 'General question'],
    ['enquiry-status', 'Status of my loan enquiry'],
    ['partnership', 'Lender or business partnership'],
    ['other', 'Other'],
  ],
  grievance: [
    ['enquiry-handling', 'How my enquiry was handled'],
    ['data-privacy', 'Personal data, consent or data deletion'],
    ['unsolicited-contact', 'Unwanted calls or messages'],
    ['lender-conduct', 'Conduct of a lender or its agent'],
    ['fraud', 'Suspected fraud or impersonation of QvikLoan'],
    ['other', 'Other complaint'],
  ],
};

const EMPTY = { name: '', email: '', phone: '', enquiryRef: '', category: '', message: '' };

const inputClass =
  'w-full px-3.5 py-2.5 rounded-xl border border-neutral-border bg-white text-navy text-sm focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition';
const labelClass = 'block text-sm font-semibold text-navy mb-1.5';

/** Contact Us form (kind="contact") or grievance form (kind="grievance"); both go to api/contact.php. */
export default function SupportForm({ kind }) {
  const isGrievance = kind === 'grievance';
  const uid = useId();
  const id = (name) => `${uid}-${name}`;

  const [fields, setFields] = useState(EMPTY);
  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [reference, setReference] = useState('');
  const [error, setError] = useState('');

  const update = (e) => setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setError('');

    const phone = fields.phone.replace(/\D/g, '');
    if (fields.name.trim().length < 2) return setError('Please enter your name.');
    if (!/^\S+@\S+\.\S+$/.test(fields.email.trim())) return setError('Please enter a valid email address.');
    if ((isGrievance || phone) && !/^[6-9]\d{9}$/.test(phone)) return setError('Please enter a valid 10-digit mobile number.');
    if (!fields.category) return setError('Please choose what your message is about.');
    if (fields.message.trim().length < 10) return setError('Please describe your question or complaint in a little more detail.');

    setSubmitting(true);
    try {
      const ref = await submitSupportMessage({ ...fields, phone, kind, website: honeypot });
      setReference(ref);
      setFields(EMPTY);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (reference) {
    return (
      <div role="status" className="bg-teal-soft border border-teal-accent/30 rounded-xl p-6 text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-teal-dark mx-auto" aria-hidden="true" />
        <h3 className="text-lg font-heading font-bold text-navy">
          {isGrievance ? 'Your complaint has been sent' : 'Your message has been sent'}
        </h3>
        <p className="text-sm text-slate-blue">
          Your reference number is <strong className="font-mono text-navy">{reference}</strong>. Please quote it in any follow-up.{' '}
          {isGrievance
            ? `Our support team aims to resolve complaints ${companyInfo.grievanceTimelines.support}. If it does not, Grievance Officer ${companyInfo.grievanceOfficer.name} aims to resolve them ${companyInfo.grievanceTimelines.officer}.`
            : `We reply during business hours (${companyInfo.operatingHours}).`}
        </p>
        <button
          type="button"
          onClick={() => setReference('')}
          className="px-4 py-2 bg-royal text-white rounded-xl text-sm font-semibold hover:bg-royal-hover transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Spam trap: hidden from people and screen readers, bots fill it in */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={id('name')} className={labelClass}>Full name *</label>
          <input id={id('name')} name="name" type="text" autoComplete="name" required value={fields.name} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor={id('email')} className={labelClass}>Email address *</label>
          <input id={id('email')} name="email" type="email" autoComplete="email" required value={fields.email} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor={id('phone')} className={labelClass}>Mobile number {isGrievance ? '*' : '(optional)'}</label>
          <input id={id('phone')} name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" maxLength={10} required={isGrievance} value={fields.phone} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor={id('enquiryRef')} className={labelClass}>Enquiry reference (if you have one)</label>
          <input id={id('enquiryRef')} name="enquiryRef" type="text" maxLength={40} placeholder="e.g. QVK-261104-0123" value={fields.enquiryRef} onChange={update} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor={id('category')} className={labelClass}>What is this about? *</label>
        <select id={id('category')} name="category" required value={fields.category} onChange={update} className={inputClass}>
          <option value="">Select</option>
          {CATEGORIES[kind].map(([value, text]) => (
            <option key={value} value={value}>{text}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={id('message')} className={labelClass}>{isGrievance ? 'Describe your complaint *' : 'Your message *'}</label>
        <textarea
          id={id('message')}
          name="message"
          rows={5}
          required
          maxLength={4000}
          value={fields.message}
          onChange={update}
          placeholder={isGrievance ? 'What happened, when, and what outcome you are asking for.' : ''}
          className={inputClass}
        />
        <p className="mt-1 text-xs text-neutral-muted">
          Please do not include PAN, Aadhaar, bank account numbers, card details, passwords or OTPs.
        </p>
      </div>

      <p className="text-xs text-slate-blue leading-relaxed bg-neutral-bg border border-neutral-border rounded-xl p-3.5">
        <strong className="text-navy">How we use these details:</strong> {companyInfo.name} uses them only to
        {isGrievance
          ? ' investigate and respond to your complaint, and keeps a record of it in its grievance register. If your complaint is about a lender, we may share it with that lender so it can respond.'
          : ' reply to your message.'}{' '}
        They are not used for marketing. See our <Link to="/privacy-policy" className="text-royal font-semibold underline">Privacy Policy</Link>.
      </p>

      {error && (
        <div role="alert" className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="px-6 py-3 bg-royal hover:bg-royal-hover text-white rounded-xl font-bold text-sm transition-colors inline-flex items-center gap-2 disabled:opacity-60"
      >
        <Send className="w-4 h-4" aria-hidden="true" />
        <span>{submitting ? 'Sending...' : isGrievance ? 'Submit complaint' : 'Send message'}</span>
      </button>
    </form>
  );
}
