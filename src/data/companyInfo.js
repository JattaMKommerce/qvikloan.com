/**
 * Company facts shown across the website.
 *
 * RULE: only fill in a value after checking it against the company's own records
 * (Certificate of Incorporation, GST certificate, board resolution / appointment letter, etc.).
 * A field set to null is simply left off the website; nothing is guessed or shown as a placeholder.
 *
 * Fields still waiting for confirmation are marked PENDING. Search for "PENDING" to find them.
 */
export const companyInfo = {
  name: 'Jatta M Kommerce Private Limited',
  brandName: 'QvikLoan',
  website: 'https://qvikloan.com',
  companyWebsite: 'https://jattamkommerce.com/',

  // PENDING: copy from the Certificate of Incorporation or the MCA company master data.
  // The previous value (U72900DL2021PTC384912) could not be verified, and its state code (DL = Delhi)
  // does not match the Mumbai registered office, so it is no longer shown.
  cin: null,
  // PENDING: GSTIN, if the company wants it shown.
  gstin: null,

  email: 'help@qvikloan.com',
  phone: '+91 9403891692',
  whatsapp: '+91 9403891692',
  operatingHours: 'Monday to Saturday, 9:30 AM – 6:30 PM IST (closed on public holidays)',

  address: {
    registeredOffice: '220, 1st Floor, Citi Mall, New Link Road, Andheri (W), Mumbai - 400053, Maharashtra, India',
    // PENDING: the building name looks cut short ("Park, 2nd Floor ..."). Confirm the full address.
    corporateOffice: 'Park, 2nd Floor, E Block, Above Passport Office, Hubli, Karnataka - 580029, India',
  },

  // Grievance Redressal Officer (RBI Digital Lending Directions require a named nodal officer for
  // digital lending complaints, published on the website).
  grievanceOfficer: {
    // PENDING: full name of the person formally appointed by the company. Until it is set,
    // the website shows the role, email and phone only.
    name: null,
    designation: 'Grievance Redressal Officer',
    email: 'help@qvikloan.com',
    phone: '+91 9403891692',
  },

  // PENDING (business confirmation): service commitments shown on the Grievance page.
  grievanceTimelines: {
    acknowledgement: 'within 48 hours',
    resolution: 'within 14 working days',
  },

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
