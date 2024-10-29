import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/react-phonebook/' : '/',
  plugins: [react(), svgr(), dts()],
  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components'),
      constants: resolve(__dirname, 'src/constants'),
      helpers: resolve(__dirname, 'src/helpers'),
      icons: resolve(__dirname, 'src/icons'),
    },
  },
});
