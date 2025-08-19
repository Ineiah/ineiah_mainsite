<template>
  <admin-edition-card block-title="Photocall">
    <template #default>
      <div v-for="(item, index) in items" :key="index" class="flex justify-around gap-2">
        <shad-input v-model="item.title" placeholder="Title" />
        <shad-input v-model="item.subtitle" placeholder="Subtitle" />
        <shad-input type="file" v-model="item.image" placeholder="Image" />
      </div>
    </template>
  </admin-edition-card>
</template>

<script setup lang="ts">
const items = ref([
  {
    title: "",
    subtitle: "",
    image: null
  },
  {
    title: "",
    subtitle: "",
    image: null
  },
  {
    title: "",
    subtitle: "",
    image: null
  },
  {
    title: "",
    subtitle: "",
    image: null
  }
])
</script>
