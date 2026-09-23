import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

declare const process: { env: Record<string, string | undefined> }

// Set VITE_BASE_PATH=/REPOSITORY-NAME/ in GitHub Actions for a project site.
// Keep it unset (or use /) for a custom domain.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
