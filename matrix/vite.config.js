import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from '@vituum/vite-plugin-postcss'; // Import the @vituum/vite-plugin-postcss plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    postcss() // Add the @vituum/vite-plugin-postcss plugin to process CSS
  ]
});
