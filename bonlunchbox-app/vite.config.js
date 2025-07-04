import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base : '/',
  plugins: [react()],
  // 2. server의 proxy 설정
  // 5173 port -> 8088port에 요청을 보낸다.
  // Cross-origin 간주하고 이를 차단! CROS
  server : {
    proxy:{
      '/api' : 'http://52.78.242.90:8088'
    }
  }


})
