import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ExternalLink, Building2, Landmark } from 'lucide-react';
import SupportForm from '../components/SupportForm';
import { companyInfo } from '../data/companyInfo';
import { usePageMeta } from '../lib/usePageMeta';

function ExternalA({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-royal font-semibold hover:underline inline-flex items-center gap-1">
      {children}
      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
    </a>
  );
}

export default function GrievanceRedressalPage() {
  usePageMeta('Grievance Redressal', 'How to raise a complaint about QvikLoan or about a loan from a lender, our Grievance Redressal Officer, response times and how to escalate to the RBI.');
  const officer = companyInfo.grievanceOfficer;
  const { acknowledgement, resolution } = companyInfo.grievanceTimelines;

  return (
    <div className="pb-16">
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-soft text-royal-dark text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            Complaints
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">Grievance Redressal</h1>
          <p className="text-base text-slate-blue leading-relaxed max-w-3xl">
            If something has gone wrong, tell us. This page explains who to contact, how long it takes, and how to
            escalate if you are not satisfied.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-10">

        {/* Which route */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-label="Where to send your complaint">
          <div className="rounded-2xl border border-neutral-border bg-white p-6 space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy flex items-center gap-2">
              <Building2 className="w-5 h-5 text-royal" aria-hidden="true" />
              Complaint about QvikLoan
            </h2>
            <p className="text-sm text-slate-blue">
              For example: how your enquiry was handled, unwanted calls or messages, your personal data or consent, or
              someone pretending to be QvikLoan. Contact our Grievance Redressal Officer below.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-border bg-white p-6 space-y-3">
            <h2 className="text-lg font-heading font-bold text-navy flex items-center gap-2">
              <Landmark className="w-5 h-5 text-teal-dark" aria-hidden="true" />
              Complaint about a loan or a lender
            </h2>
            <p className="text-sm text-slate-blue">
              For example: interest, charges, the KFS, disbursement, repayment or recovery. Contact the lender’s
              grievance officer, whose details are in your KFS, loan agreement and on our{' '}
              <Link to="/participating-lenders" className="text-royal font-semibold underline">Lending Partners</Link> page.
              You can also tell us, and we will pass it to the lender.
            </p>
          </div>
        </section>

        {/* Grievance officer */}
        <section className="rounded-2xl border-2 border-royal/30 bg-white p-6 sm:p-8 space-y-5" aria-labelledby="gro">
          <h2 id="gro" className="text-xl font-heading font-bold text-navy">QvikLoan Grievance Redressal Officer</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {officer.name && (
              <div><dt className="text-neutral-muted">Name</dt><dd className="font-bold text-navy">{officer.name}</dd></div>
            )}
            <div><dt className="text-neutral-muted">Designation</dt><dd className="font-bold text-navy">{officer.designation}, {companyInfo.name}</dd></div>
            <div><dt className="text-neutral-muted">Email</dt><dd><a href={`mailto:${officer.email}`} className="text-royal font-semibold hover:underline">{officer.email}</a></dd></div>
            <div><dt className="text-neutral-muted">Phone</dt><dd className="font-bold text-navy">{officer.phone}</dd></div>
            <div className="sm:col-span-2"><dt className="text-neutral-muted">Postal address</dt><dd className="text-navy">{companyInfo.address.registeredOffice}</dd></div>
            <div className="sm:col-span-2"><dt className="text-neutral-muted">Hours</dt><dd className="text-navy">{companyInfo.operatingHours}</dd></div>
          </dl>
        </section>

        {/* Process and escalation */}
        <section className="space-y-5" aria-labelledby="process">
          <h2 id="process" className="text-2xl font-heading font-bold text-navy">How it works and how to escalate</h2>
          <ol className="space-y-4">
            {[
              ['Tell us', <>Use the form below, email <a href={`mailto:${officer.email}`} className="text-royal font-semibold underline">{officer.email}</a>, call {officer.phone}, or write to the address above. Include your enquiry reference if you have one. You will get a complaint reference number.</>],
              ['We respond', <>We aim to acknowledge your complaint {acknowledgement} and send you a resolution {resolution}. If we need more time, we will tell you why.</>],
              ['If it is about a loan', <>Contact the lender’s grievance officer. Lenders are also responsible for the platforms they work with, so you can raise a complaint about how QvikLoan handled an enquiry for a lender with that lender too.</>],
              ['Escalate to the RBI', <>If the lender rejects your complaint, does not reply within 30 days, or you are not satisfied with its reply, you can complain under the RBI’s Integrated Ombudsman Scheme at <ExternalA href="https://cms.rbi.org.in">cms.rbi.org.in</ExternalA>, or by post to the RBI’s Centralised Receipt and Processing Centre in Chandigarh.</>],
              ['Other options', <>For complaints about our own service you can also contact the National Consumer Helpline (<ExternalA href="https://consumerhelpline.gov.in">consumerhelpline.gov.in</ExternalA>, 1915). Report fraud at <ExternalA href="https://cybercrime.gov.in">cybercrime.gov.in</ExternalA> or 1930, and unauthorised lenders on the RBI’s <ExternalA href="https://sachet.rbi.org.in">Sachet portal</ExternalA>.</>],
            ].map(([title, body], i) => (
              <li key={title} className="flex gap-4 rounded-2xl border border-neutral-border bg-white p-5">
                <span className="w-9 h-9 rounded-xl bg-navy text-white font-bold flex items-center justify-center font-heading shrink-0">{i + 1}</span>
                <div className="text-sm text-slate-blue space-y-1">
                  <h3 className="font-heading font-bold text-navy text-base">{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Form */}
        <section className="rounded-2xl border border-neutral-border bg-white p-6 sm:p-8 space-y-5" aria-labelledby="file-complaint">
          <div>
            <h2 id="file-complaint" className="text-xl font-heading font-bold text-navy">File a complaint online</h2>
            <p className="text-sm text-slate-blue mt-1">It goes straight to the Grievance Redressal Officer’s inbox.</p>
          </div>
          <SupportForm kind="grievance" />
        </section>
      </div>
    </div>
  );
}
