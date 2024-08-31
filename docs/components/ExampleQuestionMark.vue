<script setup>
// import { FloatingPanelContent, FloatingPanelDock, FloatingPanelRoot, FloatingPanelTrigger } from 'vue-floating-dock'

const checkIsSafari = () => navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')
</script>

<template>
  <FloatingPanelRoot v-slot="{ isDragging }" name="question-dock" :minimize-inactive="-1">
    <div v-if="!checkIsSafari()" class="glowing-dock" :style="isDragging ? 'opacity: 0.6 !important' : ''" />
    <FloatingPanelDock
      :class="{ 'h-51px w-51px': isDragging, 'w-40px h-40px': !isDragging }"
      class="dock data-[state=open]:!h-51px data-[state=open]:!w-51px overflow-hidden hover:w-51px hover:h-51px  max-w-350px flex items-center gap-0.5 justify-start overflow-hidden absolute left-0 top-0 translate-[-50%_-50%] rounded-full box-border  bg-purple-500 backdrop-blur-10px select-none shadow-lg"
    >
      <FloatingPanelTrigger
        class="text-2xl w-full h-full font-medium text-white flex justify-center items-center opacity-80 transition-opacity duration-[0.2s] ease-[ease-in-out] rounded-[100%] border-0 hover:opacity-100"
      >
        ?
      </FloatingPanelTrigger>
    </FloatingPanelDock>
    <FloatingPanelContent class="border rounded-lg border-[rgba(125,125,125,0.2)]  h-full  dark:bg-#101010 bg-white h-full shadow-sm" />
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

.floating-dock__anchor .glowing-dock {
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
    background-image: linear-gradient(45deg, #cd5bd1, #cf3dd4, #e103e9);
    filter: blur(60px);
}

.floating-dock__anchor:hover .glowing-dock {
    opacity: 0.6;
}
</style>
