---
outline: deep
---

# Usage

A dock component with a panel anchored to the dock.

<script setup>
import { withBase } from 'vitepress'
</script>

<div class="rounded-t-lg overflow-hidden">
    <EmbedIframe class="h-350px sm:h-450px" :src="withBase('/guide/component-usage-example.html')" />
</div>

<div class="rounded-b-lg dark:bg-#161618 border-x border-b relative overflow-auto max-h-400px   dark:border-zinc-800">
<div class="-my-4 ">

<<< @/components/UsageExample.vue

</div>
</div>

## Anatomy

```vue
<script setup>
import {
  FloatingPanelContent,
  FloatingPanelDock,
  FloatingPanelRoot,
  FloatingPanelTrigger
} from 'vue-floating-dock'
</script>

<template>
  <FloatingPanelRoot>
    <FloatingPanelDock>
      <FloatingPanelTrigger />
      <FloatingPanelTrigger />
    </FloatingPanelDock>
    <FloatingPanelContent />
  </FloatingPanelRoot>
</template>
```

## API Reference

### Root

Contains all the parts of the floating dock.

<PropsTable
:data="[
  {
    name: 'name',
    description: '<p>The name of the panel must be unique to work with multiple panels, the name is used to save the state in storage.</p>\n',
    type: 'string',
    required: false,
    default: '\'default\''
  },
  {
    name: 'minimizeInactive',
    description: '<p>Minimize floating panel on inactive, set -1 to disable. The number represents milliseconds (e.g., 5000 for 5 seconds).</p>\n',
    type: 'number',
    required: false,
    default: '5000'
  },
]" />

<SlotsTable :data="[
  {
    name: 'isDragging',
    description: '<p>Indicates whether the dock is currently being dragged.</p>\n',
    type: 'boolean'
  },
  {
    name: 'isInactive',
    description: '<p>Indicates whether the dock is currently inactive.</p>\n',
    type: 'boolean'
  },
  {
    name: 'closePanel',
    description: '<p>Function to Close the panel.</p>\n',
    type: '() => void'
  },
  {
    name: 'panelVisible',
    description: '<p>Indicates whether the panel is currently visible.</p>\n',
    type: 'boolean'
  }
]" />

### Dock

Contains the dock panel that holds the triggers.

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['inactive', 'open', 'closed'],
   },
   {
     attribute: '[data-position]',
     values: ['top', 'bottom', 'left', 'right'],
   }
  ]"
/>

### Trigger

The trigger that opens the content panel, need to be placed inside the dock, multiple triggers can be used.

<PropsTable
:data="[
  {
    name: 'as',
    description: '<p>TThe element or component this component should render as.</p>\n',
    type: 'button | div',
    required: false,
    default: '\'button\''
  },
  {
    name: 'minimizeInactive',
    description: '<p>Minimize floating panel on inactive, set -1 to disable. The number represents milliseconds (e.g., 5000 for 5 seconds).</p>\n',
    type: 'number',
    required: false,
    default: '5000'
  },
]" />

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['inactive', 'open', 'closed'],
   },
   {
     attribute: '[data-position]',
     values: ['top', 'bottom', 'left', 'right'],
   }
  ]"
/>

### Content

The content panel that opens when the trigger is clicked. The panel is anchored to the dock.

<DataAttributesTable
  :data="[
   {
     attribute: '[data-position]',
     values: ['top', 'bottom', 'left', 'right'],
   }
  ]"
/>
