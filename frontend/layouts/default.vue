<template>
  <section id="site">
    <ClientOnly>
      <BaseNavbar />
    </ClientOnly>
    <slot />

    <BaseReassurance />

    <BaseFooter />
  </section>
</template>

<script setup lang="ts">
</script>
