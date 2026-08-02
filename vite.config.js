import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'app',
  base: './',
  plugins: [react()],
  publicDir: false,
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      external: ['react', 'react-dom/client', 'react-icons/fa'],
      output: {
        paths: {
          react: 'https://esm.sh/react@19.1.1',
          'react-dom/client': 'https://esm.sh/react-dom@19.1.1/client',
          'react-icons/fa': 'https://esm.sh/react-icons@5.5.0/fa',
        },
      },
    },
  },
});
