<template>
  <section id="site">
    <ClientOnly>
      <BaseNavbar @mobile-menu="() => showMobileMenu = true" />
    </ClientOnly>

    <div id="main">
      <slot />
    </div>

    <!-- Modals -->
    <ClientOnly>
      <ModalsMobile v-model="showMobileMenu" />
    </ClientOnly>

    <BaseReassurance />
    <BaseFooter />
  </section>
</template>

<script setup lang="ts">
const { y } = useScroll(window)

provide('scrollLevel', y)

const showMobileMenu = ref<boolean>(false)
</script>
