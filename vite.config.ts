import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/src': '/src',
      '@/svg': '/src/assets/svg',
      '@/components': '/src/components',
      '@/store': 'src/store',
    }
  },
  plugins: [react()],
})
