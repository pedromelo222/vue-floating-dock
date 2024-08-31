<script setup lang="ts">
interface ProseCodeInlineProps {
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<ProseCodeInlineProps>(), {
  variant: 'primary',
})
</script>

<template>
  <code
    class="py-0.5 px-1 rounded-none inline"
    :class="`${
      props.variant === 'primary'
        ? 'dark:!bg-[var(--vp-c-indigo-soft)]  dark:!text-[var(--vp-c-indigo-2)]'
        : 'dark:!bg-neutral-600/30 dark:!text-neutral-400'
    }`"
  >
    <slot />
  </code>
</template>
