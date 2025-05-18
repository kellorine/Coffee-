// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/rej_coffee/',   // <-- make sure this is your exact repo name with slashes
  plugins: [react()],
});
