---
layout: page
---

<script setup>
import UsageExample from '../components/UsageExample.vue'

</script>

<ClientOnly>
  <UsageExample />
</ClientOnly>

<style>
main, aside, nav, footer, header, #app, .VPDocOutline, .VPNavBar, .VPNavBarTitle, .VPSidebar {
  display: none !important;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--vp-c-brand-1);
  height: 100vh;
  overflow: hidden;
}
</style>
