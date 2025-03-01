import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
                ['@babel/plugin-syntax-jsx'],
                ['@babel/plugin-transform-react-jsx'],
                ['@babel/plugin-transform-react-display-name'],
                ['@babel/plugin-proposal-decorators', {legacy: true}],
                ['@babel/plugin-proposal-class-properties', {loose: false}]
              ]
      }
    })
  ],
  server: {
    host: '0.0.0.0',
  }
})
