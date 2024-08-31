<script setup lang="ts">
import { ProseCodeInline, ProseTable, ProseTd, ProseTh, ProseTr } from '../prose'

interface PropDef {
  name?: string
  required?: boolean
  type: string
  typeSimple: string
  description?: string
}

interface SlotsTableProps {
  data: PropDef[]
}
const props = defineProps<SlotsTableProps>()
</script>

<template>
  <ProseTable>
    <thead class="">
      <ProseTr class="">
        <ProseTh class="w-1/3">
          <span>Slots (default)</span>
        </ProseTh>
        <ProseTh>
          <span>Payload</span>
        </ProseTh>
      </ProseTr>
    </thead>
    <tbody>
      <ProseTr
        v-for="(prop, index) in props.data"
        :key="`${prop.name}-${index}`"
      >
        <ProseTd>
          <div class="flex h-full items-start gap-1">
            <ProseCodeInline class=" !text-[13px]">
              {{ prop.name }}
            </ProseCodeInline>
          </div>
        </ProseTd>
        <ProseTd>
          <ProseCodeInline variant="secondary">
            {{ prop.type }}
          </ProseCodeInline>
          <div
            class="vp-raw [&_a]:underline flex flex-col gap-2  mt-2 text-sm dark:text-neutral-300"
            v-html="prop.description"
          />
        </ProseTd>
      </ProseTr>
    </tbody>
  </ProseTable>
</template>
