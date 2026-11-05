import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Local-only copy of public/api/chat-status.php, so the chat widget behaves on
// localhost exactly as it will on the live site, even without the PHP server running.
function chatStatusDevCheck() {
  const handler = async (req, res, next) => {
    if (!req.url || !req.url.startsWith('/api/chat-status.php')) return next();
    const key = new URL(req.url, 'http://localhost').searchParams.get('key') || '';
    let available = false;
    if (/^[A-Za-z0-9]{16,64}$/.test(key)) {
      try {
        const r = await fetch(`https://iamkratu.ai/customer-chat/?key=${encodeURIComponent(key)}`, {
          headers: { Referer: 'https://qvikloan.com/' },
          signal: AbortSignal.timeout(6000),
        });
        available = r.status === 200 && !(await r.text()).toLowerCase().includes('invalid widget key');
      } catch {
        available = null; // iamkratu.ai unreachable: let the widget try the chat
      }
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ available }));
  };
  return {
    name: 'chat-status-dev-check',
    // Block bodies on purpose: returning a value here would make Vite call it as a hook.
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    },
  };
}

export default defineConfig({
  // Absolute paths, so the page-not-found screen also works on deeper addresses like /a/b.
  base: '/',
  plugins: [react(), chatStatusDevCheck()],
  server: {
    port: 5173,
    open: false,
    // The enquiry form posts to /api/lead.php. Locally, run `npm run api` (PHP server
    // on port 8000) alongside `npm run dev`. In production Apache runs the PHP directly.
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
});
