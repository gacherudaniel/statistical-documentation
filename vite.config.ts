import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  // Served from a project subpath on GitHub Pages. Override with
  // `VITE_BASE=/ npm run build` when deploying to a domain root
  // (e.g. Cloudflare Pages); everything that links to the Quarto output in
  // public/docs/ resolves through import.meta.env.BASE_URL, so it follows.
  base: process.env.VITE_BASE ?? '/statistical-documentation/',
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
