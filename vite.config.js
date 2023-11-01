/* eslint-env node */
import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig(
  ({mode}) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
      plugins: [
        react(),
        Sitemap({
          hostname: env.VITE_BASE_URL || '0.0.0.0',
        })
      ],
      server: {
        proxy: {
          '/api': {
            target: env.VITE_API_URL || 'http://localhost:3000',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
          },
        },
      },
    }
  },
)
