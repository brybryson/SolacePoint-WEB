import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SolacePoint/',
  build: {
    outDir: 'dist/SolacePoint',
  },
  server: {
    port: 5174,
  }
})
