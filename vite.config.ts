import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/react-phonebook/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components'),
      constants: resolve(__dirname, 'src/constants'),
      icons: resolve(__dirname, 'src/icons'),
    },
  },
});
