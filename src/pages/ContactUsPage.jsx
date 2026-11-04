import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Building2, Send, CheckCircle2, MessageSquare, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* Header with Visual Card Graphic */}
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-soft text-royal text-xs font-semibold">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Dedicated Facilitation &amp; Support</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
                Contact QvikLoan Support
              </h1>
              <p className="text-base sm:text-lg text-slate-blue leading-relaxed">
                Have questions about loan enquiries, participating lenders, or platform disclosures? Our corporate assistance team at {companyInfo.name} is ready to help you with transparent guidance.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-neutral-muted">
                <span className="inline-flex items-center gap-1.5 text-teal-dark font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> 24–48 Hr Response
                </span>
                <span>•</span>
                <span>Direct WhatsApp Helpline</span>
                <span>•</span>
                <span>Official Grievance Officer Available</span>
              </div>
            </div>

            {/* Right Visual Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md rounded-2xl overflow-hidden border border-neutral-border shadow-premium bg-white">
                <img
                  src="/images/contact-us-hero.png"
                  alt="QvikLoan Customer Support &amp; Coordination Desk"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="backdrop-blur-md bg-white/95 rounded-card-lg border border-neutral-border p-7 sm:p-8 shadow-subtle space-y-6">
              <h2 className="text-xl font-heading font-bold text-navy">
                Corporate Coordinates
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-blue">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-royal shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-navy block">Operating Legal Entity</span>
                    <span>{companyInfo.name}</span>
                    <span className="block text-neutral-muted text-xs">CIN: {companyInfo.cin}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-dark shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-navy block">Registered Office</span>
                    <span>{companyInfo.address.registeredOffice}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-slate-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-navy block">Corporate Office</span>
                    <span>{companyInfo.address.corporateOffice}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-royal shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-navy block">General & Support Enquiries</span>
                    <a href={`mailto:${companyInfo.email}`} className="text-royal font-semibold hover:underline">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-dark shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-navy block">Helpline Number</span>
                    <a href={`tel:${companyInfo.phone}`} className="hover:underline">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-teal-dark shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-navy block">WhatsApp Support</span>
                    <a
                      href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}?text=Hi`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-accent font-semibold hover:underline"
                    >
                      {companyInfo.whatsapp} (Click to Chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-navy block">Business Hours</span>
                    <span>{companyInfo.operatingHours}</span>
                    <span className="block text-neutral-muted text-xs">Closed on Sundays & National Holidays</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-border text-xs text-neutral-muted leading-relaxed">
                <strong>Borrower Guidance:</strong> For dispute escalations or formal complaints regarding lending partners, please visit our <a href="/grievance-redressal" className="text-royal font-semibold hover:underline">Grievance Redressal Desk</a>.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="backdrop-blur-md bg-white/95 rounded-card-lg border border-neutral-border p-7 sm:p-10 shadow-subtle space-y-6">
              <h2 className="text-xl font-heading font-bold text-navy">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-blue">
                Fill out the form below and our representative will respond within one business day.
              </p>

              {submitted ? (
                <div className="bg-teal-soft border border-teal-accent/30 rounded-xl p-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-teal-dark mx-auto" />
                  <h3 className="text-xl font-heading font-bold text-navy">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-blue max-w-md mx-auto">
                    Thank you for reaching out to QvikLoan. We have received your message and our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2.5 bg-royal text-white rounded-xl text-xs font-semibold hover:bg-royal-hover transition-colors"
                  >
                    Send Another Message
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
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Mehta"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border focus:border-royal outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-neutral-text mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border focus:border-royal outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-neutral-text mb-1">Mobile Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="9403891692"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border focus:border-royal outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-neutral-text mb-1">Subject *</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Inquiry regarding partner lenders"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border focus:border-royal outline-none"
                      />
                    </div>
                  </div>

                  <div className="text-xs">
                    <label className="block font-semibold text-neutral-text mb-1">Message *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please write your inquiry here..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border focus:border-royal outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-royal hover:bg-royal-hover text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
