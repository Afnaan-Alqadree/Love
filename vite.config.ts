import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    open: true, // Automatically open the app in the browser
  },
  base: '/Love/', // Replace <repository-name> with your actual repository name
});
