import { computed, onMounted } from 'vue'
import { useEventListener } from '@vueuse/core'
import type { UsePanelStateReturn } from '@/components/FloatingPanelRoot.vue'

export function usePanelVisible(usePanelState: () => UsePanelStateReturn) {
  const { state, updateState } = usePanelState()
  const visible = computed({
    get() {
      return state.value.open
    },
    set(value) {
      updateState({
        open: value,
      })
    },
  })

  const toggleVisible = (_?: unknown, state?: boolean) => {
    visible.value = state ?? !visible.value
  }

  const closePanel = () => {
    if (!visible.value)
      return
    visible.value = false
  }

  onMounted(() => {
    useEventListener(window, 'keydown', (e) => {
      // cmd + shift + D in <macOS>
      // alt + shift + D in <Windows>
      if (e.code === 'KeyD' && e.altKey && e.shiftKey)
        toggleVisible()
    })
  })

  return {
    panelVisible: visible,
    togglePanelVisible: toggleVisible,
    closePanel,
  }
}
