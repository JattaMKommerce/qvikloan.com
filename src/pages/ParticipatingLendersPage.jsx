import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ShieldCheck, Landmark, Info, Search } from 'lucide-react';
import RoleTable from '../components/RoleTable';
import { participatingLenders } from '../data/lendersData';
import { companyInfo } from '../data/companyInfo';
import { usePageMeta } from '../lib/usePageMeta';

const TBC = <span className="text-neutral-muted font-normal">To be confirmed</span>;

function ExternalA({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-royal font-semibold hover:underline inline-flex items-center gap-1 break-all">
      {children}
      <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
    </a>
  );
}

function LenderCard({ lender }) {
  const rows = [
    ['Registered name', lender.legalName],
    ['Brand name', lender.brandName],
    ['Type of institution', lender.classification],
    ['RBI registration', lender.rbiRegistration],
    ['Official website', lender.website && <ExternalA href={lender.website}>{lender.website.replace(/^https?:\/\//, '')}</ExternalA>],
    ['Role in your loan', lender.role],
    ['Loan products', lender.products?.length ? lender.products.join(', ') : null],
    ['Interest range', lender.interestRange],
    ['Rates and charges', lender.loanTermsUrl &&<ExternalA href={lender.loanTermsUrl}>Lender’s published terms</ExternalA>],
    ['Grievance officer', lender.grievance?.email && (
      <span>
        {lender.grievance.name && <span className="block">{lender.grievance.name}</span>}
        <a href={`mailto:${lender.grievance.email}`} className="text-royal hover:underline">{lender.grievance.email}</a>
        {lender.grievance.phone && <span className="block">{lender.grievance.phone}</span>}
      </span>
    )],
    ['Lists QvikLoan as its partner', lender.lspListingUrl && <ExternalA href={lender.lspListingUrl}>View on lender’s website</ExternalA>],
  ];
  return (
    <article className="rounded-2xl border border-neutral-border bg-white p-6 sm:p-8 space-y-4">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-teal-soft text-teal-dark flex items-center justify-center shrink-0">
          <Landmark className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-navy">{lender.brandName || lender.legalName}</h3>
          {lender.classification && <p className="text-sm text-teal-dark font-semibold">{lender.classification}</p>}
        </div>
      </div>
      <dl className="divide-y divide-neutral-border text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="grid grid-cols-1 sm:grid-cols-[40%_1fr] gap-1 sm:gap-4 py-2.5">
            <dt className="text-neutral-muted">{label}</dt>
            <dd className="text-navy font-medium">{value || TBC}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export default function ParticipatingLendersPage() {
  usePageMeta('Lending Partners', 'QvikLoan currently has no active lending partner. Any bank or NBFC it works with in future will be listed here before any enquiry is shared.');

  return (
    <div className="space-y-14 sm:space-y-20 pb-16">

      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-soft text-royal-dark text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Lender disclosure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
            Lending Partners
          </h1>
          <p className="text-base sm:text-lg text-slate-blue leading-relaxed max-w-3xl">
            Any bank or NBFC that QvikLoan works with in future will be listed here. This page also explains exactly what each party would do.
            QvikLoan, operated by {companyInfo.name}, is not a bank or NBFC and does not lend.
          </p>
        </div>
      </section>

      {/* Lender directory */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" aria-labelledby="lender-list">
        <div className="max-w-3xl space-y-2">
          <h2 id="lender-list" className="text-2xl sm:text-3xl font-heading font-bold text-navy">Our lending partners</h2>
          <p className="text-sm sm:text-base text-slate-blue">
            We do not share your enquiry with any lender today. Each lender we work with in future will set its own
            eligibility rules, rates and charges. This list is updated as per active partnerships.
          </p>
        </div>

        {participatingLenders.length === 0 ? (
          <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 text-sm sm:text-base text-amber-950">
            <Info className="w-5 h-5 shrink-0 mt-0.5 text-amber-700" aria-hidden="true" />
            <div className="space-y-2">
              <p className="font-semibold">No Active Lending Partner At Present</p>
              <p>As of 5 November 2026, QvikLoan has no active partnership with any bank or NBFC.</p>
              <p>
                We do not share your enquiry with any lender today. We will publish here the full registered name, RBI
                Certificate of Registration number, website and grievance contact of each lender BEFORE we start sharing
                any enquiry with that lender.
              </p>
              <p>
                Your enquiry stays with QvikLoan and the service providers named in our{' '}
                <Link to="/privacy-policy" className="font-semibold underline">Privacy Policy</Link>, and is not sent to any
                lender until then.
              </p>
              <p>
                Do not pay anyone who claims to be a QvikLoan partner lender. If you are contacted in our name asking for
                money, OTP or documents, report it to{' '}
                <a href={`mailto:${companyInfo.grievanceOfficer.email}`} className="font-semibold underline break-all">{companyInfo.grievanceOfficer.email}</a> /{' '}
                <a href={`mailto:${companyInfo.email}`} className="font-semibold underline">{companyInfo.email}</a> and cybercrime.gov.in (1930).
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {participatingLenders.map((lender) => <LenderCard key={lender.id} lender={lender} />)}
          </div>
        )}
      </section>

      {/* Who does what */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" aria-labelledby="roles">
        <div className="max-w-3xl space-y-2">
          <h2 id="roles" className="text-2xl sm:text-3xl font-heading font-bold text-navy">Who evaluates, approves and disburses your loan</h2>
          <p className="text-sm sm:text-base text-slate-blue">
            When a lender partnership is active, the lender evaluates your application, carries out credit underwriting,
            approves or rejects the loan, disburses the money and manages repayment. QvikLoan does none of these.
          </p>
        </div>
        <RoleTable />
      </section>

      {/* Verify a lender + borrower rights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-neutral-border bg-white p-6 sm:p-8 space-y-3">
          <h2 className="text-lg font-heading font-bold text-navy flex items-center gap-2">
            <Search className="w-5 h-5 text-royal" aria-hidden="true" />
            <span>Check a lender yourself</span>
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-blue">
            <li>
              NBFCs must hold an RBI Certificate of Registration. Search the RBI’s{' '}
              <ExternalA href="https://www.rbi.org.in/Scripts/BS_NBFCList.aspx">list of registered NBFCs</ExternalA>.
            </li>
            <li>Lenders must publish the names of the platforms (Lending Service Providers) they work with on their own websites.</li>
            <li>
              Report anyone lending or taking deposits without authorisation on the RBI’s{' '}
              <ExternalA href="https://sachet.rbi.org.in">Sachet portal</ExternalA>.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-border bg-white p-6 sm:p-8 space-y-3">
          <h2 className="text-lg font-heading font-bold text-navy flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-royal" aria-hidden="true" />
            <span>Your rights as a borrower</span>
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-blue">
            <li>The lender must give you a Key Facts Statement (KFS), including the APR and all charges, before you sign.</li>
            <li>Digital loans have a cooling-off period, stated in the KFS, during which you can exit by repaying the principal and the proportionate APR, without a penalty.</li>
            <li>The loan is paid directly into your bank account by the lender, and repayments go directly to the lender.</li>
            <li>
              Complaints about a loan go to the lender’s grievance officer first. If unresolved after 30 days, you can
              complain to the RBI. See <Link to="/grievance-redressal" className="text-royal font-semibold underline">Grievance Redressal</Link>.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
