<template>
  <section id="index" class="ps-[400px] space-y-2">
    <div class="grid grid-cols-12">
      <div class="col-span-12">
        <shad-button>
          Ajouter
        </shad-button>
      </div>
    </div>

    <shad-card class="bg-brand-brown-secondary-100">
      <shad-card-content>
        <div class="flex justify-between items-center">
          <p class="font-bold">Prestation #1</p>

          <div class="space-x-2">
            <shad-button>
              <icon name="i-fa7-solid:pencil" />
            </shad-button>

            <shad-button>
              <icon name="i-fa7-solid:trash" />
            </shad-button>
          </div>
        </div>
      </shad-card-content>
    </shad-card>

    <shad-card>
      <shad-card-content>
        <div class="space-y-2">
          <div class="grid grid-cols-2 gap-2">
            <shad-input placeholder="Titre" />
            <shad-input placeholder="Sous-titre" />
          </div>

          <shad-input placeholder="Description" />

          <div class="max-w-150">
            <shad-input placeholder="Prix" />
          </div>

          <div class="p-5 bg-background rounded-lg">
            <div class="flex justify-between gap-2 items-center">
              <shad-input placeholder="Contenu de la prestation" />
              <shad-button size="lg">
                <ion name="i-fa7-solid:plus" />
              </shad-button>
            </div>
          </div>
        </div>
      </shad-card-content>
    </shad-card>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Admin Prestations",
  layout: "admin"
})
</script>
