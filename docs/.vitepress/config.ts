import { defineConfig, postcssIsolateStyles } from 'vitepress'
import UnoCSS from 'unocss/vite'
import { resolve } from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue floating dock',
  description: 'Vue floating dock description...',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Why?', link: '/guide/index.md' },
          { text: 'Installation', link: '/guide/installation' },
        ],
      },
      {
        text: 'Usage',
        items: [
          { text: 'Usage', link: '/guide/usage' },
          { text: 'Examples', link: '/examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  vite: {
    plugins: [
      UnoCSS(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, '../../src'),
      },
    },
    css: {
      postcss: {
        plugins: [
          postcssIsolateStyles({ includeFiles: [/vp-doc\.css/] }),
        ],
      },

    },
  },

})
