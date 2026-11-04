import React, { useState } from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle, Send, ExternalLink } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function GrievanceRedressalPage() {
  const [ticketData, setTicketData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryRef: '',
    category: 'enquiry-status',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = `GRV-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(id);
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-soft text-royal text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Customer Protection & Fair Practices
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">
            Grievance Redressal Mechanism
          </h1>
          <p className="text-sm text-slate-blue leading-relaxed">
            QvikLoan and Jatta M Kommerce Private Limited are dedicated to prompt and transparent dispute resolution. We maintain a structured, multi-tier escalation framework in accordance with regulatory best practices.
          </p>
        </div>
      </section>

      {/* Escalation Matrix */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-navy">
              Three-Tier Escalation Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-blue mt-1">
              Please follow the structured sequence below to ensure your query is tracked and resolved systematically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Level 1 */}
            <div className="bg-white rounded-card border border-neutral-border p-6 shadow-subtle space-y-4">
              <div className="w-10 h-10 rounded-xl bg-royal-soft text-royal font-bold flex items-center justify-center font-heading">
                01
              </div>
              <h3 className="text-lg font-heading font-bold text-navy">
                Level 1: Support Desk
              </h3>
              <p className="text-xs text-slate-blue leading-relaxed">
                For standard queries regarding enquiry submissions, platform usage, or participating lenders.
              </p>
              <div className="pt-2 border-t border-neutral-border text-xs space-y-1.5 text-neutral-text">
                <div><strong>Email:</strong> {companyInfo.email}</div>
                <div><strong>Phone:</strong> {companyInfo.phone}</div>
                <div className="text-teal-dark font-semibold">Turnaround: Within 48 hours</div>
              </div>
            </div>

            {/* Level 2 */}
            <div className="bg-white rounded-card border-2 border-royal p-6 shadow-subtle space-y-4 relative">
              <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-royal text-white text-[10px] font-bold tracking-wider uppercase">
                Designated Officer
              </span>
              <div className="w-10 h-10 rounded-xl bg-navy text-white font-bold flex items-center justify-center font-heading">
                02
              </div>
              <h3 className="text-lg font-heading font-bold text-navy">
                Level 2: Nodal Officer
              </h3>
              <p className="text-xs text-slate-blue leading-relaxed">
                If your issue remains unresolved after 7 business days, escalate to our Principal Grievance Officer.
              </p>
              <div className="pt-2 border-t border-neutral-border text-xs space-y-1.5 text-neutral-text">
                <div><strong>Officer:</strong> {companyInfo.grievanceOfficer.name}</div>
                <div><strong>Email:</strong> {companyInfo.grievanceOfficer.email}</div>
                <div><strong>Phone:</strong> {companyInfo.grievanceOfficer.directPhone}</div>
                <div className="text-royal font-semibold">Resolution: Within 14 working days</div>
              </div>
            </div>

            {/* Level 3 */}
            <div className="bg-white rounded-card border border-neutral-border p-6 shadow-subtle space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-soft text-teal-dark font-bold flex items-center justify-center font-heading">
                03
              </div>
              <h3 className="text-lg font-heading font-bold text-navy">
                Level 3: Regulatory Body
              </h3>
              <p className="text-xs text-slate-blue leading-relaxed">
                If the dispute relates directly to a regulated lender and is not settled within 30 days, file with RBI.
              </p>
              <div className="pt-2 border-t border-neutral-border text-xs space-y-1.5 text-neutral-text">
                <div><strong>Portal:</strong> RBI CMS Portal</div>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-royal font-semibold hover:underline flex items-center gap-1"
                >
                  <span>cms.rbi.org.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <div className="text-neutral-muted">RBI Banking Ombudsman</div>
              </div>
            </div>

          </div>

          {/* Detailed Nodal Officer Particulars Box */}
          <div className="bg-white rounded-card-lg border border-neutral-border p-8 shadow-subtle space-y-5">
            <h3 className="text-xl font-heading font-bold text-navy flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-royal" />
              <span>Nodal Grievance Redressal Officer Particulars</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-blue leading-relaxed">
              In accordance with the regulatory stipulations for digital lending platforms, the complete contact coordinates of our designated Grievance Officer are published below:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm bg-neutral-bg p-5 rounded-xl border border-neutral-border">
              <div>
                <span className="text-neutral-muted block mb-0.5">Full Name</span>
                <span className="font-bold text-navy">{companyInfo.grievanceOfficer.name}</span>
              </div>
              <div>
                <span className="text-neutral-muted block mb-0.5">Designation</span>
                <span className="font-bold text-navy">{companyInfo.grievanceOfficer.designation}</span>
              </div>
              <div>
                <span className="text-neutral-muted block mb-0.5">Dedicated Grievance Email</span>
                <a href={`mailto:${companyInfo.grievanceOfficer.email}`} className="text-royal font-semibold hover:underline">
                  {companyInfo.grievanceOfficer.email}
                </a>
              </div>
              <div>
                <span className="text-neutral-muted block mb-0.5">Direct Grievance Contact Phone</span>
                <span className="font-bold text-navy">{companyInfo.grievanceOfficer.directPhone}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-neutral-muted block mb-0.5">Postal Communication Address</span>
                <span className="text-navy font-medium">{companyInfo.grievanceOfficer.address}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-neutral-muted block mb-0.5">Working Hours & Availability</span>
                <span className="text-navy">{companyInfo.operatingHours} (Excluding Public & Bank Holidays)</span>
              </div>
            </div>
          </div>

          {/* Interactive Grievance Filing Form */}
          <div className="bg-white rounded-card-lg border border-neutral-border p-8 shadow-subtle space-y-6">
            <h3 className="text-xl font-heading font-bold text-navy">
              Submit a Grievance or Dispute Online
            </h3>
            <p className="text-xs sm:text-sm text-slate-blue">
              Fill out the form below to register a formal ticket directly with our compliance desk. You will receive an acknowledgment with a tracking reference.
            </p>

            {submitted ? (
              <div className="bg-teal-soft border border-teal-accent/30 rounded-xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-teal-dark mx-auto" />
                <h4 className="text-lg font-heading font-bold text-navy">
                  Grievance Registered Successfully
                </h4>
                <p className="text-xs sm:text-sm text-slate-blue">
                  Your ticket reference number is <strong className="font-mono text-navy">{ticketId}</strong>.
                  Our Grievance Redressal team will acknowledge receipt within 48 hours and provide a detailed update.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-royal text-white rounded-xl text-xs font-semibold hover:bg-royal-hover transition-colors"
                >
                  Submit Another Ticket
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-neutral-text mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={ticketData.name}
                      onChange={(e) => setTicketData({ ...ticketData, name: e.target.value })}
                      placeholder="e.g. Amit Patel"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border focus:border-royal outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-neutral-text mb-1">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={ticketData.email}
                      onChange={(e) => setTicketData({ ...ticketData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border focus:border-royal outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-neutral-text mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={ticketData.phone}
                      onChange={(e) => setTicketData({ ...ticketData, phone: e.target.value })}
                      placeholder="9876543210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border focus:border-royal outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-neutral-text mb-1">Enquiry Reference ID (if available)</label>
                    <input
                      type="text"
                      value={ticketData.enquiryRef}
                      onChange={(e) => setTicketData({ ...ticketData, enquiryRef: e.target.value })}
                      placeholder="e.g. QVK-123456"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border focus:border-royal outline-none"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block font-semibold text-neutral-text mb-1">Nature of Grievance *</label>
                  <select
                    value={ticketData.category}
                    onChange={(e) => setTicketData({ ...ticketData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border focus:border-royal outline-none bg-white"
                  >
                    <option value="enquiry-status">Enquiry Routing & Status Issue</option>
                    <option value="data-privacy">Data Privacy & Consent Inquiry</option>
                    <option value="unsolicited-calls">Unsolicited Contact or Reporting</option>
                    <option value="partner-lender">Participating Lender Conduct Concern</option>
                    <option value="other">Other Dispute or Clarification</option>
                  </select>
                </div>

                <div className="text-xs">
                  <label className="block font-semibold text-neutral-text mb-1">Detailed Description *</label>
                  <textarea
                    rows={4}
                    required
                    value={ticketData.details}
                    onChange={(e) => setTicketData({ ...ticketData, details: e.target.value })}
                    placeholder="Please explain your grievance clearly with relevant dates and specifics..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border focus:border-royal outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-navy hover:bg-slate-blue text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Register Formal Grievance</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
