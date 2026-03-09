<template>
  <div class="grid grid-rows-2 grid-cols-2 gap-0 auto-rows-min rounded-md md:grid-rows-1 md:grid-cols-4">
    <client-only>
      <motion-group preset="fadeVisibleOnce">
        <hero-photo-call v-for="item in items" :key="item.title" :item="item" :delay="randomMotionDelays()" :alt="``" src="/images/photocall/customer20.jpg" subtitle="Coupe" title="Homme" />
        <!-- <hero-photo-call :delay="randomMotionDelays()" :alt="``" src="/images/photocall/customer22.jpg" subtitle="Coupe" title="Cheveux courts" />
        <hero-photo-call :delay="randomMotionDelays()" :alt="``" src="/images/photocall/customer23.jpg" subtitle="Coupe" title="Cheveux mi-longs" />
        <hero-photo-call :delay="randomMotionDelays()" :alt="``" src="/images/photocall/customer24.jpg" subtitle="Coupe" title="Cheveux longs" />
        <hero-photo-call :delay="randomMotionDelays()" :alt="``" src="/images/photocall/customer25.jpg" subtitle="Coupe" title="Cheveux XL" />
        <hero-photo-call :delay="randomMotionDelays()" :alt="``" src="/images/photocall/customer23.jpg" subtitle="Soin" title="Homme" />
        <hero-photo-call :delay="randomMotionDelays()" :alt="``" src="/images/photocall/customer23.jpg" subtitle="Soin" title="Femme" />
        <hero-photo-call :delay="randomMotionDelays()" :alt="``" src="/images/photocall/customer21.jpg" subtitle="Soin" title="Cheveux homme" /> -->
      </motion-group>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import type { Arrayable, Photocall } from '~/types'

const { get } = useBusinessDetails()
const items: Arrayable<Photocall> = [
  {
    src: "/images/photocall/customer20.jpg",
    alt: "",
    subtitle: "Coupe",
    title: "Homme"
  },
  {
    src: "/images/photocall/customer22.jpg",
    alt: "",
    subtitle: "Coupe",
    title: "Cheveux courts"
  },
  {
    src: "/images/photocall/customer23.jpg",
    alt: "",
    subtitle: "Coupe",
    title: "Cheveux mi-longs"
  },
  {
    src: "/images/photocall/customer24.jpg",
    alt: "",
    subtitle: "Coupe",
    title: "Cheveux longs"
  },
  {
    src: "/images/photocall/customer25.jpg",
    alt: "",
    subtitle: "Coupe",
    title: "Cheveux XL"
  },
  {
    src: "/images/photocall/customer23.jpg",
    alt: "",
    subtitle: "Soin",
    title: "Homme"
  },
  {
    src: "/images/photocall/customer23.jpg",
    alt: "",
    subtitle: "Soin",
    title: "Femme"
  },
  {
    src: "/images/photocall/customer21.jpg",
    alt: "",
    subtitle: "Soin",
    title: "Cheveux homme"
  }
]
</script>
