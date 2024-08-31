<script setup>
import { FloatingPanelContent, FloatingPanelDock, FloatingPanelRoot, FloatingPanelTrigger } from 'vue-floating-dock'
</script>

<template>
  <FloatingPanelRoot v-slot="{ isDragging }" name="vitepress-usageExemple" :minimize-inactive="5000">
    <FloatingPanelDock
      :class="{ '!cursor-grabbing': isDragging }"
      class="dock data-[state=inactive]:rounded-20px data-[state=inactive]:max-w-88px data-[state=inactive]:py-0.5 data-[state=inactive]:px-0 cursor-grab overflow-hidden w-188px max-w-280px py-1 pl-1 pr-5px h-55px flex items-center gap-0.5 justify-start overflow-hidden absolute left-0 top-0 translate-[-50%_-50%] rounded-3xl box-border border-px dark:border-#3336 border-#efefef dark:bg-#111 bg-white backdrop-blur-10px select-none text-[color:var(--floating-dock-widget-fg)] shadow-[2px_2px_8px_var(--floating-dock-widget-shadow)]"
    >
      <FloatingPanelTrigger
        class="flex-none w-[40px] h-[40px] flex justify-center items-center opacity-80 transition-opacity duration-[0.2s] ease-[ease-in-out] rounded-[100%] border-0 hover:opacity-100"
      >
        <svg class="w-5 h-5" viewBox="0 0 256 198" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z" />
          <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z" />
          <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z" />
        </svg>
      </FloatingPanelTrigger>
      <div class="divider flex-none" />
      <FloatingPanelTrigger
        class="flex-none w-[40px] h-[40px] flex justify-center items-center opacity-80 transition-opacity duration-[0.2s] ease-[ease-in-out] rounded-[100%] border-0 hover:opacity-100"
      >
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="31.88" height="32" viewBox="0 0 256 257">
          <defs>
            <linearGradient id="logosVitejs0" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
              <stop offset="0%" stop-color="#41D1FF" />
              <stop offset="100%" stop-color="#BD34FE" />
            </linearGradient>
            <linearGradient id="logosVitejs1" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
              <stop offset="0%" stop-color="#FFEA83" />
              <stop offset="8.333%" stop-color="#FFDD35" />
              <stop offset="100%" stop-color="#FFA800" />
            </linearGradient>
          </defs>
          <path
            fill="url(#logosVitejs0)"
            d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.5 6.5 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62"
          />
          <path
            fill="url(#logosVitejs1)"
            d="M185.432.063L96.44 17.501a3.27 3.27 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113"
          />
        </svg>
      </FloatingPanelTrigger>
      <div class="divider flex-none" />
      <FloatingPanelTrigger
        class="flex-none w-[40px] h-[40px] flex justify-center items-center opacity-80 transition-opacity duration-[0.2s] ease-[ease-in-out] rounded-[100%] border-0 hover:opacity-100"
      >
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="35.01" height="32" viewBox="0 0 256 234">
          <path
            fill="#FCC72B"
            d="m192.115 70.808l-61.2 88.488a5.27 5.27 0 0 1-2.673 2.002a5.3 5.3 0 0 1-3.343-.005a5.25 5.25 0 0 1-2.66-2.01a5.2 5.2 0 0 1-.903-3.203l2.45-48.854l-39.543-8.386a5.26 5.26 0 0 1-2.292-1.118a5.22 5.22 0 0 1-1.83-4.581a5.2 5.2 0 0 1 .895-2.383L142.218 2.27a5.28 5.28 0 0 1 6.016-1.996a5.24 5.24 0 0 1 2.66 2.01c.643.942.96 2.066.903 3.203l-2.45 48.855l39.542 8.386a5.26 5.26 0 0 1 2.293 1.117a5.21 5.21 0 0 1 1.829 4.582a5.2 5.2 0 0 1-.896 2.382"
          />
          <path
            fill="#729B1B"
            d="M128.025 233.537a12.36 12.36 0 0 1-8.763-3.63l-57.828-57.823a12.39 12.39 0 0 1 .023-17.5a12.394 12.394 0 0 1 17.5-.024l49.068 49.061L234.917 96.733a12.39 12.39 0 0 1 17.523 17.524l-115.655 115.65a12.34 12.34 0 0 1-8.76 3.63"
          />
          <path
            fill="#729B1B" fill-opacity=".5"
            d="M127.975 233.537a12.36 12.36 0 0 0 8.763-3.63l57.828-57.823a12.4 12.4 0 0 0 3.605-8.754a12.395 12.395 0 0 0-12.375-12.376a12.4 12.4 0 0 0-8.755 3.606l-49.066 49.061L21.082 96.733a12.392 12.392 0 0 0-17.524 17.524l115.656 115.65a12.35 12.35 0 0 0 8.76 3.63"
          />
        </svg>
      </FloatingPanelTrigger>
      <div class="divider flex-none" />
      <FloatingPanelTrigger
        class="flex-none w-[40px] h-[40px] flex justify-center items-center opacity-80 transition-opacity duration-[0.2s] ease-[ease-in-out] rounded-[100%] border-0 hover:opacity-100"
      >
        <svg
          class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220"
          fill="none"
        >
          <path
            d="M117.444 167.888C117.444 140.273 139.83 117.888 167.444 117.888V117.888C195.058 117.888 217.444 140.273 217.444 167.888V167.888C217.444 195.502 195.058 217.888 167.444 217.888V217.888C139.83 217.888 117.444 195.502 117.444 167.888V167.888Z"
            fill="#858585"
          />
          <path
            d="M117.444 53C117.444 25.3858 139.83 3 167.444 3V3C195.058 3 217.444 25.3858 217.444 53V98C217.444 100.761 215.205 103 212.444 103H122.444C119.683 103 117.444 100.761 117.444 98V53Z"
            fill="#CCCCCC"
          />
          <path
            d="M102 167.888C102 195.502 79.6142 217.888 52 217.888V217.888C24.3858 217.888 2 195.502 2 167.888L2.00001 122.888C2.00001 120.126 4.23859 117.888 7.00001 117.888L97 117.888C99.7614 117.888 102 120.126 102 122.888L102 167.888Z"
            fill="#4D4D4D"
          />
        </svg>
      </FloatingPanelTrigger>
    </FloatingPanelDock>
    <FloatingPanelContent class="border rounded-lg border-[rgba(125,125,125,0.2)] dark:bg-#101010 bg-white h-full shadow-sm flex w-full h-full">
      <div class="m-auto">
        Panel content
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
</style>
