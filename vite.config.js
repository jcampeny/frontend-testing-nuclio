import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true, // Cambia el origen de la solicitud para que coincida con el backend
        secure: false,
      },
    },
    port: 5173,
    host: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setupTests.js',
    globals: true, // Permite usar test() sin tener que importarlo
  },
})
