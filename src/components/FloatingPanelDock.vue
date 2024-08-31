<script setup lang="ts">
import { type HTMLAttributes, computed, onMounted, ref } from 'vue'
import { injectFloatingPanelRootContext } from './FloatingPanelRoot.vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const triggerElement = ref<HTMLElement>()
const rootContext = injectFloatingPanelRootContext()
const { state } = rootContext.usePanelState()

onMounted(() => {
  if (!triggerElement.value)
    throw new Error('panelEleRef is not defined')

  rootContext.setTriggerElement(triggerElement)
})
</script>

<template>
  <div
    ref="triggerElement"
    class="floating-dock__panel"
    :class="props.class"
    :style="rootContext.positionAndStyle.dockStyle.value"
    :data-state="rootContext.positionAndStyle.isInactive.value ? 'inactive' : rootContext.panelVisibilities.panelVisible.value ? 'open' : 'closed'"
    :data-position="state.position"
    @pointerdown="rootContext.positionAndStyle.onPointerDown"
  >
    <slot />
  </div>
</template>
