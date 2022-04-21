import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import styleImport, { VantResolve } from 'vite-plugin-style-import'

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      // styleImport({
      //   resolves: [VantResolve()],
      // }),
    ],
    server: {
      open: true,
      // https: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.ts', '.tsx', '.js', '.json'],
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
