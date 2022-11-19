import { defineConfig, UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // @ts-ignore
  test: {
    environment: 'happy-dom',
    setupFiles: ['./vitest-setup.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})
