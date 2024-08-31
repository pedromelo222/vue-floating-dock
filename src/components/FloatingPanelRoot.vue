<script lang="ts">
import type { DeepReadonly, Ref } from 'vue'
import { createContext } from '@/components/shared/createContext'
import { usePanelVisible, usePosition } from '@/composables'
import { PANEL_NAME } from '@/constants'

interface FloatingPanelState {
  width: number
  height: number
  top: number
  left: number
  open: boolean
  position: 'top' | 'bottom' | 'left' | 'right'
  isFirstVisit: boolean
  closeOnOutsideClick: boolean
  minimizeInactive: number
  preferShowFloatingPanel: boolean
}

export interface UsePanelStateReturn {
  state: DeepReadonly<Ref<FloatingPanelState>>
  updateState: (value: Partial<FloatingPanelState>) => void
}

export interface FloatingPanelContext {
  setTriggerElement: (triggerEl: Ref<HTMLElement | undefined>) => void
  triggerElement: Ref<HTMLElement | undefined>
  positionAndStyle: ReturnType<typeof usePosition>
  panelVisibilities: ReturnType<typeof usePanelVisible>
  usePanelState: () => UsePanelStateReturn
}

export const [injectFloatingPanelRootContext, provideFloatingPanelRootContext]
  = createContext<FloatingPanelContext>('FloatingPanelRoot')
</script>

<script setup lang="ts">
import { readonly, ref, watch } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const props = withDefaults(defineProps<{
  /**
   * The name of the panel, must be unique to work with multiple panels
   */
  name?: string
  /**
   * Minimize floating panel on inactive, set -1 to disable
   * @default 5000 (5 seconds)
   */
  minimizeInactive?: number
}>(), {
  minimizeInactive: 5000
  ,
})

const panelName = ref(props.name || 'default')

const state = useLocalStorage<FloatingPanelState>(`__${PANEL_NAME}${panelName.value}__`, {
  width: 80,
  height: 60,
  top: 50,
  left: 50,
  open: false,
  position: 'bottom',
  isFirstVisit: true,
  closeOnOutsideClick: false,
  minimizeInactive: props.minimizeInactive,
  preferShowFloatingPanel: true,
})

/**
 * Update state when the props value is change
 */
watch(() => props.minimizeInactive, (newValue) => {
  state.value.minimizeInactive = newValue
})

function usePanelState(): UsePanelStateReturn {
  function updateState(value: Partial<FloatingPanelState>) {
    state.value = {
      ...state.value,
      ...value,
    }
  }

  return {
    state: readonly(state),
    updateState,
  }
}

const triggerElement = ref<HTMLElement>()

function setTriggerElement(triggerEl: Ref<HTMLElement | undefined>) {
  triggerElement.value = triggerEl.value
}

const { onPointerDown, bringUp, anchorStyle, panelStyle, isDragging, isVertical, isInactive, dockStyle } = usePosition(triggerElement, usePanelState)
const { togglePanelVisible, closePanel, panelVisible } = usePanelVisible(usePanelState)

provideFloatingPanelRootContext({
  setTriggerElement,
  triggerElement,
  positionAndStyle: {
    onPointerDown,
    bringUp,
    anchorStyle,
    panelStyle,
    isDragging,
    isVertical,
    isInactive,
    dockStyle,
  },
  panelVisibilities: {
    togglePanelVisible,
    closePanel,
    panelVisible,
  },
  usePanelState,

})

const overlayVisible = ref(true)
</script>

<template>
  <teleport to="body">
    <div
      v-show="state.preferShowFloatingPanel ? overlayVisible : panelVisible"
      class="floating-dock__anchor" :style="[anchorStyle]" :class="{
        'floating-dock__anchor--vertical': isVertical,
        'floating-dock__anchor--hide': isInactive,
      }" @mousemove="bringUp"
    >
      <slot v-bind="{ isDragging, isInactive, closePanel, panelVisible }" />
    </div>
  </teleport>
</template>

<style  lang="scss">
.floating-dock {
  // anchor
  &__anchor {
    position: fixed;
    z-index: 2147483645;
    transform-origin: center center;
    transform: translate(-50%, -50%) rotate(0);

    &--vertical {
      .floating-dock__trigger {
        transform: rotate(-90deg);
      }
    }

  }
}

@keyframes blink {
  0% {
    opacity: 0.2;
  }

  50% {
    opacity: 0.6;
  }

  100% {
    opacity: 0.2;
  }
}

@media print {
  #floating-dock-anchor {
    display: none;
  }
}
</style>
