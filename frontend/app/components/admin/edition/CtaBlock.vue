<template>
  <admin-edition-card :block-title="blockTitle">
    <template #default>
      <shad-input placeholder="Title" />
      <div v-if="richText" id="quill" />
      <shad-input v-else placeholder="Description" />
      <shad-input type="file" placeholder="Image" />
    </template>
  </admin-edition-card>
</template>

<script setup lang="ts">
const { blockTitle, richText = false } = defineProps<{ blockTitle: string, richText?: boolean }>()
</script>
