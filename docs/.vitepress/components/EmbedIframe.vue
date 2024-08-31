<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps<{ src: string }>()

const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <iframe
    :src="src"
    class="w-full"
  />
</template>
