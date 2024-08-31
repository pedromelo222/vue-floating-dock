<script setup lang="ts">
import { type HTMLAttributes, computed, nextTick, ref, watchEffect } from 'vue'
import { useEventListener } from '@vueuse/core'
import { PANEL_MAX, PANEL_MIN } from '@/constants'
import { injectFloatingPanelRootContext } from './FloatingPanelRoot.vue'

const props = defineProps<{
  isDragging: boolean
  close: () => void
  class?: HTMLAttributes['class']
}>()

const rootContext = injectFloatingPanelRootContext()

const { state, updateState } = rootContext.usePanelState()
const container = ref<HTMLElement>()
const panelBox = ref<HTMLElement>()
const isResizing = ref<false | { top?: boolean, left?: boolean, right?: boolean, bottom?: boolean }>(false)

watchEffect(() => {
  if (!container.value)
    return
  if (state.value.open) {
    nextTick(() => {
      if (!panelBox.value)
        throw new Error('panelBox is not defined')
      panelBox.value.style.pointerEvents = (isResizing.value || props.isDragging) ? 'none' : 'auto'
    })
  }
})

useEventListener(window, 'mousedown', (e: MouseEvent) => {
  if (!state.value.closeOnOutsideClick)
    return
  // if (popupWindow.value)
  //   return
  if (!state.value.open || isResizing.value)
    return

  const matched = e.composedPath().find((_el) => {
    const el = _el as HTMLElement
    return Array.from(el.classList || []).some(c => c.startsWith('floating-dock'))
  })

  if (!matched) {
    updateState({
      open: false,
    })
  }
})

useEventListener(window, 'mousemove', (e) => {
  if (!isResizing.value)
    return
  if (!state.value.open)
    return
  if (!panelBox.value)
    return

  const box = panelBox.value.getBoundingClientRect()

  if (isResizing.value.right) {
    const widthPx = Math.abs(e.clientX - (box?.left || 0))
    const width = widthPx / window.innerWidth * 100
    updateState({
      width: Math.min(PANEL_MAX, Math.max(PANEL_MIN, width)),
    })
  }
  else if (isResizing.value.left) {
    const widthPx = Math.abs((box?.right || 0) - e.clientX)
    const width = widthPx / window.innerWidth * 100
    updateState({
      width: Math.min(PANEL_MAX, Math.max(PANEL_MIN, width)),
    })
  }

  if (isResizing.value.top) {
    const heightPx = Math.abs((box?.bottom || 0) - e.clientY)
    const height = heightPx / window.innerHeight * 100
    updateState({
      height: Math.min(PANEL_MAX, Math.max(PANEL_MIN, height)),
    })
  }
  else if (isResizing.value.bottom) {
    const heightPx = Math.abs(e.clientY - (box?.top || 0))
    const height = heightPx / window.innerHeight * 100
    updateState({
      height: Math.min(PANEL_MAX, Math.max(PANEL_MIN, height)),
    })
  }
})

useEventListener(window, 'mouseup', () => {
  isResizing.value = false
})

useEventListener(window, 'mouseleave', () => {
  isResizing.value = false
})
</script>

<template>
  <div v-if="state.open" ref="container" class="floating-dock-frame">
    <!-- Handlers -->
    <div
      v-show="state.position !== 'top'" class="floating-dock-resize floating-dock-resize--horizontal"
      :style="{ top: 0 }" @mousedown.prevent="() => isResizing = { top: true }"
    />
    <div
      v-show="state.position !== 'bottom'" class="floating-dock-resize floating-dock-resize--horizontal"
      :style="{ bottom: 0 }" @mousedown.prevent="() => isResizing = { bottom: true }"
    />
    <div
      v-show="state.position !== 'left'" class="floating-dock-resize floating-dock-resize--vertical"
      :style="{ left: 0 }" @mousedown.prevent="() => isResizing = { left: true }"
    />
    <div
      v-show="state.position !== 'right'" class="floating-dock-resize floating-dock-resize--vertical"
      :style="{ right: 0 }" @mousedown.prevent="() => isResizing = { right: true }"
    />
    <div
      v-show="state.position !== 'top' && state.position !== 'left'"
      class="floating-dock-resize floating-dock-resize-corner"
      :style="{ top: 0, left: 0, cursor: 'nwse-resize' }"
      @mousedown.prevent="() => isResizing = { top: true, left: true }"
    />
    <div
      v-show="state.position !== 'top' && state.position !== 'right'"
      class="floating-dock-resize floating-dock-resize-corner"
      :style="{ top: 0, right: 0, cursor: 'nesw-resize' }"
      @mousedown.prevent="() => isResizing = { top: true, right: true }"
    />
    <div
      v-show="state.position !== 'bottom' && state.position !== 'left'"
      class="floating-dock-resize floating-dock-resize-corner"
      :style="{ bottom: 0, left: 0, cursor: 'nesw-resize' }"
      @mousedown.prevent="() => isResizing = { bottom: true, left: true }"
    />
    <div
      v-show="state.position !== 'bottom' && state.position !== 'right'"
      class="floating-dock-resize floating-dock-resize-corner"
      :style="{ bottom: 0, right: 0, cursor: 'nwse-resize' }"
      @mousedown.prevent="() => isResizing = { bottom: true, right: true }"
    />
    <div
      v-if="state.open"
      ref="panelBox"
      class="floating-dock-frame__content"
      :class="props.class"
      style="pointer-events: auto;"
      :data-state="rootContext.positionAndStyle.isInactive.value ? 'inactive' : rootContext.panelVisibilities.panelVisible.value ? 'open' : 'closed'"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.floating-dock-frame__content {
  width: 100%;
  height: 100%;
}
.floating-dock-frame {
  position: fixed;
  z-index: 2147483645;

}

.floating-dock-resize {
  &--horizontal {
    position: absolute;
    left: 6px;
    right: 6px;
    height: 10px;
    margin: -5px 0;
    cursor: ns-resize;
    border-radius: 5px;
  }

  &--vertical {
    position: absolute;
    top: 6px;
    bottom: 0;
    width: 10px;
    margin: 0 -5px;
    cursor: ew-resize;
    border-radius: 5px;
  }

  &-corner {
    position: absolute;
    width: 14px;
    height: 14px;
    margin: -6px;
    border-radius: 6px;
  }

  &:hover {
    background: rgba(125, 125, 125, 0.1);
  }
}
</style>
