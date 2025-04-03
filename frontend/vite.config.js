import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: "/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // Adjust size (default is 500 KB)
  },
})


