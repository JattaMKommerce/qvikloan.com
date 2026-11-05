import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import LegalPage, { LegalSection, Callout } from '../components/LegalPage';
import { companyInfo } from '../data/companyInfo';
import { usePageMeta } from '../lib/usePageMeta';

const LAST_UPDATED = '5 November 2026';

const SECTIONS = [
  { id: 'who-we-are', title: 'Who we are' },
  { id: 'what-we-collect', title: 'Information we collect' },
  { id: 'what-we-dont-collect', title: 'PAN, Aadhaar, bank and other sensitive information' },
  { id: 'why', title: 'Why we use your information' },
  { id: 'sharing', title: 'Who we share it with' },
  { id: 'consent', title: 'Consent and withdrawing consent' },
  { id: 'retention', title: 'How long we keep it' },
  { id: 'security', title: 'How we protect it' },
  { id: 'cookies', title: 'Cookies, browser storage and third-party content' },
  { id: 'rights', title: 'Your rights' },
  { id: 'children', title: 'Children' },
  { id: 'law', title: 'Laws that apply' },
  { id: 'changes', title: 'Changes to this policy' },
  { id: 'contact', title: 'Grievance Officer and contact' },
];

// What the website collects. Keep in sync with the enquiry form, api/lead.php and api/contact.php.
const COLLECTED = [
  ['Identity and contact', 'Full name, mobile number, age', 'Enquiry form', 'Required'],
  ['Location', 'City', 'Enquiry form', 'Required'],
  ['Loan requirement', 'Personal or business loan, amount', 'Enquiry form', 'Required'],
  ['Employment and income', 'Employment type (salaried or self-employed), monthly income', 'Enquiry form', 'Required'],
  ['Consent record', 'Your marketing choice, the consent wording you agreed to, its version and the time you agreed', 'Enquiry form', 'Recorded automatically'],
  ['Messages', 'Name, email address, mobile number, your message, its category and any enquiry reference you give', 'Contact and grievance forms', 'Required for those forms (mobile optional on Contact)'],
  ['Chat conversations', 'What you type into the AI chat assistant', 'Chat assistant (only if you open it)', 'Optional'],
  ['Calls and messages with our team', 'What you tell us by phone, WhatsApp or email', 'You', 'Optional'],
  ['Technical and campaign information', 'IP address, browser type, time of submission, the page you arrived on, the website that referred you, and advertising campaign tags in the link you used (utm_*, fbclid, gclid)', 'Your browser, sent with a form', 'Recorded automatically'],
];

const PURPOSES = [
  ['Assess your enquiry and contact you about it by call, SMS or WhatsApp', 'Your consent on the enquiry form'],
  ['In future only: share your enquiry with a lender listed on our Lending Partners page so it can assess your eligibility. This does not happen today', 'Your fresh consent at that time'],
  ['Send you information about other loan products', 'Your separate, optional marketing consent'],
  ['Answer your questions and investigate complaints, and keep a grievance register', 'Your request, and our legal obligations'],
  ['Keep the website secure and block spam and fraud (for example, limiting repeated submissions from one IP address)', 'Reasonable security practices required by law'],
  ['Understand which of our advertisements and links bring enquiries, using the campaign tags in the link you used', 'This policy, which you agree to on the enquiry form'],
  ['Meet legal and regulatory requirements and respond to lawful requests', 'Legal obligation'],
];

function Table({ caption, head, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-border">
      <table className="w-full min-w-[560px] text-left text-sm border-collapse">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-neutral-bg">
          <tr>{head.map((h) => <th key={h} scope="col" className="py-2.5 px-3 font-bold text-navy">{h}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-neutral-border">
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                i === 0
                  ? <th key={i} scope="row" className="py-2.5 px-3 font-semibold text-navy align-top">{cell}</th>
                  : <td key={i} className="py-2.5 px-3 align-top">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mail = <a href={`mailto:${companyInfo.email}`} className="text-royal font-semibold underline">{companyInfo.email}</a>;
const officerMail = <a href={`mailto:${companyInfo.grievanceOfficer.email}`} className="text-royal font-semibold underline">{companyInfo.grievanceOfficer.email}</a>;

export default function PrivacyPolicyPage() {
  usePageMeta('Privacy Policy', 'How QvikLoan collects, uses, shares, protects and deletes personal information, and how to withdraw consent or contact our Grievance Officer.');

  return (
    <LegalPage
      icon={ShieldCheck}
      badge="Privacy"
      title="Privacy Policy"
      intro="This policy explains what personal information QvikLoan collects, why, who receives it, how long it is kept, and how you can control it."
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
    >
      <Callout title="In short">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>We collect only what we need to handle your loan enquiry, and we explain why on the form.</li>
          <li>We do not share your enquiry with any lender today. In future, we would share it only with your fresh consent, and only with lenders named on our Lending Partners page.</li>
          <li>We do not collect PAN, Aadhaar, bank details or documents on this website.</li>
          <li>We do not sell your information or send your enquiry details to advertising platforms.</li>
          <li>You can withdraw consent or ask us to delete your details at any time by emailing {mail}.</li>
        </ul>
      </Callout>

      <LegalSection id="who-we-are" number={1} title="Who we are">
        <p>
          QvikLoan (<a href={companyInfo.website} className="text-royal underline">qvikloan.com</a>) is operated by{' '}
          <strong>{companyInfo.name}</strong> (“we”, “us”), CIN: {companyInfo.cin}, Registered address:{' '}
          {companyInfo.address.registeredOffice}. Operating office: {companyInfo.address.corporateOffice}. We decide why
          and how your personal information is processed on this website, so we are responsible for it.
        </p>
        <p>
          This policy covers this website, its enquiry, contact and grievance forms, the chat assistant on it, and your
          calls and messages with our team. Once a lender receives your enquiry, that lender’s own privacy policy also
          applies to what it does with your information.
        </p>
      </LegalSection>

      <LegalSection id="what-we-collect" number={2} title="Information we collect">
        <Table caption="Information we collect" head={['Category', 'What', 'Where from', 'Required?']} rows={COLLECTED} />
        <p>
          Please do not type sensitive details (such as PAN, Aadhaar or account numbers) into free-text fields or the
          chat.
        </p>
      </LegalSection>

      <LegalSection id="what-we-dont-collect" number={3} title="PAN, Aadhaar, bank and other sensitive information">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>PAN:</strong> not collected on this website. If a lender needs your PAN for KYC or a credit check, the lender collects it directly.</li>
          <li><strong>Aadhaar:</strong> not collected on this website. Any Aadhaar-based verification is done by the lender, with your consent and under the Aadhaar Act.</li>
          <li><strong>Bank account details and statements:</strong> not collected on this website. The lender collects them to assess your loan and to disburse it.</li>
          <li><strong>Employment and income:</strong> we collect only your employment type and monthly income figure. Salary slips, tax returns and financial statements are collected by the lender, not by us.</li>
          <li><strong>Credit reports:</strong> QvikLoan does not fetch your credit report. A lender may, with your consent, check it with credit bureaus (such as CIBIL, Experian, Equifax or CRIF High Mark) under its own privacy policy.</li>
          <li>We never ask for card numbers, PINs, CVVs, banking passwords or OTPs, and we do not collect biometrics.</li>
          <li>This website does not access your phone contacts, call logs, SMS, photos or location.</li>
        </ul>
      </LegalSection>

      <LegalSection id="why" number={4} title="Why we use your information">
        <Table caption="Purposes and basis" head={['Purpose', 'Basis']} rows={PURPOSES} />
        <p>We do not use your information for any purpose that is not listed here without telling you and, where needed, asking for your consent.</p>
      </LegalSection>

      <LegalSection id="sharing" number={5} title="Who we share it with">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Lending institutions:</strong> Currently NONE. We do not share with any lender today. In future, only
            with your fresh consent, and only lenders listed on our{' '}
            <Link to="/participating-lenders" className="text-royal font-semibold underline">Lending Partners</Link> page. A
            lender would then handle your information as a separate data fiduciary under its own privacy policy.
          </li>
          <li>
            <strong>Service providers that work for us:</strong>
            <ul className="list-[circle] pl-5 mt-1 space-y-1">
              {companyInfo.serviceProviders.map((p) => (
                <li key={p.name}><strong>{p.name}</strong>: {p.role}</li>
              ))}
            </ul>
            They may use your information only to provide these services to us.
          </li>
          <li><strong>Authorities:</strong> when the law requires it, for example in response to a court order or a lawful request from a regulator or law enforcement agency.</li>
          <li><strong>Advertising and analytics platforms:</strong> If we run advertisements, we may use Meta Pixel and Google Analytics with your consent to understand which ads bring enquiries. We never send them the contents of your enquiry (such as name, mobile, income, loan amount). You can withdraw consent anytime via {mail}. If we add pixels, we will update this policy first.</li>
        </ul>
        <p>We do not sell or rent your personal information.</p>
      </LegalSection>

      <LegalSection id="consent" number={6} title="Consent and withdrawing consent">
        <p>
          The enquiry form has four separate checkboxes, and none is ticked in advance. Three are needed to process your
          enquiry: agreeing to this policy and our Terms, being contacted about your enquiry, and understanding that we
          would share your details only with a listed lender and only after taking your fresh consent. The fourth, for
          marketing, is optional and does not affect your enquiry. We keep a record of the exact wording you agreed to
          and when.
        </p>
        <p>
          You can withdraw consent at any time by emailing {mail} or using our{' '}
          <Link to="/grievance-redressal" className="text-royal font-semibold underline">grievance form</Link>. We will then
          stop using your information for that purpose, and tell any lender we shared it with that you have
          withdrawn consent. Withdrawal does not affect processing that already happened, and we may keep a record of
          your consent and its withdrawal where the law requires. A lender may also need to keep some records under its
          own legal obligations, for example if you took a loan.
        </p>
      </LegalSection>

      <LegalSection id="retention" number={7} title="How long we keep it">
        <p>
          We keep enquiry records {companyInfo.dataRetention}, unless the law requires us to keep them longer. Records of
          complaints are kept for as long as needed to resolve them and as required by law. After that, we delete your
          information or make it anonymous.
        </p>
        <p>
          To have your details deleted sooner, email {mail}. We will confirm once they have been deleted, or explain what
          we must keep by law and why.
        </p>
      </LegalSection>

      <LegalSection id="security" number={8} title="How we protect it">
        <ul className="list-disc pl-5 space-y-2">
          <li>Everything you send through this website is encrypted in transit (HTTPS).</li>
          <li>Personal information is never put in website addresses (URLs) and is not written to our server error logs.</li>
          <li>Forms are checked on our server, and repeated or automated submissions are blocked.</li>
          <li>Secret API keys for our service providers are stored on the server and never sent to your browser.</li>
          <li>Only staff who handle enquiries and complaints can see your details.</li>
        </ul>
        <p>
          No system is completely secure. If a breach affects your personal information, we will inform you and the
          authorities as the law requires.
        </p>
      </LegalSection>

      <LegalSection id="cookies" number={9} title="Cookies, browser storage and third-party content">
        <ul className="list-disc pl-5 space-y-2">
          <li>This website does not set its own cookies. It uses your browser’s session storage to remember the link you arrived from (including any campaign tags) until you close the tab, so it can be attached to your enquiry.</li>
          <li>Fonts are loaded from Google Fonts, so Google receives your IP address when the page loads.</li>
          <li>The chat assistant is provided by iamkratu.ai and loads only when you open it. It may set its own cookies.</li>
          <li>The WhatsApp button opens WhatsApp, which is operated by Meta under its own privacy policy.</li>
        </ul>
      </LegalSection>

      <LegalSection id="rights" number={10} title="Your rights">
        <p>You can ask us, free of charge, to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>tell you what personal information we hold about you, how we used it and who we shared it with;</li>
          <li>correct, complete or update it;</li>
          <li>delete it, unless we must keep it by law;</li>
          <li>withdraw your consent;</li>
          <li>resolve a complaint about how we handled your information; and</li>
          <li>nominate someone to exercise these rights for you if you die or become incapacitated.</li>
        </ul>
        <p>
          Email {mail}. We may need to confirm your identity first, usually by contacting you on the mobile number in
          your enquiry. If you are not satisfied with our response, you may take the matter further
          under applicable law, including to the Data Protection Board of India for matters under the Digital Personal
          Data Protection Act, 2023 once the relevant provisions are in force.
        </p>
      </LegalSection>

      <LegalSection id="children" number={11} title="Children">
        <p>QvikLoan accepts enquiries only from adults aged 21 to 58. We do not knowingly collect information about children. If you believe a child has sent us their details, email {mail} and we will delete them.</p>
      </LegalSection>

      <LegalSection id="law" number={12} title="Laws that apply">
        <p>
          We handle personal information under Indian law, including the Information Technology Act, 2000 and the
          Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or
          Information) Rules, 2011. The Digital Personal Data Protection Act, 2023 and the Digital Personal Data
          Protection Rules, 2025 are coming into force in phases, and we are aligning our practices with them as they do.
          Where we work with banks and NBFCs, the Reserve Bank of India’s digital lending rules also govern how
          borrower information is collected and shared.
        </p>
      </LegalSection>

      <LegalSection id="changes" number={13} title="Changes to this policy">
        <p>
          We will update this page when our practices or the law change, and show the date of the latest version at the
          top. If a change affects how we use information you have already given us, we will tell you and, where needed,
          ask for your consent again.
        </p>
      </LegalSection>

      <LegalSection id="contact" number={14} title="Grievance Officer and contact">
        <dl className="rounded-xl border border-neutral-border bg-neutral-bg p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-[34%_1fr] gap-x-4 gap-y-2 text-sm">
          {companyInfo.grievanceOfficer.name && (<><dt className="font-semibold text-navy">Name</dt><dd>{companyInfo.grievanceOfficer.name}</dd></>)}
          <dt className="font-semibold text-navy">Designation</dt><dd>{companyInfo.grievanceOfficer.designation}</dd>
          <dt className="font-semibold text-navy">Email</dt><dd>{officerMail}</dd>
          <dt className="font-semibold text-navy">Phone</dt><dd>{companyInfo.grievanceOfficer.phone} ({companyInfo.operatingHours})</dd>
          <dt className="font-semibold text-navy">Postal address</dt><dd>{companyInfo.grievanceOfficer.address}</dd>
          <dt className="font-semibold text-navy">Response times</dt>
          <dd>Support: {companyInfo.grievanceTimelines.support}. Officer: {companyInfo.grievanceTimelines.officer}.</dd>
        </dl>
        <p>
          You can also use the form on our <Link to="/grievance-redressal" className="text-royal font-semibold underline">Grievance Redressal</Link> page.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
