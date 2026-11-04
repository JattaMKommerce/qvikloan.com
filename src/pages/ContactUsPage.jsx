import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, MessageCircle, Building2, ShieldAlert } from 'lucide-react';
import SupportForm from '../components/SupportForm';
import { companyInfo, phoneDigits } from '../data/companyInfo';
import { usePageMeta } from '../lib/usePageMeta';

function ContactRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-xl bg-royal-soft text-royal-dark flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4" aria-hidden="true" />
      </div>
      <div className="text-sm">
        <div className="text-neutral-muted">{label}</div>
        <div className="text-navy font-semibold leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ContactUsPage() {
  usePageMeta('Contact Us', `Contact QvikLoan, operated by ${companyInfo.name}: email, phone, WhatsApp, office addresses and business hours.`);

  return (
    <div className="pb-16">
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-soft text-royal-dark text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
            Customer support
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">Contact Us</h1>
          <p className="text-base text-slate-blue leading-relaxed max-w-2xl">
            Questions about QvikLoan or a loan enquiry you made? Reach us by email, phone or WhatsApp during business
            hours, or send us a message below.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-neutral-border bg-white p-6 space-y-5">
            <h2 className="text-lg font-heading font-bold text-navy">Customer support</h2>
            <ContactRow icon={Mail} label="Email">
              <a href={`mailto:${companyInfo.email}`} className="text-royal hover:underline">{companyInfo.email}</a>
            </ContactRow>
            <ContactRow icon={Phone} label="Phone">
              <a href={`tel:+${phoneDigits(companyInfo.phone)}`} className="text-royal hover:underline">{companyInfo.phone}</a>
            </ContactRow>
            <ContactRow icon={MessageCircle} label="WhatsApp">
              <a href={`https://wa.me/${phoneDigits(companyInfo.whatsapp)}`} target="_blank" rel="noopener noreferrer" className="text-royal hover:underline">
                {companyInfo.whatsapp}
              </a>
            </ContactRow>
            <ContactRow icon={Clock} label="Business hours">{companyInfo.operatingHours}</ContactRow>
          </div>

          <div className="rounded-2xl border border-neutral-border bg-white p-6 space-y-5">
            <h2 className="text-lg font-heading font-bold text-navy">Company</h2>
            <ContactRow icon={Building2} label="Operated by">
              {companyInfo.name}
              {companyInfo.cin && <span className="block font-normal text-neutral-muted">CIN: {companyInfo.cin}</span>}
            </ContactRow>
            <ContactRow icon={MapPin} label="Registered office">{companyInfo.address.registeredOffice}</ContactRow>
            <ContactRow icon={MapPin} label="Operating (corporate) office">{companyInfo.address.corporateOffice}</ContactRow>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950 space-y-2">
            <p className="font-semibold flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-700" aria-hidden="true" />
              Stay safe
            </p>
            <p>
              QvikLoan will never ask you for an upfront fee, OTP, PIN or banking password. If someone claiming to be
              from QvikLoan does, do not pay. Report it to us and at cybercrime.gov.in (helpline 1930).
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-3 space-y-4">
          <div className="rounded-2xl border border-neutral-border bg-white p-6 sm:p-8 space-y-5">
            <div>
              <h2 className="text-xl font-heading font-bold text-navy">Send us a message</h2>
              <p className="text-sm text-slate-blue mt-1">
                To make a formal complaint, please use the{' '}
                <Link to="/grievance-redressal" className="text-royal font-semibold underline">Grievance Redressal</Link> page
                so it reaches our Grievance Redressal Officer. To start a loan enquiry, use the{' '}
                <Link to="/#enquiry-section" className="text-royal font-semibold underline">enquiry form</Link>.
              </p>
            </div>
            <SupportForm kind="contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
