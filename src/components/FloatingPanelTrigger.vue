<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { injectFloatingPanelRootContext } from './FloatingPanelRoot.vue'

const props = withDefaults(defineProps<{
  as?: 'button' | 'div'
  class?: HTMLAttributes['class']
}>(), {
  as: 'button',
})

const rootContext = injectFloatingPanelRootContext()
const { state } = rootContext.usePanelState()
</script>

<template>
  <component
    :is="as"
    class="floating-dock__trigger"
    :class="props.class"
    :data-state="rootContext.positionAndStyle.isInactive.value ? 'inactive' : rootContext.panelVisibilities.panelVisible.value ? 'open' : 'closed'"
    :data-position="state.position"
    @click="rootContext.panelVisibilities.togglePanelVisible"
  >
    <slot />
  </component>
</template>
