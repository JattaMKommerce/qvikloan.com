import React from 'react';
import { Info } from 'lucide-react';
import LegalPage, { LegalSection, Callout } from '../components/LegalPage';
import { companyInfo } from '../data/companyInfo';
import { usePageMeta } from '../lib/usePageMeta';

const LAST_UPDATED = '5 November 2026';

const SECTIONS = [
  { id: 'platform', title: 'What QvikLoan is' },
  { id: 'no-guarantee', title: 'No guarantee of approval or credit' },
  { id: 'lender-terms', title: 'Rates, charges and terms' },
  { id: 'illustrations', title: 'Calculators and examples' },
  { id: 'no-advice', title: 'Not financial advice' },
  { id: 'fees', title: 'Fees and fraud warning' },
  { id: 'company', title: 'Company details' },
];

export default function DisclaimerPage() {
  usePageMeta('Financial Disclaimer', 'QvikLoan does not guarantee loan approval or disbursement. Lending institutions decide eligibility, interest rates, charges and repayment terms.');

  return (
    <LegalPage
      icon={Info}
      badge="Disclosures"
      title="Financial Disclaimer"
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
    >
      <Callout title="Please read before you enquire">
        <p className="text-sm">
          QvikLoan provides a digital platform for exploring loan-related information and facilitating loan enquiries.
          QvikLoan does not lend and does not guarantee loan approval or disbursement.
        </p>
      </Callout>

      <LegalSection id="platform" number={1} title="What QvikLoan is">
        <p>
          QvikLoan is operated by <strong>{companyInfo.name}</strong>. QvikLoan is not a bank or a Non-Banking Financial
          Company (NBFC) registered with the Reserve Bank of India. It does not lend money, accept deposits, assess
          credit risk, or hold or disburse loan funds.
        </p>
      </LegalSection>

      <LegalSection id="no-guarantee" number={2} title="No guarantee of approval or credit">
        <p>
          All loan applications are subject to the respective lending institution’s eligibility requirements,
          verification, underwriting and approval procedures.
        </p>
        <p>
          Submitting an application through QvikLoan does not guarantee approval or the availability of credit. It also
          does not guarantee any particular loan amount, interest rate or disbursement time.
        </p>
      </LegalSection>

      <LegalSection id="lender-terms" number={3} title="Rates, charges and terms">
        <p>
          Interest rates, applicable charges, repayment terms and loan disbursement are determined by the respective
          lending institution. The lender must give you a Key Facts Statement (KFS) showing the Annual Percentage Rate
          (APR) and all charges before you sign. Read it, and the loan agreement, before you accept any offer. You are
          free to decline.
        </p>
      </LegalSection>

      <LegalSection id="illustrations" number={4} title="Calculators and examples">
        <p>
          EMI calculations and worked examples on this website are illustrative estimates and do not constitute a loan
          offer or guarantee of approval. They use the standard reducing-balance formula, do not include fees or taxes,
          and are not based on any particular lender’s pricing. Your actual EMI depends on the amount, rate and tenure
          the lender approves.
        </p>
      </LegalSection>

      <LegalSection id="no-advice" number={5} title="Not financial advice">
        <p>
          Information on this website is general and is not financial, legal or tax advice. Consider whether a loan is
          right for you and whether you can afford the repayments. Borrowing more than you can repay can harm your credit
          record.
        </p>
      </LegalSection>

      <LegalSection id="fees" number={6} title="Fees and fraud warning">
        <Callout tone="warning" title="Never pay an upfront fee to get a loan">
          <p className="text-sm">
            QvikLoan does not charge borrowers any fee for submitting an enquiry. QvikLoan, {companyInfo.name} and
            anyone acting for us will never ask you to pay a registration fee, processing fee, deposit or “insurance”
            into a personal bank account or UPI ID to approve or release a loan, and will never ask for your OTP, PIN or
            banking password.
          </p>
          <p className="text-sm">
            Any lender fees are shown in the lender’s KFS and paid only to the lender through its official channels. If
            someone asks you for money in QvikLoan’s name, do not pay. Report it to{' '}
            <a href={`mailto:${companyInfo.email}`} className="font-semibold underline">{companyInfo.email}</a>, at
            cybercrime.gov.in or on helpline 1930, and on the RBI’s Sachet portal (sachet.rbi.org.in).
          </p>
        </Callout>
      </LegalSection>

      <LegalSection id="company" number={7} title="Company details">
        <dl className="grid grid-cols-1 sm:grid-cols-[30%_1fr] gap-x-4 gap-y-2 text-sm">
          <dt className="font-semibold text-navy">Platform</dt><dd>QvikLoan (qvikloan.com)</dd>
          <dt className="font-semibold text-navy">Operated by</dt><dd>{companyInfo.name}</dd>
          {companyInfo.cin && (<><dt className="font-semibold text-navy">CIN</dt><dd>{companyInfo.cin}</dd></>)}
          <dt className="font-semibold text-navy">Registered office</dt><dd>{companyInfo.address.registeredOffice}</dd>
          <dt className="font-semibold text-navy">Operating office</dt><dd>{companyInfo.address.corporateOffice}</dd>
          <dt className="font-semibold text-navy">Contact</dt><dd>{companyInfo.email} · {companyInfo.phone}</dd>
        </dl>
      </LegalSection>
    </LegalPage>
  );
}
