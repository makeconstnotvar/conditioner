import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [
    react({
      babel: {
        plugins: [['@babel/plugin-proposal-decorators', { version: '2023-05' }]],
      },
    }),
  ],
  esbuild: {
    jsx: 'automatic',
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        includePaths: ['node_modules', 'node_modules/bootstrap/scss'],
      },
    },
  },
  server: {
    host: '0.0.0.0',
    sourcemap: true
  }
});
