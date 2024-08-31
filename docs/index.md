---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Vue floating dock"
  text: "Unstyled dock component"
  tagline: Heavily inspired by the Nuxt and Vue Devtools component.
  actions:
    - theme: brand
      text: Why Vue-floating-dock?
      link: /guide
    - theme: alt
      text: Usage
      link: /guide/usage

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

::: warning

This component is in the development phase.

:::

<script setup >
import Example from './components/Example.vue'

</script>

<ClientOnly>
  <Example />
</ClientOnly>
