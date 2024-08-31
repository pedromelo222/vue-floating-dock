import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import EmbedIframe from '../components/EmbedIframe.vue'

const regex = /\/(\w+)\.vue/
const docTableModules = import.meta.glob('../../components/tables/*.vue', { eager: true })
const baseModules = import.meta.glob('../../../src/components/*.vue', { eager: true })

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    for (const path in baseModules) {
      app.component(/* @vite-ignore */path.match(regex)?.[1] ?? '', (baseModules[path] as any)?.default)
    }
    for (const path in docTableModules) {
      app.component(/* @vite-ignore */path.match(regex)?.[1] ?? '', (docTableModules[path] as any)?.default)
    }

    app.component('EmbedIframe', EmbedIframe)
  },
} satisfies Theme
