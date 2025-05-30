<template>
  <div class="flex justify-center p-5">
    <div v-for="i in 3" :key="i" class="p-10 flex items-center gap-4">
      <Icon name="fa-regular:heart" size="50" />
      <div class="flex-col">
        <p class="font-semibold">Une équipe à ton écoute</p>
        <a href="#">Contactez-nous</a>
      </div>
    </div>
  </div>
</template>
