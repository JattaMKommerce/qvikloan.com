/**
 * Company facts shown across the website. A field set to null is simply left off the website.
 * Details supplied by the company on 5 November 2026.
 */
export const companyInfo = {
  name: 'Jatta M Kommerce Private Limited',
  brandName: 'QvikLoan',
  website: 'https://qvikloan.com',
  companyWebsite: 'https://jattamkommerce.com/',

  cin: 'U58200MH2024PTC428411',
  gstin: null,

  email: 'help@qvikloan.com',
  phone: '+91 9403891692',
  whatsapp: '+91 9403891692',
  operatingHours: 'Monday to Saturday, 9:30 AM – 6:30 PM IST (closed on public holidays)',

  address: {
    registeredOffice: '220, 1st Floor, Citi Mall, New Link Road, Andheri (W), Mumbai - 400053, Maharashtra, India',
    corporateOffice: 'Jatta M Kommerce Pvt Ltd, REGUS, Unit No 2201A, 22nd Floor, World Trade Center, Brigade Gateway Campus, Malleswaram (W), Bangalore - 560055, Karnataka, India',
  },

  grievanceOfficer: {
    name: 'Amit',
    designation: 'Grievance Redressal Officer, Jatta M Kommerce Private Limited',
    email: 'amit.qvikloan@gmail.com',
    phone: '+91 9403891692',
    address: 'Jatta M Kommerce Pvt Ltd, REGUS, Unit No 2201A, 22nd Floor, World Trade Center, Brigade Gateway Campus, Malleswaram (W), Bangalore - 560055, Karnataka, India',
  },

  // PENDING (business confirmation): service commitments shown on the Grievance page.
  grievanceTimelines: {
    support: 'within 7 working days',
    officer: 'within 15 days',
  },

  // How the site describes QvikLoan's legal role in short disclaimers.
  // PENDING (legal review): change to e.g. 'a Direct Selling Agent (DSA)' only once the lender
  // agreements confirm that status.
  platformRole: 'a loan facilitation platform',

  // PENDING (legal review): courts named in the Terms and Conditions.
  jurisdiction: 'Mumbai, Maharashtra',

  // PENDING (business + legal confirmation): how long enquiry records are kept.
  dataRetention: 'up to 24 months after your last interaction with us',

  // Service providers that handle visitor data on QvikLoan's behalf (named in the Privacy Policy).
  serviceProviders: [
    { name: 'iamkratu.ai', role: 'AI chat assistant on this website and enquiry management (CRM) software' },
    { name: 'Hostinger', role: 'Website hosting' },
    { name: 'Email service provider', role: 'Delivering emails sent to and from our @qvikloan.com addresses' },
  ],

  roleDisclosure:
    'QvikLoan is a digital loan facilitation platform operated by Jatta M Kommerce Private Limited. QvikLoan is not a bank or a Non-Banking Financial Company (NBFC), does not lend money, and does not make credit decisions. Final loan eligibility, approval, interest rates, charges, repayment terms and disbursement are decided by the lending institution.',
};

/** Phone number in the digits-only form used by tel: and wa.me links. */
export const phoneDigits = (phone) => phone.replace(/\D/g, '');
