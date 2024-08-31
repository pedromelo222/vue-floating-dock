import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const projectRootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    cssInjectedByJsPlugin(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
      cleanVueFileName: true,
      exclude: ['src/test/**'],
    }),
  ],

  resolve: {
    alias: {
      '@': resolve(projectRootDir, 'src'),
    },
  },

  build: {
    cssCodeSplit: true,
    lib: {
      name: 'vue-floating-dock',
      fileName: (format, name) => {
        return `${name}.${format === 'es' ? 'js' : 'umd.cjs'}`
      },
      entry: resolve(__dirname, 'src/index.ts'),
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'unocss'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css')
            return 'index.css'
          return chunkInfo.name as string
        },
      },
    },
  },
})
