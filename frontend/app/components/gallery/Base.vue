<template>
  <div id="image" class="grid grid-cols-1 md:grid-cols-3 auto-rows-max grid-flow-row-dense gap-2 transition-all duration-300">
    <gallery-image-block v-for="(image, idx) in images" :key="idx" :image="image" v-motion-pop :delay="randomMotionDelays()" />
  </div>
</template>

<script setup lang="ts">
import type { GalleryImage, Arrayable } from '~/types'

defineProps<{ images: Arrayable<GalleryImage> }>()

function randomMotionDelays() {
  return Math.floor(Math.random() * 300)
}
</script>
