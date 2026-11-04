import { execSync } from 'child_process';
import path from 'path';

const outDir = path.resolve('test-screenshots');

const pages = [
  { url: 'http://localhost:4173/#enquiry-section', file: 'enquiry-end-to-end.png', w: 1280, h: 1400 },
  { url: 'http://localhost:4173/', file: 'homepage-full.png', w: 1280, h: 2200 },
  { url: 'http://localhost:4173/#/personal-loans', file: 'personal-loans-visual.png', w: 1280, h: 1600 },
  { url: 'http://localhost:4173/#/business-loans', file: 'business-loans-visual.png', w: 1280, h: 1600 },
  { url: 'http://localhost:4173/#/how-it-works', file: 'how-it-works-visual.png', w: 1280, h: 1800 },
  { url: 'http://localhost:4173/#/contact', file: 'contact-us-visual.png', w: 1280, h: 1400 },
];

for (const p of pages) {
  const dest = path.resolve(outDir, p.file);
  try {
    execSync(
      `/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --headless=new --disable-gpu --window-size=${p.w},${p.h} --screenshot="${dest}" "${p.url}"`,
      { stdio: 'pipe' }
    );
    console.log(`Captured: ${p.file}`);
  } catch (err) {
    console.error(`Failed ${p.file}:`, err.message);
  }
}
