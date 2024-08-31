---
layout: page
---

<script setup>
import ExampleQuestionMark from '../components/ExampleQuestionMark.vue'

</script>

<ClientOnly>
  <ExampleQuestionMark />
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
