<template>
  <Separator data-sidebar="separator" :class="cn('mx-2 w-auto bg-sidebar-border', props.class)">
    <slot />
  </Separator>
</template>

<script setup lang="ts">
import { cn } from "~/lib/utils"
import { Separator } from "../separator"

import type { HTMLAttributes } from "vue"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>
