import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/rej_coffee/', // <-- use your exact repo name here
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
