import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

const defaultConfig = {
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router-dom',
            'react-hook-form',
            'styled-components',
            'antd',
            'redux',
            'dayjs',
            'yup'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 500
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}

export default defineConfig(({ command, mode }) => {
  const isDev = mode === 'development'

  if (command === 'serve' && isDev) {
    return {
      ...defaultConfig,
      server: {
        port: 3005
      }
    }
  } else {
    return defaultConfig
  }
})
