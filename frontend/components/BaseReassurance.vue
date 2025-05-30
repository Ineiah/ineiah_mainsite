<template>
  <div class="grid grid-rows-3 md:grid-cols-3 md:grid-rows-none p-10">
    <div v-for="i in 3" :key="i" class="p-5 md:p-10 flex items-center gap-4">
      <Icon name="fa-regular:heart" size="50" />
      <div class="flex-col">
        <p class="font-semibold">Une équipe à ton écoute</p>
        <a href="#">Contactez-nous</a>
      </div>
    </div>
  </div>
</template>
