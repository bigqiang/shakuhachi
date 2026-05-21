import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// 原 base: '/shakuhachi/' 改为‘/’ 以适合域名 http://shakuhachi.bigqiang.cn/ 的部署
export default defineConfig({
  plugins: [react()],
  base: '/',
})
