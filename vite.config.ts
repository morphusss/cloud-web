import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@store': path.resolve(__dirname, './src/store'),
      '@components': path.resolve(__dirname, './src/components'),
      '@svg': path.resolve(__dirname, './src/assets/svg'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@src': path.resolve(__dirname, './src'),
    }
  },
  plugins: [react()],
})
