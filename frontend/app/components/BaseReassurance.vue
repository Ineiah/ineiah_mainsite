<template>
  <div class="grid grid-rows-3 md:grid-cols-3 md:grid-rows-none p-10">
    <div v-for="i in 3" :key="i" class="p-5 md:p-10 flex items-center gap-4 md:mx-auto">
      <Icon name="fa-solid:heart" size="50" class="text-brand-brown-600" />
      <div class="flex-col">
        <p class="font-semibold text-brand-brown-700">
          {{ title }}
        </p>

        <BaseTelephoneLink :with-icon="false" class="text-brand-brown-600" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseTelephoneLink from './BaseTelephoneLink.vue';

 
const { title = 'Une équipe à ton écoute' } = defineProps<{ title?: string }>()
</script>
