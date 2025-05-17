import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  // Resolve alias for imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  css: {
    postcss: './postcss.config.js'
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tooltip'],
          charts: ['chart.js', 'react-chartjs-2']
        }
      }
    }
  }
});
