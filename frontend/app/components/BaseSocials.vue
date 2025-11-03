<template>
  <div class="inline-flex justify-start w-full gap-2 mt-5 shadow-none">
    <volt-button v-for="social in footer.socials" :id="`social-${social.name.toLowerCase()}`" :key="social.name" variant="link" rounded>
      <a :href="social.url" target="_blank">
        <Icon :name="`fa-brands:${social.icon}`" :alt="`${businessDetails.name} - ${social.name}`" class="text-brand-500" size="20" />
      </a>
    </volt-button>
  </div>
</template>

<script setup lang="ts">
import { businessDetails, footer } from '~/data'
</script>
