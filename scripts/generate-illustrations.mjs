import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const htmlTemplate = (id, content) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 900px;
      background: linear-gradient(135deg, #F7F8FA 0%, #EAF1FF 100%);
      font-family: 'Inter', sans-serif;
      color: #202B3C;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px;
      overflow: hidden;
    }
    .hero-container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .ambient-circle-1 {
      position: absolute;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(53, 106, 230, 0.08) 0%, rgba(234, 241, 255, 0) 70%);
      top: -100px;
      right: -100px;
      z-index: 1;
    }
    .ambient-circle-2 {
      position: absolute;
      width: 450px;
      height: 450px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(54, 180, 155, 0.08) 0%, rgba(234, 241, 255, 0) 70%);
      bottom: -50px;
      left: -50px;
      z-index: 1;
    }
    .card {
      background: #FFFFFF;
      border-radius: 18px;
      border: 1px solid #E5EAF1;
      box-shadow: 0 16px 40px rgba(20, 36, 58, 0.08);
      position: relative;
      z-index: 2;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 13px;
      font-weight: 600;
    }
    .badge-teal {
      background: #E6F7F4;
      color: #278A76;
      border: 1px solid rgba(54, 180, 155, 0.25);
    }
    .badge-royal {
      background: #EAF1FF;
      color: #356AE6;
      border: 1px solid rgba(53, 106, 230, 0.25);
    }
    .badge-navy {
      background: #14243A;
      color: #FFFFFF;
    }
    h1, h2, h3, h4 {
      font-family: 'Manrope', sans-serif;
    }
  </style>
</head>
<body>
  <div class="hero-container">
    <div class="ambient-circle-1"></div>
    <div class="ambient-circle-2"></div>
    ${content}
  </div>
</body>
</html>
`;

// 1. Hero Illustration
const heroContent = `
<div style="width: 1040px; display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 32px; z-index: 2;">
  <!-- Main Platform Overview Card -->
  <div class="card" style="padding: 36px;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid #E5EAF1;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="width: 44px; height: 44px; background: #EAF1FF; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #356AE6;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 700; color: #14243A;">Loan Enquiry Assessment</h3>
          <p style="font-size: 13px; color: #738096;">Digital facilitation & lender evaluation</p>
        </div>
      </div>
      <span class="badge badge-teal">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
        Participating Lenders Active
      </span>
    </div>

    <!-- Loan Comparison Matrix -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 28px;">
      <div style="background: #F7F8FA; border: 1px solid #E5EAF1; border-radius: 14px; padding: 18px;">
        <span style="font-size: 12px; color: #738096; font-weight: 500; display: block; margin-bottom: 6px;">Evaluation Range</span>
        <span style="font-size: 22px; font-weight: 800; color: #14243A; font-family: 'Manrope';">₹50K - ₹25L</span>
        <span style="font-size: 11px; color: #356AE6; font-weight: 600; display: block; margin-top: 4px;">Subject to eligibility</span>
      </div>
      <div style="background: #F7F8FA; border: 1px solid #E5EAF1; border-radius: 14px; padding: 18px;">
        <span style="font-size: 12px; color: #738096; font-weight: 500; display: block; margin-bottom: 6px;">Indicative APR Range</span>
        <span style="font-size: 22px; font-weight: 800; color: #14243A; font-family: 'Manrope';">10.5% - 24%</span>
        <span style="font-size: 11px; color: #278A76; font-weight: 600; display: block; margin-top: 4px;">Set by lender</span>
      </div>
      <div style="background: #F7F8FA; border: 1px solid #E5EAF1; border-radius: 14px; padding: 18px;">
        <span style="font-size: 12px; color: #738096; font-weight: 500; display: block; margin-bottom: 6px;">Repayment Tenures</span>
        <span style="font-size: 22px; font-weight: 800; color: #14243A; font-family: 'Manrope';">12 - 60 Mo.</span>
        <span style="font-size: 11px; color: #738096; font-weight: 500; display: block; margin-top: 4px;">Flexible options</span>
      </div>
    </div>

    <!-- Transparent Factors List -->
    <div style="background: #EAF1FF; border: 1px solid rgba(53, 106, 230, 0.2); border-radius: 14px; padding: 20px; margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-weight: 700; font-size: 14px; color: #14243A; font-family: 'Manrope';">Key Facts Statement (KFS) Transparency</span>
        <span style="font-size: 12px; color: #356AE6; font-weight: 600;">Full Cost Disclosures</span>
      </div>
      <p style="font-size: 13px; color: #263F60; line-height: 1.5;">
        Every offer made by participating RBI-registered NBFCs includes a clear breakdown of annual percentage rate, processing charges, monthly instalments, and total amount repayable.
      </p>
    </div>

    <!-- Security footnote -->
    <div style="display: flex; align-items: center; gap: 12px; font-size: 12px; color: #738096;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#278A76" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      <span>256-Bit SSL Data Encryption • Consent-Driven Lender Sharing • Jatta M Kommerce Pvt Ltd</span>
    </div>
  </div>

  <!-- Right Side Floating Cards -->
  <div style="display: flex; flex-direction: column; gap: 20px;">
    <!-- Participating Lenders Overview -->
    <div class="card" style="padding: 28px;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
        <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #738096;">Verified Network</span>
        <span class="badge badge-royal">RBI Reg. NBFCs</span>
      </div>
      <h4 style="font-size: 16px; font-weight: 700; color: #14243A; margin-bottom: 12px;">Institutional Lender Review</h4>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: #F7F8FA; border-radius: 10px;">
          <span style="font-size: 13px; font-weight: 600; color: #202B3C;">Eligibility Evaluation</span>
          <span style="font-size: 12px; color: #278A76; font-weight: 600;">Transparent Criteria</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: #F7F8FA; border-radius: 10px;">
          <span style="font-size: 13px; font-weight: 600; color: #202B3C;">Disbursement Authority</span>
          <span style="font-size: 12px; color: #263F60; font-weight: 600;">Direct via Lender</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: #F7F8FA; border-radius: 10px;">
          <span style="font-size: 13px; font-weight: 600; color: #202B3C;">Borrower Choice</span>
          <span style="font-size: 12px; color: #356AE6; font-weight: 600;">Accept or Decline</span>
        </div>
      </div>
    </div>

    <!-- Quick Stats Card -->
    <div class="card" style="padding: 24px; background: #14243A; color: #FFFFFF; border: none;">
      <div style="display: flex; align-items: center; gap: 14px;">
        <div style="width: 48px; height: 48px; border-radius: 14px; background: rgba(53, 106, 230, 0.25); display: flex; align-items: center; justify-content: center; color: #36B49B;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div>
          <div style="font-size: 18px; font-weight: 800; font-family: 'Manrope';">No Hidden Costs</div>
          <div style="font-size: 13px; color: #EAF1FF; opacity: 0.85;">Clear terms prior to loan acceptance</div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

// 2. Personal Loan Card Illustration
const personalLoanContent = `
<div style="width: 1000px; max-width: 1000px; z-index: 2;">
  <div class="card" style="padding: 44px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: center;">
    <div>
      <span class="badge badge-royal" style="margin-bottom: 16px;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        Personal Borrowing Options
      </span>
      <h2 style="font-size: 28px; font-weight: 800; color: #14243A; margin-bottom: 16px;">Transparent Personal Loan Evaluation</h2>
      <p style="font-size: 15px; color: #263F60; line-height: 1.6; margin-bottom: 24px;">
        Compare monthly instalment structures, APR rates, and lender fees before making any financial commitment.
      </p>

      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 10px; font-size: 14px; color: #202B3C;">
          <div style="width: 20px; height: 20px; border-radius: 50%; background: #E6F7F4; display: flex; align-items: center; justify-content: center; color: #278A76;">✓</div>
          <span>Unsecured personal borrowing for planned needs</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; font-size: 14px; color: #202B3C;">
          <div style="width: 20px; height: 20px; border-radius: 50%; background: #E6F7F4; display: flex; align-items: center; justify-content: center; color: #278A76;">✓</div>
          <span>Clear breakdown of total amount repayable</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; font-size: 14px; color: #202B3C;">
          <div style="width: 20px; height: 20px; border-radius: 50%; background: #E6F7F4; display: flex; align-items: center; justify-content: center; color: #278A76;">✓</div>
          <span>Digital application & direct lender evaluation</span>
        </div>
      </div>
    </div>

    <!-- Breakdown Card -->
    <div style="background: #F7F8FA; border: 1px solid #E5EAF1; border-radius: 16px; padding: 28px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <span style="font-size: 13px; font-weight: 700; color: #738096; text-transform: uppercase;">Sample Estimation</span>
        <span class="badge badge-teal">Indicative Model</span>
      </div>

      <div style="margin-bottom: 20px;">
        <span style="font-size: 12px; color: #738096;">Indicative Loan Amount</span>
        <div style="font-size: 26px; font-weight: 800; color: #14243A; font-family: 'Manrope';">₹3,00,000</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 20px;">
        <div style="background: #FFFFFF; border: 1px solid #E5EAF1; border-radius: 10px; padding: 12px;">
          <span style="font-size: 11px; color: #738096; display: block;">Tenure</span>
          <span style="font-size: 15px; font-weight: 700; color: #14243A;">36 Months</span>
        </div>
        <div style="background: #FFFFFF; border: 1px solid #E5EAF1; border-radius: 10px; padding: 12px;">
          <span style="font-size: 11px; color: #738096; display: block;">Sample APR</span>
          <span style="font-size: 15px; font-weight: 700; color: #14243A;">13.5% p.a.</span>
        </div>
      </div>

      <div style="background: #EAF1FF; border: 1px solid rgba(53,106,230,0.15); border-radius: 10px; padding: 14px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="font-size: 12px; color: #263F60;">Monthly Instalment</span>
          <span style="font-size: 14px; font-weight: 800; color: #356AE6;">₹10,180</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="font-size: 12px; color: #263F60;">Total Amount Repayable</span>
          <span style="font-size: 14px; font-weight: 800; color: #14243A;">₹3,66,480</span>
        </div>
      </div>
    </div>
  </div>
</div>
`;

// 3. Business Loan Card Illustration
const businessLoanContent = `
<div style="width: 1000px; max-width: 1000px; z-index: 2;">
  <div class="card" style="padding: 44px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: center;">
    <div>
      <span class="badge badge-teal" style="margin-bottom: 16px;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        Commercial & Enterprise Solutions
      </span>
      <h2 style="font-size: 28px; font-weight: 800; color: #14243A; margin-bottom: 16px;">Working Capital & Growth Financing</h2>
      <p style="font-size: 15px; color: #263F60; line-height: 1.6; margin-bottom: 24px;">
        Explore tailored borrowing products for inventory, equipment, and cash flow expansion from partner institutional lenders.
      </p>

      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 10px; font-size: 14px; color: #202B3C;">
          <div style="width: 20px; height: 20px; border-radius: 50%; background: #EAF1FF; display: flex; align-items: center; justify-content: center; color: #356AE6;">✓</div>
          <span>Working capital & cash-flow expansion lines</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; font-size: 14px; color: #202B3C;">
          <div style="width: 20px; height: 20px; border-radius: 50%; background: #EAF1FF; display: flex; align-items: center; justify-content: center; color: #356AE6;">✓</div>
          <span>Equipment & machinery financing options</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; font-size: 14px; color: #202B3C;">
          <div style="width: 20px; height: 20px; border-radius: 50%; background: #EAF1FF; display: flex; align-items: center; justify-content: center; color: #356AE6;">✓</div>
          <span>Evaluation based on business turnover & vintage</span>
        </div>
      </div>
    </div>

    <!-- Commercial Metrics Card -->
    <div style="background: #F7F8FA; border: 1px solid #E5EAF1; border-radius: 16px; padding: 28px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <span style="font-size: 13px; font-weight: 700; color: #738096; text-transform: uppercase;">Facility Scope</span>
        <span class="badge badge-navy">Business Profile</span>
      </div>

      <div style="display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 20px;">
        <div style="background: #FFFFFF; border: 1px solid #E5EAF1; border-radius: 12px; padding: 14px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <span style="font-size: 11px; color: #738096; display: block;">Turnover Assessment</span>
            <span style="font-size: 14px; font-weight: 700; color: #14243A;">GST & Bank Statements</span>
          </div>
          <span style="font-size: 12px; color: #278A76; font-weight: 600;">Standard Verification</span>
        </div>

        <div style="background: #FFFFFF; border: 1px solid #E5EAF1; border-radius: 12px; padding: 14px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <span style="font-size: 11px; color: #738096; display: block;">Tenure Flexibility</span>
            <span style="font-size: 14px; font-weight: 700; color: #14243A;">12 to 60 Months</span>
          </div>
          <span style="font-size: 12px; color: #356AE6; font-weight: 600;">Custom Schedules</span>
        </div>
      </div>

      <div style="background: #E6F7F4; border: 1px solid rgba(54,180,155,0.25); border-radius: 10px; padding: 14px; display: flex; align-items: center; gap: 12px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#278A76" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        <div style="font-size: 12px; color: #1C2E46; line-height: 1.4;">
          <strong>Institutional Governance:</strong> Terms, documentation, and disbursement are directly handled by the underwriting lender.
        </div>
      </div>
    </div>
  </div>
</div>
`;

// Write temp HTML files and render
const tempDir = path.resolve('public/images/temp');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

const items = [
  { file: 'qvikloan-hero-illustration.png', html: htmlTemplate('hero', heroContent) },
  { file: 'qvikloan-personal-loan-illustration.png', html: htmlTemplate('personal', personalLoanContent) },
  { file: 'qvikloan-business-loan-illustration.png', html: htmlTemplate('business', businessLoanContent) },
];

for (const item of items) {
  const htmlPath = path.join(tempDir, item.file.replace('.png', '.html'));
  const pngPath = path.resolve('public/images', item.file);
  fs.writeFileSync(htmlPath, item.html);
  
  console.log(`Rendering ${item.file}...`);
  execSync(`"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --screenshot="${pngPath}" --window-size=1200,900 "${htmlPath}"`);
  console.log(`Generated: ${pngPath}`);
}

// Clean temp
fs.rmSync(tempDir, { recursive: true, force: true });
console.log('Done generating all 3 illustrations!');
