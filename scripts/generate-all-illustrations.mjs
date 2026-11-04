import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const outDir = path.resolve('public/images');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const renderToPng = (name, svgContent, width = 800, height = 500) => {
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: ${width}px;
      height: ${height}px;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    svg {
      width: ${width}px;
      height: ${height}px;
    }
  </style>
</head>
<body>
  ${svgContent}
</body>
</html>`;

  const tmpHtml = path.resolve(`.tmp_${name}.html`);
  const outPng = path.resolve(outDir, name);
  fs.writeFileSync(tmpHtml, html, 'utf8');

  try {
    execSync(
      `/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --headless=new --disable-gpu --window-size=${width},${height} --default-background-color=00000000 --screenshot="${outPng}" "file://${tmpHtml}"`,
      { stdio: 'pipe' }
    );
    console.log(`Rendered: ${name} (${width}x${height})`);
  } catch (err) {
    console.error(`Failed to render ${name}:`, err.message);
  } finally {
    if (fs.existsSync(tmpHtml)) fs.unlinkSync(tmpHtml);
  }
};

// 1. Personal Loans Hero Illustration
const personalHeroSvg = `
<svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgP" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F7F9FC"/>
      <stop offset="100%" stop-color="#EAF1FF"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
    <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#356AE6"/>
      <stop offset="100%" stop-color="#14243A"/>
    </linearGradient>
    <linearGradient id="tealGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#36B49B"/>
      <stop offset="100%" stop-color="#1E6B5C"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#14243A" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="500" rx="24" fill="url(#bgP)"/>
  
  <!-- Subtle decorative background vectors -->
  <circle cx="700" cy="90" r="120" stroke="#356AE6" stroke-width="2" stroke-dasharray="6 6" opacity="0.18"/>
  <circle cx="100" cy="400" r="90" stroke="#36B49B" stroke-width="2" stroke-dasharray="4 4" opacity="0.2"/>
  <path d="M 640 400 A 60 60 0 0 1 700 460" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.4"/>
  <path d="M 60 80 A 50 50 0 0 0 110 30" stroke="#8B5CF6" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.4"/>

  <!-- Central Modern Financial Dashboard Card -->
  <g filter="url(#shadow)">
    <rect x="180" y="55" width="440" height="390" rx="20" fill="url(#cardGrad)" stroke="#E5EAF1" stroke-width="1.5"/>
    
    <!-- Card Header / Nav bar -->
    <rect x="180" y="55" width="440" height="55" rx="20" fill="#FFFFFF"/>
    <circle cx="215" cy="82" r="6" fill="#F43F5E"/>
    <circle cx="233" cy="82" r="6" fill="#F59E0B"/>
    <circle cx="251" cy="82" r="6" fill="#10B981"/>
    <rect x="290" y="74" width="160" height="16" rx="8" fill="#EAF1FF"/>
    <rect x="470" y="72" width="125" height="20" rx="10" fill="#E6F7F4"/>
    <text x="532" y="86" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#278A76" text-anchor="middle">RBI REGULATED</text>

    <!-- Content in Dashboard -->
    <rect x="215" y="130" width="180" height="18" rx="4" fill="#14243A" opacity="0.9"/>
    <rect x="215" y="156" width="230" height="10" rx="3" fill="#738096" opacity="0.4"/>
    <rect x="215" y="172" width="190" height="10" rx="3" fill="#738096" opacity="0.3"/>

    <!-- Interactive Slider simulation in illustration -->
    <rect x="215" y="205" width="370" height="42" rx="12" fill="#F7F8FA" stroke="#E5EAF1"/>
    <circle cx="240" cy="226" r="12" fill="#EAF1FF"/>
    <path d="M 235 226 L 245 226 M 240 221 L 240 231" stroke="#356AE6" stroke-width="2" stroke-linecap="round"/>
    <rect x="265" y="222" width="140" height="8" rx="4" fill="#356AE6" opacity="0.7"/>
    <circle cx="405" cy="226" r="10" fill="#356AE6"/>
    <circle cx="405" cy="226" r="4" fill="#FFFFFF"/>
    <rect x="430" y="222" width="130" height="8" rx="4" fill="#E5EAF1"/>

    <!-- 4 Purpose Tiles in Illustration -->
    <g transform="translate(215, 268)">
      <!-- Home Improvement Tile -->
      <rect x="0" y="0" width="85" height="80" rx="10" fill="#FFFFFF" stroke="#E5EAF1"/>
      <circle cx="42" cy="30" r="16" fill="#EAF1FF"/>
      <!-- Home Icon -->
      <path d="M 33 32 L 42 24 L 51 32 V 40 H 46 V 34 H 38 V 40 H 33 Z" fill="#356AE6"/>
      <rect x="15" y="55" width="55" height="6" rx="3" fill="#202B3C" opacity="0.8"/>
      <rect x="22" y="65" width="40" height="5" rx="2.5" fill="#738096" opacity="0.5"/>

      <!-- Medical & Family Tile -->
      <rect x="95" y="0" width="85" height="80" rx="10" fill="#FFFFFF" stroke="#E5EAF1"/>
      <circle cx="137" cy="30" r="16" fill="#E6F7F4"/>
      <!-- Cross Icon -->
      <path d="M 134 24 H 140 V 27 H 143 V 33 H 140 V 36 H 134 V 33 H 131 V 27 H 134 Z" fill="#36B49B"/>
      <rect x="110" y="55" width="55" height="6" rx="3" fill="#202B3C" opacity="0.8"/>
      <rect x="117" y="65" width="40" height="5" rx="2.5" fill="#738096" opacity="0.5"/>

      <!-- Education Tile -->
      <rect x="190" y="0" width="85" height="80" rx="10" fill="#FFFFFF" stroke="#E5EAF1"/>
      <circle cx="232" cy="30" r="16" fill="#FEF3C7"/>
      <!-- Cap Icon -->
      <path d="M 222 28 L 232 23 L 242 28 L 232 33 Z M 225 31 V 36 C 225 38 239 38 239 36 V 31" stroke="#D97706" stroke-width="1.8" fill="none" stroke-linejoin="round"/>
      <rect x="205" y="55" width="55" height="6" rx="3" fill="#202B3C" opacity="0.8"/>
      <rect x="212" y="65" width="40" height="5" rx="2.5" fill="#738096" opacity="0.5"/>

      <!-- Debt Consolidation Tile -->
      <rect x="285" y="0" width="85" height="80" rx="10" fill="#FFFFFF" stroke="#E5EAF1"/>
      <circle cx="327" cy="30" r="16" fill="#F3E8FF"/>
      <!-- Refresh/Unify Icon -->
      <path d="M 322 26 A 7 7 0 1 1 321 34" stroke="#7C3AED" stroke-width="2" fill="none" stroke-linecap="round"/>
      <polyline points="320,23 322,26 325,24" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <rect x="300" y="55" width="55" height="6" rx="3" fill="#202B3C" opacity="0.8"/>
      <rect x="307" y="65" width="40" height="5" rx="2.5" fill="#738096" opacity="0.5"/>
    </g>

    <!-- Bottom Status Bar -->
    <rect x="215" y="370" width="370" height="48" rx="12" fill="#14243A"/>
    <circle cx="240" cy="394" r="10" fill="#36B49B"/>
    <path d="M 236 394 L 239 397 L 244 391" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="260" y="398" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF">Direct Online Enquiry • Transparent KFS Disclosure</text>
  </g>

  <!-- Left Floating Shield Badge -->
  <g filter="url(#shadow)" transform="translate(60, 160)">
    <rect width="160" height="110" rx="16" fill="#FFFFFF" stroke="#E5EAF1"/>
    <circle cx="80" cy="38" r="22" fill="#EAF1FF"/>
    <!-- Shield Icon -->
    <path d="M 80 26 L 91 30 V 38 C 91 46 80 50 80 50 C 80 50 69 46 69 38 V 30 Z" fill="#356AE6"/>
    <path d="M 76 38 L 79 41 L 84 35" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="80" y="76" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#14243A" text-anchor="middle">100% Transparent</text>
    <text x="80" y="92" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#738096" text-anchor="middle">No Hidden Charges</text>
  </g>

  <!-- Right Floating Key Facts Statement (KFS) Badge -->
  <g filter="url(#shadow)" transform="translate(580, 240)">
    <rect width="160" height="130" rx="16" fill="#FFFFFF" stroke="#E5EAF1"/>
    <rect x="20" y="20" width="32" height="32" rx="8" fill="#E6F7F4"/>
    <!-- Document Icon -->
    <path d="M 30 26 H 42 V 46 H 30 Z M 33 30 H 39 M 33 34 H 39 M 33 38 H 37" stroke="#36B49B" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <text x="60" y="34" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#14243A">Key Facts</text>
    <text x="60" y="48" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#738096">Statement (KFS)</text>
    
    <rect x="20" y="68" width="120" height="8" rx="4" fill="#F7F8FA"/>
    <rect x="20" y="82" width="100" height="8" rx="4" fill="#F7F8FA"/>
    <rect x="20" y="96" width="120" height="20" rx="6" fill="#EAF1FF"/>
    <text x="80" y="110" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#356AE6" text-anchor="middle">Clear APR Review</text>
  </g>
</svg>
`;

// 2. Business Loans Hero Illustration
const businessHeroSvg = `
<svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgB" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EDF5F3"/>
    </linearGradient>
    <linearGradient id="cardGradB" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F7FAFB"/>
    </linearGradient>
    <filter id="shadowB" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#14243A" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="500" rx="24" fill="url(#bgB)"/>

  <!-- Subtle background grid lines & shapes -->
  <line x1="100" y1="0" x2="100" y2="500" stroke="#E5EAF1" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/>
  <line x1="300" y1="0" x2="300" y2="500" stroke="#E5EAF1" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/>
  <line x1="500" y1="0" x2="500" y2="500" stroke="#E5EAF1" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/>
  <line x1="700" y1="0" x2="700" y2="500" stroke="#E5EAF1" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/>
  
  <path d="M 680 70 A 50 50 0 0 1 730 120" stroke="#36B49B" stroke-width="8" stroke-linecap="round" fill="none" opacity="0.5"/>
  <circle cx="80" cy="100" r="16" stroke="#0284C7" stroke-width="6" fill="none" opacity="0.4"/>
  <circle cx="720" cy="420" r="14" fill="#F59E0B" opacity="0.5"/>

  <!-- Main Business Architecture Card -->
  <g filter="url(#shadowB)">
    <rect x="170" y="55" width="460" height="390" rx="20" fill="url(#cardGradB)" stroke="#E5EAF1" stroke-width="1.5"/>

    <!-- Header -->
    <rect x="170" y="55" width="460" height="55" rx="20" fill="#FFFFFF"/>
    <circle cx="205" cy="82" r="6" fill="#F43F5E"/>
    <circle cx="223" cy="82" r="6" fill="#F59E0B"/>
    <circle cx="241" cy="82" r="6" fill="#10B981"/>
    <text x="270" y="87" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#14243A">Commercial Credit Facilitation</text>
    <rect x="490" y="70" width="120" height="24" rx="12" fill="#E6F7F4"/>
    <text x="550" y="86" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#278A76" text-anchor="middle">SME & ENTERPRISE</text>

    <!-- Growth Graph & Analytics Area -->
    <g transform="translate(205, 125)">
      <rect width="390" height="130" rx="12" fill="#FFFFFF" stroke="#E5EAF1"/>
      <text x="18" y="26" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#738096">GROWTH & CASHFLOW HORIZON</text>
      
      <!-- Graph trendline -->
      <path d="M 20 100 Q 90 90, 150 70 T 260 50 T 360 25" fill="none" stroke="#36B49B" stroke-width="3" stroke-linecap="round"/>
      <!-- Soft gradient fill under curve -->
      <path d="M 20 100 Q 90 90, 150 70 T 260 50 T 360 25 V 115 H 20 Z" fill="#36B49B" fill-opacity="0.08"/>
      
      <!-- Graph points -->
      <circle cx="150" cy="70" r="4" fill="#36B49B"/>
      <circle cx="260" cy="50" r="4" fill="#36B49B"/>
      <circle cx="360" cy="25" r="5" fill="#36B49B" stroke="#FFFFFF" stroke-width="2"/>

      <line x1="20" y1="115" x2="370" y2="115" stroke="#E5EAF1" stroke-width="1"/>
      
      <!-- Graph badges -->
      <rect x="270" y="75" width="95" height="22" rx="6" fill="#EAF1FF"/>
      <text x="317" y="89" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#356AE6" text-anchor="middle">SCALABLE SCALE</text>
    </g>

    <!-- 3 Business Facility Columns in Illustration -->
    <g transform="translate(205, 275)">
      <!-- Working Capital -->
      <rect x="0" y="0" width="122" height="95" rx="10" fill="#FFFFFF" stroke="#E5EAF1"/>
      <circle cx="61" cy="28" r="16" fill="#EAF1FF"/>
      <!-- Cashflow Icon -->
      <rect x="52" y="22" width="18" height="12" rx="2" stroke="#356AE6" stroke-width="1.8" fill="none"/>
      <circle cx="61" cy="28" r="3" fill="#356AE6"/>
      <text x="61" y="58" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#14243A" text-anchor="middle">Working Capital</text>
      <text x="61" y="72" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#738096" text-anchor="middle">Operational Flow</text>

      <!-- Machinery & Equipment -->
      <rect x="134" y="0" width="122" height="95" rx="10" fill="#FFFFFF" stroke="#E5EAF1"/>
      <circle cx="195" cy="28" r="16" fill="#E6F7F4"/>
      <!-- Machinery Gear Icon -->
      <circle cx="195" cy="28" r="7" stroke="#36B49B" stroke-width="2" fill="none"/>
      <path d="M 195 18 V 21 M 195 35 V 38 M 185 28 H 188 M 202 28 H 205" stroke="#36B49B" stroke-width="2" stroke-linecap="round"/>
      <text x="195" y="58" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#14243A" text-anchor="middle">Equipment Finance</text>
      <text x="195" y="72" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#738096" text-anchor="middle">Asset Acquisition</text>

      <!-- Inventory Expansion -->
      <rect x="268" y="0" width="122" height="95" rx="10" fill="#FFFFFF" stroke="#E5EAF1"/>
      <circle cx="329" cy="28" r="16" fill="#FEF3C7"/>
      <!-- Warehouse Box Icon -->
      <path d="M 321 24 L 329 20 L 337 24 L 329 28 Z M 321 25 V 33 L 329 37 V 29 Z M 337 25 V 33 L 329 37 V 29 Z" stroke="#D97706" stroke-width="1.6" fill="none" stroke-linejoin="round"/>
      <text x="329" y="58" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#14243A" text-anchor="middle">Inventory Scale</text>
      <text x="329" y="72" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#738096" text-anchor="middle">Supply Continuity</text>
    </g>

    <!-- Bottom Notice -->
    <rect x="205" y="388" width="390" height="36" rx="8" fill="#14243A"/>
    <text x="400" y="410" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF" text-anchor="middle">Lender-Evaluated Sanctions • Custom Business Tenures</text>
  </g>

  <!-- Left Floating GST Badge -->
  <g filter="url(#shadowB)" transform="translate(50, 200)">
    <rect width="150" height="95" rx="14" fill="#FFFFFF" stroke="#E5EAF1"/>
    <circle cx="75" cy="32" r="18" fill="#E6F7F4"/>
    <path d="M 68 32 L 73 37 L 82 28" stroke="#36B49B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="75" y="65" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#14243A" text-anchor="middle">Verified Documents</text>
    <text x="75" y="80" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#738096" text-anchor="middle">GST & Financials</text>
  </g>

  <!-- Right Floating Institutional Underwriting Badge -->
  <g filter="url(#shadowB)" transform="translate(600, 160)">
    <rect width="150" height="110" rx="14" fill="#FFFFFF" stroke="#E5EAF1"/>
    <circle cx="75" cy="34" r="18" fill="#EAF1FF"/>
    <!-- Building Icon -->
    <path d="M 66 38 V 28 L 75 23 L 84 28 V 38 H 66 Z M 71 38 V 33 H 79 V 38" stroke="#356AE6" stroke-width="1.8" fill="none" stroke-linejoin="round"/>
    <text x="75" y="68" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#14243A" text-anchor="middle">Institutional</text>
    <text x="75" y="82" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#356AE6" text-anchor="middle">Lenders Only</text>
    <text x="75" y="96" font-family="Inter, sans-serif" font-size="8" font-weight="500" fill="#738096" text-anchor="middle">RBI Registered NBFCs</text>
  </g>
</svg>
`;

// 3. How It Works Hero Illustration
const howItWorksHeroSvg = `
<svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgH" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F7F9FC"/>
      <stop offset="100%" stop-color="#EFF6FF"/>
    </linearGradient>
    <filter id="shadowH" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#14243A" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="500" rx="24" fill="url(#bgH)"/>

  <!-- Connecting Journey Flow Line -->
  <path d="M 120 250 C 260 170, 340 330, 480 220 S 640 280, 700 240" fill="none" stroke="#356AE6" stroke-width="3" stroke-dasharray="6 6" opacity="0.3"/>

  <!-- 4 Connected Interactive Stations -->
  
  <!-- Station 1: Online Enquiry -->
  <g filter="url(#shadowH)" transform="translate(60, 160)">
    <rect width="145" height="180" rx="16" fill="#FFFFFF" stroke="#E5EAF1" stroke-width="1.5"/>
    <circle cx="72" cy="42" r="24" fill="#EAF1FF"/>
    <!-- Form Icon -->
    <rect x="60" y="32" width="24" height="20" rx="4" stroke="#356AE6" stroke-width="2" fill="none"/>
    <line x1="65" y1="38" x2="75" y2="38" stroke="#356AE6" stroke-width="2" stroke-linecap="round"/>
    <line x1="65" y1="44" x2="79" y2="44" stroke="#356AE6" stroke-width="2" stroke-linecap="round"/>
    
    <span class="step-badge">
      <rect x="42" y="80" width="60" height="18" rx="9" fill="#14243A"/>
      <text x="72" y="93" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">STEP 01</text>
    </span>

    <text x="72" y="118" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#14243A" text-anchor="middle">Online</text>
    <text x="72" y="134" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#14243A" text-anchor="middle">Enquiry</text>
    <text x="72" y="154" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#738096" text-anchor="middle">Select Category</text>
  </g>

  <!-- Station 2: Consent & Details -->
  <g filter="url(#shadowH)" transform="translate(235, 110)">
    <rect width="145" height="180" rx="16" fill="#FFFFFF" stroke="#E5EAF1" stroke-width="1.5"/>
    <circle cx="72" cy="42" r="24" fill="#E6F7F4"/>
    <!-- Lock & Shield Icon -->
    <path d="M 72 28 L 82 32 V 40 C 82 48 72 52 72 52 C 72 52 62 48 62 40 V 32 Z" fill="#36B49B"/>
    <circle cx="72" cy="38" r="3" fill="#FFFFFF"/>
    <path d="M 72 41 V 44" stroke="#FFFFFF" stroke-width="1.5"/>

    <rect x="42" y="80" width="60" height="18" rx="9" fill="#278A76"/>
    <text x="72" y="93" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">STEP 02</text>

    <text x="72" y="118" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#14243A" text-anchor="middle">Explicit</text>
    <text x="72" y="134" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#14243A" text-anchor="middle">Consent</text>
    <text x="72" y="154" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#738096" text-anchor="middle">Encrypted Details</text>
  </g>

  <!-- Station 3: Lender Evaluation -->
  <g filter="url(#shadowH)" transform="translate(410, 190)">
    <rect width="145" height="180" rx="16" fill="#FFFFFF" stroke="#E5EAF1" stroke-width="1.5"/>
    <circle cx="72" cy="42" r="24" fill="#FEF3C7"/>
    <!-- Assessment Checklist Icon -->
    <rect x="60" y="30" width="24" height="24" rx="4" stroke="#D97706" stroke-width="2" fill="none"/>
    <path d="M 65 42 L 70 46 L 78 36" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

    <rect x="42" y="80" width="60" height="18" rx="9" fill="#D97706"/>
    <text x="72" y="93" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">STEP 03</text>

    <text x="72" y="118" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#14243A" text-anchor="middle">Lender</text>
    <text x="72" y="134" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#14243A" text-anchor="middle">Evaluation</text>
    <text x="72" y="154" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#738096" text-anchor="middle">Independent Check</text>
  </g>

  <!-- Station 4: KFS & Informed Decision -->
  <g filter="url(#shadowH)" transform="translate(585, 130)">
    <rect width="155" height="190" rx="16" fill="#FFFFFF" stroke="#356AE6" stroke-width="2"/>
    <circle cx="77" cy="42" r="24" fill="#EAF1FF"/>
    <!-- Agreement Seal Icon -->
    <circle cx="77" cy="42" r="14" stroke="#356AE6" stroke-width="2" fill="none"/>
    <path d="M 72 42 L 76 46 L 83 38" stroke="#356AE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

    <rect x="47" y="82" width="60" height="18" rx="9" fill="#356AE6"/>
    <text x="77" y="95" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">STEP 04</text>

    <text x="77" y="120" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#14243A" text-anchor="middle">Review KFS</text>
    <text x="77" y="136" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#356AE6" text-anchor="middle">&amp; Decide</text>
    <text x="77" y="156" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#278A76" text-anchor="middle">Freedom to Decline</text>
  </g>

  <!-- Bottom Floating Guarantee Banner -->
  <g filter="url(#shadowH)" transform="translate(160, 410)">
    <rect width="480" height="50" rx="14" fill="#FFFFFF" stroke="#E5EAF1"/>
    <circle cx="35" cy="25" r="14" fill="#E6F7F4"/>
    <path d="M 30 25 L 34 29 L 41 21" stroke="#36B49B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="60" y="29" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#14243A">Complete Borrower Autonomy:</text>
    <text x="250" y="29" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#738096">No obligation or lock-in to accept any offer.</text>
  </g>
</svg>
`;

// 4. About Us Hero Illustration
const aboutUsHeroSvg = `
<svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgA" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EAF1FF"/>
    </linearGradient>
    <filter id="shadowA" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#14243A" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="500" rx="24" fill="url(#bgA)"/>

  <!-- Institutional Building & Hub Illustration -->
  <g filter="url(#shadowA)">
    <rect x="180" y="60" width="440" height="380" rx="20" fill="#FFFFFF" stroke="#E5EAF1" stroke-width="1.5"/>

    <!-- Header -->
    <rect x="180" y="60" width="440" height="60" rx="20" fill="#14243A"/>
    <text x="210" y="96" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF">Jatta M Kommerce Private Limited</text>
    <rect x="500" y="78" width="100" height="24" rx="12" fill="#36B49B"/>
    <text x="550" y="94" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">ESTABLISHED</text>

    <!-- Facilitation Bridge Diagram in Card -->
    <g transform="translate(210, 140)">
      <!-- Left Entity: Borrowers -->
      <rect x="0" y="0" width="110" height="90" rx="12" fill="#F8FAFC" stroke="#E5EAF1"/>
      <circle cx="55" cy="30" r="16" fill="#EAF1FF"/>
      <!-- Users Icon -->
      <circle cx="55" cy="26" r="6" fill="#356AE6"/>
      <path d="M 44 40 C 44 35, 66 35, 66 40" stroke="#356AE6" stroke-width="2" fill="none"/>
      <text x="55" y="62" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#14243A" text-anchor="middle">Borrowers</text>
      <text x="55" y="76" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#738096" text-anchor="middle">Individuals &amp; SMEs</text>

      <!-- Center Entity: QvikLoan Platform Bridge -->
      <rect x="135" y="0" width="110" height="90" rx="12" fill="#14243A"/>
      <circle cx="190" cy="30" r="16" fill="#356AE6"/>
      <!-- Q Arrow / Platform Icon -->
      <circle cx="190" cy="30" r="8" stroke="#FFFFFF" stroke-width="2" fill="none"/>
      <path d="M 186 34 L 196 24" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
      <text x="190" y="62" font-family="Inter, sans-serif" font-size="11" font-weight="800" fill="#FFFFFF" text-anchor="middle">QvikLoan</text>
      <text x="190" y="76" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#36B49B" text-anchor="middle">Digital Platform</text>

      <!-- Right Entity: Regulated Lenders -->
      <rect x="270" y="0" width="110" height="90" rx="12" fill="#F8FAFC" stroke="#E5EAF1"/>
      <circle cx="325" cy="30" r="16" fill="#E6F7F4"/>
      <!-- Bank Icon -->
      <path d="M 317 34 V 28 L 325 24 L 333 28 V 34" stroke="#278A76" stroke-width="1.8" fill="none"/>
      <line x1="315" y1="34" x2="335" y2="34" stroke="#278A76" stroke-width="2"/>
      <text x="325" y="62" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#14243A" text-anchor="middle">Lenders</text>
      <text x="325" y="76" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#738096" text-anchor="middle">RBI-Regulated NBFCs</text>

      <!-- Connecting arrows -->
      <path d="M 112 45 L 133 45" stroke="#356AE6" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3"/>
      <path d="M 247 45 L 268 45" stroke="#36B49B" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3"/>
    </g>

    <!-- Two Dual Presence Corporate Cards -->
    <g transform="translate(210, 255)">
      <!-- Registered Office Mumbai -->
      <rect x="0" y="0" width="185" height="95" rx="10" fill="#F8FAFC" stroke="#E5EAF1"/>
      <circle cx="28" cy="28" r="14" fill="#EAF1FF"/>
      <!-- Pin Icon -->
      <circle cx="28" cy="26" r="4" fill="#356AE6"/>
      <path d="M 28 30 V 35" stroke="#356AE6" stroke-width="2"/>
      <text x="50" y="26" font-family="Inter, sans-serif" font-size="11" font-weight="800" fill="#14243A">Registered Office</text>
      <text x="50" y="40" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#356AE6">Mumbai, Maharashtra</text>
      <text x="14" y="64" font-family="Inter, sans-serif" font-size="8.5" font-weight="500" fill="#738096">220, Citi Mall, New Link Road,</text>
      <text x="14" y="78" font-family="Inter, sans-serif" font-size="8.5" font-weight="500" fill="#738096">Andheri (W), Mumbai - 400053</text>

      <!-- Corporate Office Hubli -->
      <rect x="195" y="0" width="185" height="95" rx="10" fill="#F8FAFC" stroke="#E5EAF1"/>
      <circle cx="223" cy="28" r="14" fill="#E6F7F4"/>
      <!-- Building Pin Icon -->
      <circle cx="223" cy="26" r="4" fill="#36B49B"/>
      <path d="M 223 30 V 35" stroke="#36B49B" stroke-width="2"/>
      <text x="245" y="26" font-family="Inter, sans-serif" font-size="11" font-weight="800" fill="#14243A">Corporate Office</text>
      <text x="245" y="40" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#278A76">Hubli, Karnataka</text>
      <text x="209" y="64" font-family="Inter, sans-serif" font-size="8.5" font-weight="500" fill="#738096">Park, 2nd Floor, E Block,</text>
      <text x="209" y="78" font-family="Inter, sans-serif" font-size="8.5" font-weight="500" fill="#738096">Above Passport Office - 580029</text>
    </g>

    <rect x="210" y="365" width="380" height="35" rx="8" fill="#F0F5FF"/>
    <text x="400" y="386" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#356AE6" text-anchor="middle">CIN: U72900MH2021PTC368945 • Direct Technology Intermediary</text>
  </g>
</svg>
`;

// 5. Participating Lenders Hero Illustration
const lendersHeroSvg = `
<svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgL" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EDF5F3"/>
    </linearGradient>
    <filter id="shadowL" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#14243A" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="500" rx="24" fill="url(#bgL)"/>

  <!-- Main Bank Network Card -->
  <g filter="url(#shadowL)">
    <rect x="160" y="60" width="480" height="380" rx="20" fill="#FFFFFF" stroke="#E5EAF1" stroke-width="1.5"/>

    <!-- Top Badge -->
    <rect x="160" y="60" width="480" height="55" rx="20" fill="#FFFFFF"/>
    <rect x="190" y="74" width="160" height="26" rx="13" fill="#E6F7F4"/>
    <circle cx="204" cy="87" r="5" fill="#36B49B"/>
    <text x="270" y="91" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#278A76" text-anchor="middle">RBI-REGULATED PARTNERS</text>
    
    <rect x="490" y="74" width="120" height="26" rx="13" fill="#EAF1FF"/>
    <text x="550" y="91" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#356AE6" text-anchor="middle">SECURE LENDING</text>

    <!-- Lender Cards Grid in Illustration -->
    <g transform="translate(190, 130)">
      <!-- NBFC 1 -->
      <rect x="0" y="0" width="200" height="95" rx="12" fill="#F8FAFC" stroke="#E5EAF1"/>
      <circle cx="32" cy="32" r="16" fill="#EAF1FF"/>
      <path d="M 25 35 V 27 L 32 23 L 39 27 V 35" stroke="#356AE6" stroke-width="1.8" fill="none"/>
      <text x="58" y="28" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#14243A">Bhanix Finance</text>
      <text x="58" y="42" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#738096">RBI Reg: B-14.03456</text>
      <rect x="16" y="60" width="168" height="22" rx="6" fill="#FFFFFF" stroke="#E5EAF1"/>
      <text x="100" y="75" font-family="Inter, sans-serif" font-size="9.5" font-weight="700" fill="#278A76" text-anchor="middle">Regulated NBFC Partner</text>

      <!-- NBFC 2 -->
      <rect x="220" y="0" width="200" height="95" rx="12" fill="#F8FAFC" stroke="#E5EAF1"/>
      <circle cx="252" cy="32" r="16" fill="#E6F7F4"/>
      <path d="M 245 35 V 27 L 252 23 L 259 27 V 35" stroke="#36B49B" stroke-width="1.8" fill="none"/>
      <text x="278" y="28" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#14243A">Krazybee Services</text>
      <text x="278" y="42" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#738096">RBI Reg: N-14.03282</text>
      <rect x="236" y="60" width="168" height="22" rx="6" fill="#FFFFFF" stroke="#E5EAF1"/>
      <text x="320" y="75" font-family="Inter, sans-serif" font-size="9.5" font-weight="700" fill="#278A76" text-anchor="middle">Regulated NBFC Partner</text>

      <!-- NBFC 3 -->
      <rect x="0" y="110" width="200" height="95" rx="12" fill="#F8FAFC" stroke="#E5EAF1"/>
      <circle cx="32" cy="142" r="16" fill="#FEF3C7"/>
      <path d="M 25 145 V 137 L 32 133 L 39 137 V 145" stroke="#D97706" stroke-width="1.8" fill="none"/>
      <text x="58" y="138" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#14243A">Fairassets Technologies</text>
      <text x="58" y="152" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#738096">RBI Reg: N-14.03487</text>
      <rect x="16" y="170" width="168" height="22" rx="6" fill="#FFFFFF" stroke="#E5EAF1"/>
      <text x="100" y="185" font-family="Inter, sans-serif" font-size="9.5" font-weight="700" fill="#278A76" text-anchor="middle">Regulated NBFC Partner</text>

      <!-- NBFC 4 -->
      <rect x="220" y="110" width="200" height="95" rx="12" fill="#F8FAFC" stroke="#E5EAF1"/>
      <circle cx="252" cy="142" r="16" fill="#F3E8FF"/>
      <path d="M 245 145 V 137 L 252 133 L 259 137 V 145" stroke="#7C3AED" stroke-width="1.8" fill="none"/>
      <text x="278" y="138" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#14243A">Lendingkart Finance</text>
      <text x="278" y="152" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#738096">RBI Reg: B-05.05063</text>
      <rect x="236" y="170" width="168" height="22" rx="6" fill="#FFFFFF" stroke="#E5EAF1"/>
      <text x="320" y="185" font-family="Inter, sans-serif" font-size="9.5" font-weight="700" fill="#278A76" text-anchor="middle">Regulated NBFC Partner</text>
    </g>

    <!-- Bottom Shield Disclosures -->
    <rect x="190" y="360" width="420" height="42" rx="10" fill="#14243A"/>
    <text x="400" y="386" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF" text-anchor="middle">Direct Disbursement by Lenders • Key Facts Statements (KFS)</text>
  </g>
</svg>
`;

// Render all 5 high-fidelity hero visuals
renderToPng('personal-loans-hero.png', personalHeroSvg);
renderToPng('business-loans-hero.png', businessHeroSvg);
renderToPng('how-it-works-hero.png', howItWorksHeroSvg);
renderToPng('about-us-hero.png', aboutUsHeroSvg);
renderToPng('participating-lenders-hero.png', lendersHeroSvg);

console.log('All bespoke fintech illustrations successfully generated.');

