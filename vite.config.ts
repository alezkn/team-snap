import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      host: 'localhost',
      port: 3000,
    },
    watch: {
      usePolling: true,
    },
    host: true, 
    strictPort: true,
    port: 3000, 
  },
  resolve: {
    alias: [{ find: "~", replacement: "/src" },],
    },
})
