<script setup lang="ts">
import FloatingPanelContent from './components/FloatingPanelContent.vue'
import FloatingPanelRoot from './components/FloatingPanelRoot.vue'
import FloatingPanelTrigger from './components/FloatingPanelTrigger.vue'
import FloatingPanelDock from './components/FloatingPanelDock.vue'

const checkIsSafari = () => navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')
</script>

<template>
  <!-- <AppMenu /> -->
  <div class="bg-black h-screen flex w-full">
    <FloatingPanelRoot v-slot="{ isDragging }" name="firstPanel" :minimize-inactive="5000">
      <div
        v-if="!checkIsSafari()" class="floating-dock__anchor--glowing"
        :style="isDragging ? 'opacity: 0.6 !important' : ''"
      />
      <FloatingPanelDock
        class="dock data-[state=inactive]:max-w-32px data-[state=inactive]:py-0.5 data-[state=inactive]:px-0  max-w-150px py-1 pl-1 pr-5px h-30px flex items-center gap-0.5 justify-start overflow-hidden absolute left-0 top-0 translate-[-50%_-50%] rounded-20px box-border border-px border-#3336 bg-#111"
      >
        <FloatingPanelTrigger
          class="flex-none cursor-pointer  data-[state=inactive]:saturate-0 data-[state=closed]:saturate-0  w-[30px] h-[30px] flex justify-center items-center opacity-80 transition-opacity duration-[0.2s] ease-[ease-in-out] rounded-[100%] border-0 hover:opacity-100"
        >
          <svg class="w-3.5 h-3.5" viewBox="0 0 256 198" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z" />
            <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z" />
            <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z" />
          </svg>
        </FloatingPanelTrigger>
        <FloatingPanelTrigger
          class="flex-none data-[state=inactive]:saturate-0 data-[state=closed]:saturate-0  w-[30px] h-[30px] flex justify-center items-center opacity-80 transition-opacity duration-[0.2s] ease-[ease-in-out] rounded-[100%] border-0 hover:opacity-100"
        >
          <svg class="w-3.5 h-3.5" viewBox="0 0 256 198" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z" />
            <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z" />
            <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z" />
          </svg>
        </FloatingPanelTrigger>
        <FloatingPanelTrigger
          class="flex-none data-[state=inactive]:saturate-0 data-[state=closed]:saturate-0  w-[30px] h-[30px] flex justify-center items-center opacity-80 transition-opacity duration-[0.2s] ease-[ease-in-out] rounded-[100%] border-0 hover:opacity-100"
        >
          <svg class="w-3.5 h-3.5" viewBox="0 0 256 198" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z" />
            <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z" />
            <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z" />
          </svg>
        </FloatingPanelTrigger>
      </FloatingPanelDock>
      <FloatingPanelContent class=" transition-all delay-500 duration-1000 border rounded-lg border-[rgba(125,125,125,0.2)] bg-#101010">
        <div class="flex h-full w-full items-center justify-center text-white">
          PanelContent
        </div>
      </FloatingPanelContent>
    </floatingpanelroot>
  </div>
</template>

<style>
.dock {
  transition:
    max-width 0.4s ease,
    padding 0.5s ease,
    transform 0.3s ease,
    all 0.4s ease;
}
.dock[data-state="inactive"][data-position="bottom"],
.dock[data-state="inactive"][data-position="left"]{
  border-bottom-left-radius:  0 !important;
  border-bottom-right-radius: 0 !important;
}

.dock[data-state="inactive"][data-position="right"],
.dock[data-state="inactive"][data-position="top"] {
  border-top-left-radius:  0 !important;
  border-top-right-radius: 0 !important;
}
</style>

<style lang="scss">
  .floating-dock__anchor {
  .glowing {
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

  &:hover {
    .glowing {
      opacity: 0.6;
    }

  }
}

.dock-transition {
  transition:
    max-width 0.4s ease,
    padding 0.5s ease,
    transform 0.3s ease,
    all 0.4s ease;
}

.floating-dock__anchor {
  &--glowing {
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

  &:hover {
    .floating-dock__anchor--glowing {
      opacity: 0.6;
    }
  }
}

.divider {
  border-left: 1px solid #8883;
  width: 1px;
  height: 10px;
}
</style>
