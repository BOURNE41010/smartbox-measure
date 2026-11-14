import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

// basicSsl สร้างใบรับรอง self-signed เพื่อให้ทดสอบกล้องบนมือถือผ่าน HTTPS ในวง LAN ได้
// (เบราว์เซอร์มือถือบังคับให้ getUserMedia ทำงานเฉพาะ HTTPS หรือ localhost)
export default defineConfig({
  plugins: [basicSsl()],
  server: { host: true, port: 5173 },
  preview: { host: true, port: 4173 },
  build: { target: 'es2020' },
});
