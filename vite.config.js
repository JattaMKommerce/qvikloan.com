import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
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
