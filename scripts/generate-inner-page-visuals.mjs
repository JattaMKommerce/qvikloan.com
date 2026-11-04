import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const baseHtml = (content) => `
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
      width: 800px;
      height: 520px;
      background: linear-gradient(135deg, #F7F8FA 0%, #EAF1FF 100%);
      font-family: 'Inter', sans-serif;
      color: #202B3C;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px;
      overflow: hidden;
    }
    .card {
      background: #FFFFFF;
      border-radius: 18px;
      border: 1px solid #E5EAF1;
      box-shadow: 0 16px 36px rgba(20, 36, 58, 0.08);
      padding: 28px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
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
    .badge-teal { background: #E6F7F4; color: #278A76; border: 1px solid rgba(54, 180, 155, 0.25); }
    .badge-royal { background: #EAF1FF; color: #356AE6; border: 1px solid rgba(53, 106, 230, 0.25); }
    .badge-navy { background: #14243A; color: #FFFFFF; }
    h1, h2, h3, h4 { font-family: 'Manrope', sans-serif; }
  </style>
</head>
<body>
  ${content}
</body>
</html>
`;

const visuals = [
  // 1. Personal Loans Hero Graphic
  {
    name: 'personal-loans-hero.png',
    html: baseHtml(`
      <div class="card" style="background: linear-gradient(135deg, #FFFFFF 60%, #F0F5FF 100%);">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="badge badge-royal">Personal Loan Evaluation</span>
          <span style="font-size: 12px; font-weight: 700; color: #278A76;">● RBI Regulated Lenders</span>
        </div>
        
        <div style="display:grid; grid-template-columns: 1.2fr 0.8fr; gap: 20px; align-items:center; margin: 15px 0;">
          <div>
            <h2 style="font-size: 26px; font-weight: 800; color: #14243A; margin-bottom: 8px;">Transparent Personal Financing</h2>
            <p style="font-size: 13px; color: #263F60; line-height: 1.5;">Structured borrowing for planned personal commitments with all-inclusive APR breakdown and clear monthly instalments.</p>
            
            <div style="display:flex; gap: 10px; margin-top: 15px;">
              <div style="background:#FFFFFF; border:1px solid #E5EAF1; border-radius:10px; padding:8px 12px; font-size:12px;">
                <span style="color:#738096; display:block;">Amount Range</span>
                <strong style="color:#14243A; font-size:14px;">₹50K – ₹25L</strong>
              </div>
              <div style="background:#FFFFFF; border:1px solid #E5EAF1; border-radius:10px; padding:8px 12px; font-size:12px;">
                <span style="color:#738096; display:block;">Tenure Span</span>
                <strong style="color:#14243A; font-size:14px;">12 – 60 Mo.</strong>
              </div>
              <div style="background:#FFFFFF; border:1px solid #E5EAF1; border-radius:10px; padding:8px 12px; font-size:12px;">
                <span style="color:#738096; display:block;">Disbursement</span>
                <strong style="color:#356AE6; font-size:14px;">Direct Bank</strong>
              </div>
            </div>
          </div>

          <div style="background:#FFFFFF; border:1px solid #E5EAF1; border-radius:14px; padding:18px; box-shadow:0 8px 20px rgba(0,0,0,0.04);">
            <div style="font-size:11px; text-transform:uppercase; color:#738096; font-weight:700; margin-bottom:6px;">Sample Monthly Repayment</div>
            <div style="font-size:24px; font-weight:800; color:#356AE6; font-family:'Manrope';">₹10,180 <span style="font-size:12px; font-weight:500; color:#738096;">/mo</span></div>
            <div style="height:1px; background:#E5EAF1; margin:10px 0;"></div>
            <div style="display:flex; justify-content:space-between; font-size:12px; color:#202B3C; margin-bottom:4px;">
              <span>Principal:</span> <strong>₹3,00,000</strong>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:12px; color:#202B3C; margin-bottom:4px;">
              <span>Tenure:</span> <strong>36 Months</strong>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:12px; color:#202B3C;">
              <span>Key Facts Sheet:</span> <span style="color:#278A76; font-weight:700;">Included</span>
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #E5EAF1; pt:12px; font-size:12px; color:#738096;">
          <span>Zero prepayment surprise charges</span>
          <span style="color:#356AE6; font-weight:600;">Jatta M Kommerce Private Limited</span>
        </div>
      </div>
    `)
  },

  // 2. Business Loans Hero Graphic
  {
    name: 'business-loans-hero.png',
    html: baseHtml(`
      <div class="card" style="background: linear-gradient(135deg, #FFFFFF 60%, #E6F7F4 100%);">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="badge badge-teal">Commercial & MSME Solutions</span>
          <span style="font-size: 12px; font-weight: 700; color: #14243A;">Corporate Underwriting</span>
        </div>
        
        <div style="display:grid; grid-template-columns: 1.15fr 0.85fr; gap: 20px; align-items:center; margin: 15px 0;">
          <div>
            <h2 style="font-size: 26px; font-weight: 800; color: #14243A; margin-bottom: 8px;">Enterprise Capital Facilities</h2>
            <p style="font-size: 13px; color: #263F60; line-height: 1.5;">Flexible working capital lines, equipment financing, and inventory credit structured for operating companies and sole proprietorships.</p>
            
            <div style="display:flex; gap: 10px; margin-top: 15px;">
              <div style="background:#FFFFFF; border:1px solid #E5EAF1; border-radius:10px; padding:8px 12px; font-size:12px;">
                <span style="color:#738096; display:block;">Turnover Verification</span>
                <strong style="color:#14243A; font-size:13px;">GST & Banking</strong>
              </div>
              <div style="background:#FFFFFF; border:1px solid #E5EAF1; border-radius:10px; padding:8px 12px; font-size:12px;">
                <span style="color:#738096; display:block;">Evaluation Limit</span>
                <strong style="color:#14243A; font-size:13px;">Up to ₹50 Lakhs</strong>
              </div>
            </div>
          </div>

          <div style="background:#14243A; color:#FFFFFF; border-radius:14px; padding:20px; box-shadow:0 12px 24px rgba(20,36,58,0.15);">
            <div style="font-size:11px; text-transform:uppercase; color:#36B49B; font-weight:700; margin-bottom:6px;">Commercial Facilities</div>
            <div style="font-size:18px; font-weight:800; font-family:'Manrope'; margin-bottom:12px;">Working Capital Lines</div>
            
            <div style="display:flex; flex-direction:column; gap:8px; font-size:12px;">
              <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.1); pb:4px;">
                <span style="color:#CBD5E1;">Inventory Stocking:</span>
                <span style="color:#FFFFFF; font-weight:600;">Custom Tenures</span>
              </div>
              <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.1); pb:4px;">
                <span style="color:#CBD5E1;">Machinery Expansion:</span>
                <span style="color:#FFFFFF; font-weight:600;">Asset Backed / Unsecured</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:#CBD5E1;">Lender Agreement:</span>
                <span style="color:#36B49B; font-weight:700;">Direct Underwriting</span>
              </div>
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #E5EAF1; pt:12px; font-size:12px; color:#738096;">
          <span>Compliant with RBI digital lending framework</span>
          <span style="color:#278A76; font-weight:600;">Jatta M Kommerce Private Limited</span>
        </div>
      </div>
    `)
  },

  // 3. How It Works Hero Journey Graphic
  {
    name: 'how-it-works-hero.png',
    html: baseHtml(`
      <div class="card" style="background:#FFFFFF;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="badge badge-royal">Digital Facilitation Journey</span>
          <span style="font-size: 12px; font-weight: 700; color: #356AE6;">End-to-End Borrower Autonomy</span>
        </div>

        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 20px 0;">
          <div style="background:#F7F8FA; border:1px solid #E5EAF1; border-radius:12px; padding:16px;">
            <div style="width:32px; height:32px; border-radius:8px; background:#EAF1FF; color:#356AE6; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:14px; margin-bottom:10px;">01</div>
            <strong style="font-size:14px; color:#14243A; display:block; margin-bottom:4px;">Enquiry</strong>
            <p style="font-size:11px; color:#738096; line-height:1.4;">Select personal or business loan and amount required.</p>
          </div>

          <div style="background:#F7F8FA; border:1px solid #E5EAF1; border-radius:12px; padding:16px;">
            <div style="width:32px; height:32px; border-radius:8px; background:#EAF1FF; color:#356AE6; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:14px; margin-bottom:10px;">02</div>
            <strong style="font-size:14px; color:#14243A; display:block; margin-bottom:4px;">Consent</strong>
            <p style="font-size:11px; color:#738096; line-height:1.4;">Explicit data consent prior to lender routing.</p>
          </div>

          <div style="background:#F7F8FA; border:1px solid #E5EAF1; border-radius:12px; padding:16px;">
            <div style="width:32px; height:32px; border-radius:8px; background:#E6F7F4; color:#278A76; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:14px; margin-bottom:10px;">03</div>
            <strong style="font-size:14px; color:#14243A; display:block; margin-bottom:4px;">Lender Checks</strong>
            <p style="font-size:11px; color:#738096; line-height:1.4;">Direct KYC and underwriting by partner NBFC.</p>
          </div>

          <div style="background:#F7F8FA; border:1px solid #E5EAF1; border-radius:12px; padding:16px;">
            <div style="width:32px; height:32px; border-radius:8px; background:#14243A; color:#FFFFFF; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:14px; margin-bottom:10px;">04</div>
            <strong style="font-size:14px; color:#14243A; display:block; margin-bottom:4px;">KFS & Choice</strong>
            <p style="font-size:11px; color:#738096; line-height:1.4;">Review Key Facts Statement. Accept or decline freely.</p>
          </div>
        </div>

        <div style="background:#EAF1FF; border:1px solid rgba(53,106,230,0.2); border-radius:12px; padding:14px 18px; display:flex; justify-content:space-between; align-items:center; font-size:12px;">
          <span style="color:#14243A; font-weight:600;">No Upfront Fees • Zero Approval Pressure • Transparent Lending</span>
          <span style="color:#356AE6; font-weight:700;">100% Borrower Control</span>
        </div>
      </div>
    `)
  },

  // 4. About Us Hero Graphic
  {
    name: 'about-us-hero.png',
    html: baseHtml(`
      <div class="card" style="background:#FFFFFF;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="badge badge-navy">Corporate Identity & Integrity</span>
          <span style="font-size: 12px; font-weight: 700; color: #738096;">CIN: U72900DL2021PTC384912</span>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items:center; margin: 15px 0;">
          <div style="background:#F7F8FA; border:1px solid #E5EAF1; border-radius:14px; padding:20px;">
            <span style="font-size:11px; font-weight:700; text-transform:uppercase; color:#356AE6;">Registered Entity</span>
            <h3 style="font-size:18px; font-weight:800; color:#14243A; margin:6px 0 10px;">Jatta M Kommerce Pvt Ltd</h3>
            <p style="font-size:12px; color:#263F60; line-height:1.5;">Operating QvikLoan as an ethical digital lending facilitation platform connecting borrowers with verified financial institutions.</p>
          </div>

          <div style="background:#F7F8FA; border:1px solid #E5EAF1; border-radius:14px; padding:20px;">
            <span style="font-size:11px; font-weight:700; text-transform:uppercase; color:#278A76;">Dual Presence</span>
            <div style="margin:8px 0; font-size:12px; color:#202B3C;">
              <strong>Mumbai:</strong> 220, Citi Mall, Andheri (W)<br/>
              <strong>Hubli:</strong> Park E Block, Above Passport Office
            </div>
            <span style="font-size:11px; color:#738096;">Multi-city regulatory governance</span>
          </div>
        </div>

        <div style="border-top:1px solid #E5EAF1; pt:12px; display:flex; justify-content:space-between; align-items:center; font-size:12px; color:#738096;">
          <span>Zero deceptive advertising • Full Meta Policy Alignment</span>
          <span style="color:#356AE6; font-weight:600;">help@qvikloan.com</span>
        </div>
      </div>
    `)
  },

  // 5. Participating Lenders Network Graphic
  {
    name: 'participating-lenders-hero.png',
    html: baseHtml(`
      <div class="card" style="background:#FFFFFF;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="badge badge-teal">Institutional Network Transparency</span>
          <span style="font-size: 12px; font-weight: 700; color: #278A76;">RBI Regulated NBFC Partners</span>
        </div>

        <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 16px 0;">
          <div style="border:1px solid #E5EAF1; border-radius:12px; padding:14px; background:#F7F8FA;">
            <strong style="font-size:14px; color:#14243A; display:block;">Northern Arc Capital Limited</strong>
            <span style="font-size:11px; color:#738096; display:block;">RBI Reg No: B-07.00653</span>
            <span style="font-size:11px; color:#356AE6; font-weight:600; display:block; margin-top:4px;">Personal & Commercial Facilities</span>
          </div>
          <div style="border:1px solid #E5EAF1; border-radius:12px; padding:14px; background:#F7F8FA;">
            <strong style="font-size:14px; color:#14243A; display:block;">InCred Financial Services Limited</strong>
            <span style="font-size:11px; color:#738096; display:block;">RBI Reg No: B-13.01899</span>
            <span style="font-size:11px; color:#356AE6; font-weight:600; display:block; margin-top:4px;">Personal & MSME Lending</span>
          </div>
          <div style="border:1px solid #E5EAF1; border-radius:12px; padding:14px; background:#F7F8FA;">
            <strong style="font-size:14px; color:#14243A; display:block;">Lendingkart Finance Limited</strong>
            <span style="font-size:11px; color:#738096; display:block;">RBI Reg No: B-05.05047</span>
            <span style="font-size:11px; color:#278A76; font-weight:600; display:block; margin-top:4px;">Working Capital & Growth Lines</span>
          </div>
          <div style="border:1px solid #E5EAF1; border-radius:12px; padding:14px; background:#F7F8FA;">
            <strong style="font-size:14px; color:#14243A; display:block;">Protium Finance Limited</strong>
            <span style="font-size:11px; color:#738096; display:block;">RBI Reg No: B-13.02102</span>
            <span style="font-size:11px; color:#278A76; font-weight:600; display:block; margin-top:4px;">Structured Credit & Retail Finance</span>
          </div>
        </div>

        <div style="border-top:1px solid #E5EAF1; pt:12px; display:flex; justify-content:space-between; align-items:center; font-size:12px; color:#738096;">
          <span>Direct Disbursement by Underwriting Lender</span>
          <span style="color:#14243A; font-weight:600;">Key Facts Statement (KFS) Guaranteed</span>
        </div>
      </div>
    `)
  }
];

const tempDir = path.resolve('public/images/temp-inner');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

for (const v of visuals) {
  const htmlPath = path.join(tempDir, v.name.replace('.png', '.html'));
  const pngPath = path.resolve('public/images', v.name);
  fs.writeFileSync(htmlPath, v.html);
  
  console.log(`Rendering ${v.name}...`);
  execSync(`"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --screenshot="${pngPath}" --window-size=800,520 "${htmlPath}"`);
  console.log(`Saved: ${pngPath}`);
}

fs.rmSync(tempDir, { recursive: true, force: true });
console.log('All inner page visual graphics successfully created!');

