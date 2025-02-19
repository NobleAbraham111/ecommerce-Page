import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ecommerce-Page/',  // repository name with leading and trailing slash
  plugins: [react()]
});
