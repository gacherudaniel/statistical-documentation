import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  // Served from a project subpath on GitHub Pages, but from the domain root on
  // Cloudflare (Pages sets CF_PAGES, Workers Builds sets WORKERS_CI). Override
  // either default with VITE_BASE; everything that links to the Quarto output
  // in public/docs/ resolves through import.meta.env.BASE_URL, so it follows.
  base:
    process.env.VITE_BASE ??
    (process.env.CF_PAGES || process.env.WORKERS_CI ? '/' : '/statistical-documentation/'),
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  css: {
    postcss: './postcss.config.js'
  }
});
