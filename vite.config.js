// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Coffee-/', // Make sure this matches your repository name exactly
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the build directory is set to 'dist'
    emptyOutDir: true, // Clean the output directory before building
  },
  server: {
    open: true, // Automatically open the app in the browser during development
  },
});
