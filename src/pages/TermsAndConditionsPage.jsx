import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import LegalPage, { LegalSection, Callout } from '../components/LegalPage';
import { companyInfo } from '../data/companyInfo';
import { enquiryRules } from '../data/loanProducts';
import { usePageMeta } from '../lib/usePageMeta';

const LAST_UPDATED = '5 November 2026';

const SECTIONS = [
  { id: 'acceptance', title: 'About these terms' },
  { id: 'platform', title: 'What QvikLoan is' },
  { id: 'role', title: 'Our role and what we do not do' },
  { id: 'lenders', title: 'Relationship with lending partners' },
  { id: 'process', title: 'How the enquiry and application process works' },
  { id: 'eligibility', title: 'Eligibility' },
  { id: 'approval', title: 'The lender’s approval authority' },
  { id: 'pricing', title: 'Interest rates and charges' },
  { id: 'responsibilities', title: 'Your responsibilities' },
  { id: 'third-party', title: 'Third-party services and links' },
  { id: 'data', title: 'Your data' },
  { id: 'information', title: 'Information and calculators on this website' },
  { id: 'ip', title: 'Intellectual property' },
  { id: 'liability', title: 'Limitation of liability' },
  { id: 'termination', title: 'Suspending or ending access' },
  { id: 'grievances', title: 'Grievance redressal' },
  { id: 'disputes', title: 'Disputes and governing law' },
  { id: 'changes', title: 'Changes to these terms' },
  { id: 'contact', title: 'Contact' },
];

const link = (to, text) => <Link to={to} className="text-royal font-semibold underline">{text}</Link>;

export default function TermsAndConditionsPage() {
  usePageMeta('Terms and Conditions', 'The terms for using QvikLoan, a digital loan facilitation platform operated by Jatta M Kommerce Private Limited, including its role, the lender’s role, charges and grievance redressal.');

  return (
    <LegalPage
      icon={FileText}
      badge="Terms of use"
      title="Terms and Conditions"
      intro="These terms explain what QvikLoan does, what the lender does, and the rules for using this website."
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
    >
      <Callout title="Key points">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>QvikLoan is not a bank or NBFC. It does not lend money or decide on loans.</li>
          <li>Submitting an enquiry does not guarantee a loan offer, approval or disbursement.</li>
          <li>The lender sets the interest rate, charges and repayment terms and shows them in its Key Facts Statement (KFS).</li>
          <li>QvikLoan does not charge you a fee for submitting an enquiry.</li>
        </ul>
      </Callout>

      <LegalSection id="acceptance" number={1} title="About these terms">
        <p>
          These terms apply when you use qvikloan.com (“QvikLoan”), which is operated by <strong>{companyInfo.name}</strong>{' '}
          (“we”, “us”), CIN: {companyInfo.cin}, Registered address: {companyInfo.address.registeredOffice}. Operating
          office: {companyInfo.address.corporateOffice}. By using the website or submitting a form, you agree to
          these terms. If you do not agree, please do not use the website.
        </p>
      </LegalSection>

      <LegalSection id="platform" number={2} title="What QvikLoan is">
        <p>
          QvikLoan is a digital loan facilitation platform that helps individuals and businesses explore suitable loan
          options through a loan enquiry facilitation process. QvikLoan currently has no active lending partner. Final
          loan eligibility, approval, applicable interest rates, repayment terms and disbursement are determined by the
          lending institution.
        </p>
      </LegalSection>

      <LegalSection id="role" number={3} title="Our role and what we do not do">
        <p>We provide information about loan options, take your enquiry, and contact you about it. We do not share your enquiry with any lender today. If a lender partnership is confirmed, we will list that lender on our {link('/participating-lenders', 'Lending Partners')} page and take your fresh consent before sharing.</p>
        <p>We are not a bank or a Non-Banking Financial Company (NBFC). We do not:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>lend money, accept deposits, or hold, receive or pay out loan funds;</li>
          <li>assess creditworthiness, approve or reject loan applications, or set loan terms;</li>
          <li>collect loan repayments; or</li>
          <li>give financial, legal or tax advice.</li>
        </ul>
      </LegalSection>

      <LegalSection id="lenders" number={4} title="Relationship with lending partners">
        <p>
          Lending partners, when confirmed, will be independent banks and NBFCs, named on our {link('/participating-lenders', 'Lending Partners')} page.
          Currently there are none. Any loan, when offered, will be a contract between you and the lender only; we are not a party to it. The lender’s own loan
          agreement, KFS, terms and privacy policy govern the loan.
        </p>
      </LegalSection>

      <LegalSection id="process" number={5} title="How the enquiry and application process works">
        <ol className="list-decimal pl-5 space-y-1">
          <li>You submit an enquiry on our website and give consent.</li>
          <li>Our team contacts you about your requirement.</li>
          <li>We do not share your enquiry with any lender today. If a lender partnership is confirmed, we will list that lender and take your fresh consent first.</li>
          <li>A lender that can consider your enquiry then asks you for the information and documents it needs and carries out its checks.</li>
          <li>If that lender decides to make an offer, it gives you its KFS and loan agreement. You choose whether to accept.</li>
        </ol>
        <p>An enquiry is not a loan application or a commitment to borrow. You can stop at any point.</p>
      </LegalSection>

      <LegalSection id="eligibility" number={6} title="Eligibility">
        <p>
          To submit an enquiry you must be {enquiryRules.minAge} to {enquiryRules.maxAge} years old, an Indian citizen
          or resident, able to enter into a contract, and have a monthly income of at least
          ₹{enquiryRules.minMonthlyIncome.toLocaleString('en-IN')}. If you enquire for a business, you must be authorised
          to act for it. Each lender sets its own eligibility criteria, such as age, income, credit history and location,
          and may apply stricter requirements.
        </p>
      </LegalSection>

      <LegalSection id="approval" number={7} title="The lender’s approval authority">
        <p>
          Whether to make an offer, the amount, interest rate, charges, tenure and timing of disbursement are decided by
          the lender alone, after its own verification and credit assessment, and the lender’s decision is final. We cannot influence, guarantee or speed up a
          lender’s decision, and we do not promise that you will receive an offer or a loan.
        </p>
      </LegalSection>

      <LegalSection id="pricing" number={8} title="Interest rates and charges">
        <p>
          The lender sets the interest rate, Annual Percentage Rate (APR), processing fee and any other charges, and must
          show them in its KFS before you sign. Check the KFS carefully, including the APR, penal charges and the
          cooling-off period.
        </p>
        <p>
          QvikLoan does not charge you any fee for submitting an enquiry. Never pay anyone an upfront fee. This includes
          anyone claiming to be from QvikLoan. Pay loan-related amounts only to the lender, through its official
          channels.
        </p>
      </LegalSection>

      <LegalSection id="responsibilities" number={9} title="Your responsibilities">
        <ul className="list-disc pl-5 space-y-1">
          <li>Give true, accurate and complete information, and only about yourself or a business you are authorised to represent. False information can lead to your enquiry being rejected and to legal action.</li>
          <li>Read the lender’s KFS and loan agreement before you accept an offer, and borrow only what you can repay.</li>
          <li>Keep OTPs, PINs and passwords private. We will never ask for them.</li>
          <li>Do not misuse the website: no false or automated submissions, attempts to break its security, or unlawful use.</li>
        </ul>
      </LegalSection>

      <LegalSection id="third-party" number={10} title="Third-party services and links">
        <p>
          The website uses third-party services, including the AI chat assistant (iamkratu.ai) and WhatsApp, and links to
          lenders’ and regulators’ websites. Those services are governed by their own terms. Replies from the chat
          assistant are automated and are general information, not a loan offer or a lending decision.
        </p>
      </LegalSection>

      <LegalSection id="data" number={11} title="Your data">
        <p>How we collect, use, share and protect your personal information is explained in our {link('/privacy-policy', 'Privacy Policy')}, which forms part of these terms.</p>
      </LegalSection>

      <LegalSection id="information" number={12} title="Information and calculators on this website">
        <p>
          The information on this website is general and may change. EMI calculations and examples are illustrative
          estimates only; they are not loan offers, quotes or advice. See our {link('/disclaimer', 'Financial Disclaimer')}.
        </p>
      </LegalSection>

      <LegalSection id="ip" number={13} title="Intellectual property">
        <p>The QvikLoan name, logo, website design and content belong to {companyInfo.name} or its licensors. You may not copy or reuse them without our written permission.</p>
      </LegalSection>

      <LegalSection id="liability" number={14} title="Limitation of liability">
        <p>
          To the extent permitted by law, we are not liable for a lender’s decisions, terms, actions or omissions, or for
          any loss arising from a loan you take from a lender. Nothing in these terms limits any liability that cannot be
          limited under Indian law, including under the Consumer Protection Act, 2019.
        </p>
      </LegalSection>

      <LegalSection id="termination" number={15} title="Suspending or ending access">
        <p>
          QvikLoan does not require you to create an account. We may decline to process an enquiry, or restrict access to
          the website, if we reasonably believe it is being misused, involves false information or fraud, or if the law
          requires it. You can stop using QvikLoan and withdraw your consent at any time.
        </p>
      </LegalSection>

      <LegalSection id="grievances" number={16} title="Grievance redressal">
        <p>
          If you have a complaint about QvikLoan, contact our Grievance Redressal Officer, {companyInfo.grievanceOfficer.name},
          at <a href={`mailto:${companyInfo.grievanceOfficer.email}`} className="text-royal font-semibold underline">{companyInfo.grievanceOfficer.email}</a>. Complaints about a loan go to
          the lender, and can be escalated to the Reserve Bank of India if not resolved. Full details are on our{' '}
          {link('/grievance-redressal', 'Grievance Redressal')} page.
        </p>
      </LegalSection>

      <LegalSection id="disputes" number={17} title="Disputes and governing law">
        <p>
          These terms are governed by the laws of India. Please raise any dispute with us first through our grievance
          process so we can try to resolve it. Subject to your rights under consumer protection law, the courts at{' '}
          {companyInfo.jurisdiction} have jurisdiction over disputes about these terms.
        </p>
      </LegalSection>

      <LegalSection id="changes" number={18} title="Changes to these terms">
        <p>We may update these terms. The date at the top shows the latest version. Changes do not affect enquiries you submitted before the change, unless the law requires otherwise.</p>
      </LegalSection>

      <LegalSection id="contact" number={19} title="Contact">
        <p>
          {companyInfo.name}, CIN: {companyInfo.cin}. Registered address: {companyInfo.address.registeredOffice}. Operating
          office: {companyInfo.address.corporateOffice}. Email{' '}
          <a href={`mailto:${companyInfo.email}`} className="text-royal font-semibold underline">{companyInfo.email}</a>,
          phone {companyInfo.phone}, {companyInfo.operatingHours}. Grievance Officer: {companyInfo.grievanceOfficer.name},{' '}
          <a href={`mailto:${companyInfo.grievanceOfficer.email}`} className="text-royal font-semibold underline">{companyInfo.grievanceOfficer.email}</a>,{' '}
          {companyInfo.grievanceOfficer.phone}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
