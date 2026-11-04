import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const outDir = path.resolve('public/images');

const renderSvg = (name, svg, w = 400, h = 240) => {
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>*{margin:0;padding:0;box-sizing:border-box;}body{width:${w}px;height:${h}px;background:transparent;display:flex;align-items:center;justify-content:center;overflow:hidden;}svg{width:${w}px;height:${h}px;}</style></head><body>${svg}</body></html>`;
  const tmp = path.resolve(`.tmp_${name}.html`);
  fs.writeFileSync(tmp, html, 'utf8');
  execSync(`/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --headless=new --disable-gpu --window-size=${w},${h} --default-background-color=00000000 --screenshot="${path.resolve(outDir, name)}" "file://${tmp}"`, { stdio: 'pipe' });
  fs.unlinkSync(tmp);
  console.log('Rendered card:', name);
};

// 1. Step 1: Tell us what you're looking for
const step1Svg = `
<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g1" x1="0" y1="0" x2="400" y2="240" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EAF1FF"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" rx="16" fill="url(#g1)"/>
  <circle cx="340" cy="50" r="40" stroke="#356AE6" stroke-width="2" stroke-dasharray="4 4" opacity="0.25"/>
  <path d="M 40 40 A 30 30 0 0 1 70 70" stroke="#36B49B" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.4"/>
  
  <!-- Interactive Form / Slider Graphic -->
  <g transform="translate(60, 40)">
    <rect width="280" height="160" rx="14" fill="#FFFFFF" stroke="#E5EAF1" stroke-width="1.5"/>
    <rect x="20" y="20" width="110" height="28" rx="8" fill="#356AE6"/>
    <text x="75" y="38" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">Personal Loan</text>
    
    <rect x="140" y="20" width="110" height="28" rx="8" fill="#F8FAFC" stroke="#E5EAF1"/>
    <text x="195" y="38" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#738096" text-anchor="middle">Business Loan</text>

    <!-- Amount Indicator -->
    <rect x="20" y="66" width="240" height="42" rx="10" fill="#F8FAFC" stroke="#E5EAF1"/>
    <circle cx="45" cy="87" r="12" fill="#EAF1FF"/>
    <text x="45" y="91" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#356AE6" text-anchor="middle">₹</text>
    <rect x="70" y="83" width="120" height="8" rx="4" fill="#356AE6" opacity="0.8"/>
    <circle cx="190" cy="87" r="10" fill="#356AE6"/>
    <circle cx="190" cy="87" r="4" fill="#FFFFFF"/>
    
    <!-- Footer step note -->
    <rect x="20" y="122" width="240" height="22" rx="6" fill="#E6F7F4"/>
    <text x="140" y="137" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#278A76" text-anchor="middle">Discovery &amp; Term Selection</text>
  </g>
</svg>
`;

// 2. Step 2: Submit with Consent
const step2Svg = `
<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g2" x1="0" y1="0" x2="400" y2="240" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#E6F7F4"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" rx="16" fill="url(#g2)"/>
  <circle cx="60" cy="60" r="16" stroke="#F59E0B" stroke-width="5" fill="none" opacity="0.4"/>
  <path d="M 330 180 A 40 40 0 0 1 370 220" stroke="#8B5CF6" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.4"/>

  <!-- Secure Consent & Encryption Graphic -->
  <g transform="translate(60, 40)">
    <rect width="280" height="160" rx="14" fill="#FFFFFF" stroke="#E5EAF1" stroke-width="1.5"/>
    <circle cx="140" cy="45" r="24" fill="#E6F7F4"/>
    <!-- Lock & Shield -->
    <path d="M 140 32 L 150 36 V 44 C 150 51 140 55 140 55 C 140 55 130 51 130 44 V 36 Z" fill="#36B49B"/>
    <path d="M 136 43 L 139 46 L 145 40" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- Consent Checkbox Row -->
    <g transform="translate(25, 80)">
      <rect width="20" height="20" rx="6" fill="#356AE6"/>
      <path d="M 5 10 L 9 14 L 15 6" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="32" y="14" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#14243A">Explicit User Consent Given</text>
    </g>

    <rect x="25" y="112" width="230" height="32" rx="8" fill="#14243A"/>
    <text x="140" y="132" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF" text-anchor="middle">256-Bit SSL Encrypted Submission</text>
  </g>
</svg>
`;

// 3. Step 3: Complete Lender's Checks
const step3Svg = `
<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g3" x1="0" y1="0" x2="400" y2="240" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#FEF3C7"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" rx="16" fill="url(#g3)"/>
  <circle cx="340" cy="190" r="18" stroke="#356AE6" stroke-width="6" fill="none" opacity="0.3"/>

  <!-- Institutional Verification Graphic -->
  <g transform="translate(60, 40)">
    <rect width="280" height="160" rx="14" fill="#FFFFFF" stroke="#E5EAF1" stroke-width="1.5"/>
    <rect x="20" y="20" width="40" height="40" rx="10" fill="#FEF3C7"/>
    <!-- Checklist Icon -->
    <path d="M 33 40 L 37 44 L 46 34" stroke="#D97706" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="75" y="36" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#14243A">Lender Underwriting</text>
    <text x="75" y="52" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#738096">RBI NBFC Risk Review</text>

    <!-- Checklist rows -->
    <g transform="translate(20, 75)">
      <circle cx="10" cy="10" r="8" fill="#E6F7F4"/>
      <path d="M 7 10 L 9 12 L 13 8" stroke="#278A76" stroke-width="1.5"/>
      <text x="26" y="14" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#202B3C">Identity &amp; KYC Verification</text>

      <circle cx="10" cy="34" r="8" fill="#E6F7F4"/>
      <path d="M 7 34 L 9 36 L 13 32" stroke="#278A76" stroke-width="1.5"/>
      <text x="26" y="38" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#202B3C">Bank Statements &amp; Credit Bureau</text>
    </g>

    <rect x="20" y="125" width="240" height="20" rx="6" fill="#F8FAFC" stroke="#E5EAF1"/>
    <text x="140" y="139" font-family="Inter, sans-serif" font-size="9.5" font-weight="700" fill="#D97706" text-anchor="middle">Regulated Evaluation Protocols</text>
  </g>
</svg>
`;

// 4. Step 4: Review KFS and Decide
const step4Svg = `
<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g4" x1="0" y1="0" x2="400" y2="240" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EFF6FF"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" rx="16" fill="url(#g4)"/>
  <circle cx="60" cy="190" r="14" fill="#36B49B" opacity="0.4"/>

  <!-- KFS Offer Review Graphic -->
  <g transform="translate(60, 40)">
    <rect width="280" height="160" rx="14" fill="#FFFFFF" stroke="#356AE6" stroke-width="1.8"/>
    <rect x="20" y="18" width="240" height="34" rx="8" fill="#EAF1FF"/>
    <text x="140" y="38" font-family="Inter, sans-serif" font-size="11" font-weight="800" fill="#356AE6" text-anchor="middle">Key Facts Statement (KFS)</text>
    
    <g transform="translate(25, 62)">
      <rect x="0" y="0" width="105" height="42" rx="6" fill="#F8FAFC" stroke="#E5EAF1"/>
      <text x="52" y="18" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#738096" text-anchor="middle">Transparent</text>
      <text x="52" y="32" font-family="Inter, sans-serif" font-size="11" font-weight="800" fill="#14243A" text-anchor="middle">All-in APR</text>

      <rect x="120" y="0" width="105" height="42" rx="6" fill="#F8FAFC" stroke="#E5EAF1"/>
      <text x="172" y="18" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#738096" text-anchor="middle">Clear Monthly</text>
      <text x="172" y="32" font-family="Inter, sans-serif" font-size="11" font-weight="800" fill="#14243A" text-anchor="middle">Instalment</text>
    </g>

    <rect x="20" y="116" width="240" height="30" rx="8" fill="#36B49B"/>
    <text x="140" y="135" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">Freedom to Accept or Decline</text>
  </g>
</svg>
`;

// Render 4 Step Cards
renderSvg('step-01-enquiry.png', step1Svg);
renderSvg('step-02-consent.png', step2Svg);
renderSvg('step-03-evaluation.png', step3Svg);
renderSvg('step-04-offer-kfs.png', step4Svg);

// 5. Personal Loan 4 Purpose Cards
const pHome = `
<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="240" rx="16" fill="#F0F6FF"/>
  <circle cx="200" cy="110" r="65" fill="#FFFFFF"/>
  <!-- Modern House Illustration -->
  <path d="M 160 120 L 200 80 L 240 120 V 160 H 160 Z" fill="#356AE6"/>
  <rect x="185" y="130" width="30" height="30" fill="#FFFFFF" rx="4"/>
  <line x1="200" y1="130" x2="200" y2="160" stroke="#356AE6" stroke-width="2"/>
  <line x1="185" y1="145" x2="215" y2="145" stroke="#356AE6" stroke-width="2"/>
  <circle cx="270" cy="90" r="16" fill="#36B49B" opacity="0.3"/>
  <rect x="100" y="195" width="200" height="26" rx="13" fill="#FFFFFF" stroke="#E5EAF1"/>
  <text x="200" y="212" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#14243A" text-anchor="middle">Home Improvement &amp; Living</text>
</svg>
`;

const pMedical = `
<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="240" rx="16" fill="#F0FDF4"/>
  <circle cx="200" cy="110" r="65" fill="#FFFFFF"/>
  <!-- Medical Cross Shield -->
  <path d="M 200 65 L 235 80 V 115 C 235 140 200 155 200 155 C 200 155 165 140 165 115 V 80 Z" fill="#36B49B"/>
  <path d="M 194 95 H 206 V 104 H 215 V 116 H 206 V 125 H 194 V 116 H 185 V 104 H 194 Z" fill="#FFFFFF"/>
  <rect x="90" y="195" width="220" height="26" rx="13" fill="#FFFFFF" stroke="#E5EAF1"/>
  <text x="200" y="212" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#14243A" text-anchor="middle">Medical Emergencies &amp; Family Care</text>
</svg>
`;

const pEdu = `
<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="240" rx="16" fill="#FFFBEB"/>
  <circle cx="200" cy="110" r="65" fill="#FFFFFF"/>
  <!-- Graduation Cap & Certificate -->
  <path d="M 155 105 L 200 85 L 245 105 L 200 125 Z" fill="#D97706"/>
  <path d="M 170 115 V 135 C 170 148 230 148 230 135 V 115" stroke="#D97706" stroke-width="4" fill="none"/>
  <line x1="245" y1="105" x2="252" y2="140" stroke="#D97706" stroke-width="3"/>
  <circle cx="252" cy="144" r="4" fill="#D97706"/>
  <rect x="100" y="195" width="200" height="26" rx="13" fill="#FFFFFF" stroke="#E5EAF1"/>
  <text x="200" y="212" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#14243A" text-anchor="middle">Higher Education &amp; Career</text>
</svg>
`;

const pConsolidate = `
<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="240" rx="16" fill="#F5F3FF"/>
  <circle cx="200" cy="110" r="65" fill="#FFFFFF"/>
  <!-- Consolidation / Balanced Flow -->
  <circle cx="200" cy="110" r="35" stroke="#7C3AED" stroke-width="6" stroke-dasharray="16 10" fill="none"/>
  <circle cx="200" cy="110" r="14" fill="#7C3AED"/>
  <text x="200" y="114" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#FFFFFF" text-anchor="middle">1</text>
  <rect x="100" y="195" width="200" height="26" rx="13" fill="#FFFFFF" stroke="#E5EAF1"/>
  <text x="200" y="212" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#14243A" text-anchor="middle">Debt Unification &amp; Single EMI</text>
</svg>
`;

renderSvg('personal-purpose-home.png', pHome);
renderSvg('personal-purpose-medical.png', pMedical);
renderSvg('personal-purpose-education.png', pEdu);
renderSvg('personal-purpose-consolidation.png', pConsolidate);

// 6. Business Loan 3 Facility Cards
const bWorkCap = `
<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="240" rx="16" fill="#EFF6FF"/>
  <circle cx="200" cy="110" r="65" fill="#FFFFFF"/>
  <!-- Cashflow & Working Capital -->
  <rect x="155" y="85" width="90" height="50" rx="8" fill="#356AE6"/>
  <circle cx="200" cy="110" r="14" fill="#FFFFFF"/>
  <circle cx="200" cy="110" r="10" fill="#356AE6"/>
  <line x1="165" y1="95" x2="175" y2="95" stroke="#FFFFFF" stroke-width="2"/>
  <line x1="225" y1="125" x2="235" y2="125" stroke="#FFFFFF" stroke-width="2"/>
  <rect x="90" y="195" width="220" height="26" rx="13" fill="#FFFFFF" stroke="#E5EAF1"/>
  <text x="200" y="212" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#14243A" text-anchor="middle">Working Capital &amp; Operational Flow</text>
</svg>
`;

const bEquip = `
<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="240" rx="16" fill="#F0FDF4"/>
  <circle cx="200" cy="110" r="65" fill="#FFFFFF"/>
  <!-- Machinery & Tech Equipment -->
  <circle cx="200" cy="110" r="30" stroke="#36B49B" stroke-width="8" stroke-dasharray="14 8" fill="none"/>
  <circle cx="200" cy="110" r="12" fill="#36B49B"/>
  <rect x="85" y="195" width="230" height="26" rx="13" fill="#FFFFFF" stroke="#E5EAF1"/>
  <text x="200" y="212" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#14243A" text-anchor="middle">Equipment &amp; Machinery Expansion</text>
</svg>
`;

const bInventory = `
<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="240" rx="16" fill="#FFFBEB"/>
  <circle cx="200" cy="110" r="65" fill="#FFFFFF"/>
  <!-- Warehouse Logistics / Inventory Box -->
  <path d="M 160 95 L 200 75 L 240 95 L 200 115 Z" fill="#D97706"/>
  <path d="M 160 98 V 135 L 200 155 V 118 Z" fill="#B45309"/>
  <path d="M 240 98 V 135 L 200 155 V 118 Z" fill="#92400E"/>
  <line x1="200" y1="115" x2="200" y2="155" stroke="#FFFFFF" stroke-width="1.5"/>
  <rect x="90" y="195" width="220" height="26" rx="13" fill="#FFFFFF" stroke="#E5EAF1"/>
  <text x="200" y="212" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#14243A" text-anchor="middle">Inventory Growth &amp; Supply Scale</text>
</svg>
`;

renderSvg('business-facility-working-capital.png', bWorkCap);
renderSvg('business-facility-equipment.png', bEquip);
renderSvg('business-facility-inventory.png', bInventory);

// 7. Contact Us Customer Support Hero
const contactHeroSvg = `
<svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgC" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EAF1FF"/>
    </linearGradient>
    <filter id="shadowC" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#14243A" flood-opacity="0.08"/>
    </filter>
  </defs>
  <rect width="800" height="500" rx="24" fill="url(#bgC)"/>

  <g filter="url(#shadowC)">
    <rect x="170" y="60" width="460" height="380" rx="20" fill="#FFFFFF" stroke="#E5EAF1" stroke-width="1.5"/>
    <rect x="170" y="60" width="460" height="60" rx="20" fill="#14243A"/>
    <text x="205" y="96" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF">QvikLoan Facilitation &amp; Support Desk</text>
    <rect x="495" y="78" width="105" height="24" rx="12" fill="#36B49B"/>
    <text x="547" y="94" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">VERIFIED ASSISTANCE</text>

    <!-- Support Center Cards -->
    <g transform="translate(205, 145)">
      <!-- WhatsApp Direct Facilitation -->
      <rect x="0" y="0" width="185" height="100" rx="12" fill="#F0FDF4" stroke="#DCFCE7"/>
      <circle cx="36" cy="36" r="18" fill="#22C55E"/>
      <!-- Phone/Chat Icon -->
      <path d="M 30 36 C 30 40 33 43 37 43 L 42 41 L 43 43 L 41 40 C 43 38 43 34 40 32 C 37 30 33 32 30 36 Z" fill="#FFFFFF"/>
      <text x="64" y="32" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#14243A">WhatsApp Desk</text>
      <text x="64" y="48" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#16A34A">+91 9403891692</text>
      <text x="16" y="80" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#738096">Direct Help &amp; Enquiry Status</text>

      <!-- Email Support -->
      <rect x="205" y="0" width="185" height="100" rx="12" fill="#EFF6FF" stroke="#DBEAFE"/>
      <circle cx="241" cy="36" r="18" fill="#356AE6"/>
      <!-- Mail Icon -->
      <rect x="231" y="28" width="20" height="15" rx="3" fill="#FFFFFF"/>
      <path d="M 231 30 L 241 37 L 251 30" stroke="#356AE6" stroke-width="1.5" fill="none"/>
      <text x="269" y="32" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#14243A">Email Support</text>
      <text x="269" y="48" font-family="Inter, sans-serif" font-size="9.5" font-weight="700" fill="#356AE6">help@qvikloan.com</text>
      <text x="221" y="80" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#738096">24 - 48 Hour Turnaround</text>
    </g>

    <!-- Physical Office Locations Banner -->
    <g transform="translate(205, 265)">
      <rect width="390" height="85" rx="12" fill="#F8FAFC" stroke="#E5EAF1"/>
      <circle cx="36" cy="32" r="16" fill="#14243A"/>
      <circle cx="36" cy="30" r="5" fill="#36B49B"/>
      <text x="64" y="28" font-family="Inter, sans-serif" font-size="11" font-weight="800" fill="#14243A">Dual Operations Presence</text>
      <text x="64" y="44" font-family="Inter, sans-serif" font-size="9.5" font-weight="600" fill="#738096">Registered HQ: Citi Mall, Andheri (W), Mumbai - 400053</text>
      <text x="64" y="60" font-family="Inter, sans-serif" font-size="9.5" font-weight="600" fill="#738096">Corporate Hub: E Block, Above Passport Office, Hubli - 580029</text>
    </g>

    <rect x="205" y="370" width="390" height="34" rx="8" fill="#14243A"/>
    <text x="400" y="392" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#FFFFFF" text-anchor="middle">Official Grievance Officer Escalation Available</text>
  </g>
</svg>
`;

renderSvg('contact-us-hero.png', contactHeroSvg, 800, 500);

console.log('All card & contact illustrations generated successfully.');
