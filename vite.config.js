import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  base: '/my-first-vite-app/',
 server: {
    port: 5173,
    host: '0.0.0.0', // 👈 (از مرحله قبل) مهم برای اتصال Ngrok
    cors: true,
    // 👈 تنظیمات جدید برای رفع خطای "Blocked request"
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      // دامنه موقتی که Ngrok به شما داده است
      'idella-nonsubordinate-edith.ngrok-free.dev', 
    ],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
