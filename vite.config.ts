import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/components': '/src/components',
      '@/store': 'src/store',
      '@/svg': '/src/assets/svg',
      '@/images': '/src/assets/images',
      '@/src': '/src',
    }
  },
  plugins: [react()],
})
