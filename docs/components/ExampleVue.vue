<script setup>
// import { FloatingPanelContent, FloatingPanelDock, FloatingPanelRoot, FloatingPanelTrigger } from 'vue-floating-dock'

const checkIsSafari = () => navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')
</script>

<template>
  <FloatingPanelRoot v-slot="{ isDragging }" name="vue-panel">
    <div
      v-if="!checkIsSafari()" class="glowing-dock-vue"
      :style="isDragging ? 'opacity: 0.6 !important' : ''"
    />
    <FloatingPanelDock
      class="dock data-[state=inactive]:max-w-32px max-w-150px py-1 pl-1 pr-5px h-30px flex items-center gap-0.5 justify-start overflow-hidden absolute left-0 top-0 translate-[-50%_-50%] rounded-20px box-border border-px dark:border-#3336 border-#efefef dark:bg-#111 bg-white shadow-[2px_2px_8px_var(--floating-dock-widget-shadow)]"
    >
      <FloatingPanelTrigger
        class="data-[state=inactive]:saturate-0 data-[state=closed]:saturate-0 w-[30px] h-[30px] flex justify-center items-center opacity-80 transition-opacity duration-[0.2s] ease-[ease-in-out] rounded-[100%] border-0 hover:opacity-100"
      >
        <svg class="w-3.5 h-3.5" viewBox="0 0 256 198" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z" />
          <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z" />
          <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z" />
        </svg>
      </FloatingPanelTrigger>
    </FloatingPanelDock>
    <FloatingPanelContent class="border rounded-lg border-[rgba(125,125,125,0.2)] dark:bg-#101010 bg-white h-full shadow-sm">
      <div class="flex h-full w-full items-center justify-center text-white">
        PanelContent
      </div>
    </FloatingPanelContent>
  </FloatingPanelRoot>
</template>

<style>
.dark .dock {
  --floating-dock-widget-shadow: rgba(0, 0, 0, 0.3);
}

.dock {
  --floating-dock-widget-shadow: rgba(128, 128, 128, 0.1);
  transition:
    max-width 0.4s ease,
    padding 0.5s ease,
    transform 0.3s ease,
    all 0.4s ease;
}

.dock[data-state="inactive"][data-position="bottom"],
.dock[data-state="inactive"][data-position="left"] {
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.dock[data-state="inactive"][data-position="right"],
.dock[data-state="inactive"][data-position="top"] {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}
.divider {
  border-left: 1px solid #8883;
  width: 1px;
  height: 10px;
}

.floating-dock__anchor .glowing-dock-vue {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-50%, -50%);
    width: 160px;
    height: 160px;
    opacity: 0;
    transition: all 1s ease;
    pointer-events: none;
    z-index: -1;
    border-radius: 9999px;
    background-image: linear-gradient(45deg, #00dc82, #36e4da, #0047e1);
    filter: blur(60px);
}

.floating-dock__anchor:hover .glowing-dock-vue {
    opacity: 0.6;
}
</style>
