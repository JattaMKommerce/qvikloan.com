/**
 * Standard reducing-balance EMI:
 *   EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)
 * where P = loan amount, r = annual rate / 12 / 100, n = tenure in months.
 * At 0% interest the EMI is simply P / n.
 *
 * Returns unrounded rupee values; round only when displaying.
 */
export function calculateEmi(principal, annualRatePercent, tenureMonths) {
  if (!(principal > 0) || !(tenureMonths > 0) || !(annualRatePercent >= 0)) {
    return { emi: 0, totalInterest: 0, totalRepayment: 0 };
  }
  const r = annualRatePercent / 12 / 100;
  const emi = r === 0
    ? principal / tenureMonths
    : (principal * r * (1 + r) ** tenureMonths) / ((1 + r) ** tenureMonths - 1);
  const totalRepayment = emi * tenureMonths;
  return { emi, totalInterest: totalRepayment - principal, totalRepayment };
}

/** ₹ with Indian digit grouping and no decimals, e.g. 300000 -> "₹3,00,000". */
export function formatINR(value) {
  return '₹' + Math.round(value).toLocaleString('en-IN');
}
