---
layout: page
---

<script setup>
import ExampleVue from '../components/ExampleVue.vue'

</script>

<ClientOnly>
  <ExampleVue />
</ClientOnly>

<style>
main, aside, nav, footer, header, #app, .VPDocOutline, .VPNavBar, .VPNavBarTitle, .VPSidebar {
  display: none !important;
}

body {
  margin: 0;
  padding: 0;
  background-color: #e2e2e2;
  height: 100vh;
  overflow: hidden;
}

.dark body  {
  background-color: black;
}
</style>
