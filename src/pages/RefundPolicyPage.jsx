import React from 'react';
import { Link } from 'react-router-dom';
import { ReceiptText } from 'lucide-react';
import LegalPage, { LegalSection, Callout } from '../components/LegalPage';
import { companyInfo } from '../data/companyInfo';
import { usePageMeta } from '../lib/usePageMeta';

const LAST_UPDATED = '5 November 2026';

const SECTIONS = [
  { id: 'qvikloan-fees', title: 'QvikLoan’s fees' },
  { id: 'lender-fees', title: 'Fees charged by a lender' },
  { id: 'cancelling', title: 'Cancelling an enquiry or a loan' },
  { id: 'request', title: 'How to request a refund' },
  { id: 'unauthorised', title: 'If someone asked you to pay' },
];

const mail = <a href={`mailto:${companyInfo.email}`} className="text-royal font-semibold underline">{companyInfo.email}</a>;

export default function RefundPolicyPage() {
  usePageMeta('Refund & Cancellation Policy', 'QvikLoan does not charge an upfront application fee. How lender fees, refunds and cancelling an enquiry or loan work.');

  return (
    <LegalPage
      icon={ReceiptText}
      badge="Refunds"
      title="Refund & Cancellation Policy"
      intro="QvikLoan does not charge an upfront application fee. Any fee on a loan is charged by the lender, under the lender's own policy."
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
    >
      <LegalSection id="qvikloan-fees" number={1} title="QvikLoan’s fees">
        <p>
          QvikLoan does not charge any upfront application fee, and submitting an enquiry is free. Because QvikLoan takes
          no payment for an enquiry, there is nothing for QvikLoan to refund.
        </p>
      </LegalSection>

      <LegalSection id="lender-fees" number={2} title="Fees charged by a lender">
        <p>
          A lender may charge a processing fee or other charges. These must be shown in its Key Facts Statement (KFS)
          before you sign. If a lender charged a processing fee and the loan was not disbursed, any refund is made under
          that lender’s policy. QvikLoan does not hold or receive this money.
        </p>
      </LegalSection>

      <LegalSection id="cancelling" number={3} title="Cancelling an enquiry or a loan">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Enquiry:</strong> you can cancel at any time, free of charge, by emailing {mail} with your enquiry
            reference.
          </li>
          <li>
            <strong>Loan:</strong> digital loans have a cooling-off period, stated in the KFS, during which you can exit
            by repaying the principal and the proportionate APR, without a penalty. The lender may keep a reasonable
            one-time processing fee if its KFS says so. Contact the lender to cancel.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="request" number={4} title="How to request a refund">
        <ol className="list-decimal pl-5 space-y-1">
          <li>Email the lender’s customer care or grievance officer with your loan ID. Their details are in your KFS and loan agreement.</li>
          <li>If you need help reaching the lender, email {mail} with your loan ID and enquiry reference, and we will pass your request on.</li>
          <li>
            If the lender does not resolve it, follow the steps on our{' '}
            <Link to="/grievance-redressal" className="text-royal font-semibold underline">Grievance Redressal</Link> page.
          </li>
        </ol>
      </LegalSection>

      <LegalSection id="unauthorised" number={5} title="If someone asked you to pay">
        <Callout tone="warning" title="Never pay an upfront fee to get a loan">
          <p className="text-sm">
            If someone asked you to pay money in QvikLoan’s name, it was not authorised by QvikLoan. Report it to {mail},
            at cybercrime.gov.in or on helpline 1930.
          </p>
        </Callout>
      </LegalSection>
    </LegalPage>
  );
}
