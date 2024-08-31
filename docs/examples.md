# Examples

## VueDevtools Example

An example of Vue Devtools component.

https://devtools-next.vuejs.org/

<script setup>
import { withBase } from 'vitepress'
</script>

<div class="rounded-t-lg overflow-hidden">
    <EmbedIframe class="h-350px sm:h-450px" :src="withBase('/examples/component-vue-example.html')" />
</div>

<div class="rounded-b-lg dark:bg-#161618 border-x border-b relative overflow-auto max-h-400px   dark:border-zinc-800">
<div class="-my-4 ">

<<< @/components/ExampleVue.vue

</div>
</div>

## Question Mark Example

An example of a question mark component

<div class="rounded-t-lg overflow-hidden">
    <EmbedIframe class="h-350px sm:h-450px" :src="withBase('/examples/component-question-mark-example.html')" />
</div>

<div class="rounded-b-lg dark:bg-#161618 border-x border-b relative overflow-auto max-h-400px   dark:border-zinc-800">
<div class="-my-4 ">

<<< @/components/ExampleQuestionMark.vue

</div>
</div>
