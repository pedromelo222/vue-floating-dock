<script setup lang="ts">
import { type HTMLAttributes, computed, ref } from 'vue'
import PanelBox from '@/components/PanelBox.vue'
import { injectFloatingPanelRootContext } from './FloatingPanelRoot.vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const rootContext = injectFloatingPanelRootContext()
const { state } = rootContext.usePanelState()
const isDragging = computed(() => rootContext.positionAndStyle.isDragging.value)
</script>

<template>
  <PanelBox
    :class="props.class"
    :style="rootContext.positionAndStyle.panelStyle.value"
    :is-dragging="isDragging"
    :data-position="state.position"
    :close="rootContext.panelVisibilities.closePanel"
  >
    <slot />
  </PanelBox>
</template>
