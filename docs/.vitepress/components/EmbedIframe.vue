<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps<{ src: string }>()
const iframeRef = ref<HTMLIFrameElement>()

function handleOnLoad() {
  if (iframeRef.value) {
    const body = iframeRef.value.contentWindow?.document.body
    if (body) {
      body.classList.add('iframe-body')
    }
  }
}
</script>

<template>
  <iframe
    ref="iframeRef"
    :src="src"
    :allowtransparency="true"
    class="w-full rounded-t-8px border  border-[var(--vp-c-divider)]  bg-gradient-to-b dark:from-zinc-900 dark:via-zinc-950 dark:to-black from-zinc-50 via-zinc-100 to-zinc-200"
    @load="handleOnLoad"
  />
</template>

<style>
.iframe-body {
  background-color: transparent;
}
</style>
