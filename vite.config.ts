import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport, { VantResolve } from 'vite-plugin-style-import'

export default defineConfig(() => {
  return {
    envDir: './env',
    envPrefix: ['VITE_'],
    plugins: [
      vue(),
      styleImport({
        resolves: [VantResolve()],
      }),
    ],
    server: {
      open: true,
      // https: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.ts', '.tsx', '.js'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: [
            `@import "@/style/base/globalVariable.scss";
             @import "@/style/base/globalMixin.scss";`,
          ],
        },
      },
    },
    build: {},
  }
})
