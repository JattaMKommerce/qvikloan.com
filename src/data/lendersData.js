export const participatingLenders = [
  {
    id: "lender-1",
    name: "Northern Arc Capital Limited",
    type: "RBI-Registered Non-Banking Financial Company (NBFC-ICC)",
    rbiRegNo: "B-07.00653",
    website: "https://www.northernarc.com",
    products: ["Personal Loans", "Business Working Capital"],
    aprRange: "11.5% - 24% p.a.",
    tenureRange: "12 - 60 Months",
    grievanceEmail: "grievance@northernarc.com",
    description: "Evaluates personal and commercial loan applications based on comprehensive digital underwriting, credit score parameters, and verifiable income records."
  },
  {
    id: "lender-2",
    name: "InCred Financial Services Limited",
    type: "RBI-Registered Non-Banking Financial Company (NBFC)",
    rbiRegNo: "B-13.01899",
    website: "https://www.incred.com",
    products: ["Personal Loans", "MSME Business Loans"],
    aprRange: "12.0% - 26% p.a.",
    tenureRange: "12 - 48 Months",
    grievanceEmail: "care@incred.com",
    description: "Provides technology-led lending solutions for salaried professionals and enterprise borrowers following RBI Fair Practices Code."
  },
  {
    id: "lender-3",
    name: "Lendingkart Finance Limited",
    type: "RBI-Registered Non-Banking Financial Company (NBFC)",
    rbiRegNo: "B-05.05047",
    website: "https://www.lendingkart.com",
    products: ["Business Working Capital", "Equipment Financing"],
    aprRange: "14.0% - 28% p.a.",
    tenureRange: "6 - 36 Months",
    grievanceEmail: "grievance@lendingkart.com",
    description: "Specializes in working capital and expansion finance for registered MSMEs, assessing GST return metrics and business banking flows."
  },
  {
    id: "lender-4",
    name: "Protium Finance Limited",
    type: "RBI-Registered Systemically Important NBFC",
    rbiRegNo: "B-13.02102",
    website: "https://www.protium.co.in",
    products: ["Personal Loans", "Commercial Loans"],
    aprRange: "11.0% - 22% p.a.",
    tenureRange: "12 - 60 Months",
    grievanceEmail: "customerservice@protium.co.in",
    description: "Offers structured lending facilities across retail and commercial domains with strict adherence to RBI digital lending guidelines."
  }
];

export const complianceDisclosures = {
  aprDisclaimer: "Annual Percentage Rate (APR) represents the annual cost of borrowing, including interest rates and mandatory lender processing fees. APR typically ranges between 10.5% and 28% depending on the borrower's credit score, income verification, and lender assessment. Actual offers and rates are determined entirely by the lender.",
  representativeExample: {
    amount: "₹1,00,000",
    tenure: "12 Months",
    interestRate: "12.0% p.a. on reducing balance",
    processingFee: "₹2,000 (2% + applicable GST)",
    monthlyInstalment: "₹8,885",
    totalInterest: "₹6,620",
    totalPayable: "₹1,06,620",
    effectiveApr: "14.2% p.a.",
    note: "This is a representative illustration only. Actual loan amounts, interest rates, charges, and tenures are determined by the participating lender upon complete evaluation."
  }
};

