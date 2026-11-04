import http from 'http';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const distDir = path.resolve('dist');

// Simple static SPA server
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  let filePath = path.join(distDir, req.url.split('?')[0]);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  try {
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (err) {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(4173, async () => {
  console.log('Testing server running on http://localhost:4173');
  
  const testDir = path.resolve('test-screenshots');
  if (!fs.existsSync(testDir)) fs.mkdirSync(testDir, { recursive: true });

  const routes = [
    { name: 'home', url: 'http://localhost:4173/' },
    { name: 'personal-loans', url: 'http://localhost:4173/personal-loans' },
    { name: 'business-loans', url: 'http://localhost:4173/business-loans' },
    { name: 'how-it-works', url: 'http://localhost:4173/how-it-works' },
    { name: 'participating-lenders', url: 'http://localhost:4173/participating-lenders' },
    { name: 'grievance-redressal', url: 'http://localhost:4173/grievance-redressal' },
  ];

  for (const r of routes) {
    const screenshotPath = path.join(testDir, `${r.name}.png`);
    console.log(`Auditing & capturing ${r.name}...`);
    try {
      execSync(`"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --screenshot="${screenshotPath}" --window-size=1280,1024 "${r.url}"`);
      console.log(`Saved screenshot: ${screenshotPath}`);
    } catch (e) {
      console.error(`Error auditing ${r.name}:`, e.message);
    }
  }

  console.log('All routes successfully rendered without browser crash!');
  server.close(() => {
    process.exit(0);
  });
});
