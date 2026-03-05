<template>
  <div class="grid grid-rows-2 grid-cols-2 gap-0 auto-rows-min rounded-md md:grid-rows-1 md:grid-cols-4">
    <client-only>
      <motion-group preset="fadeVisibleOnce">
        <hero-photo-call :delay="randomMotionDelays()" src="/images/dev/hair10.jpg" alt="Some alt" title="Cheveux fins" />
        <hero-photo-call :delay="randomMotionDelays()" src="/images/photocall/customer6.jpg" alt="Some alt" title="Cheveux longs" />
        <hero-photo-call :delay="randomMotionDelays()" src="/images/dev/hair12.jpg" alt="Some alt" title="Cheveux réactivés" />
        <hero-photo-call :delay="randomMotionDelays()" src="/images/photocall/customer18.jpg" alt="Some alt" title="Cheveux afro" />
      </motion-group>
    </client-only>
  </div>
</template>

<script setup lang="ts">
</script>
