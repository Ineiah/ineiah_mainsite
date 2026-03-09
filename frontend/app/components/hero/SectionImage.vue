<template>
  <div class="p-5 md:p-15 overflow-hidden">
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
      <client-only>
        <div class="transition-all ease-in has-[img]:hover:zoom-in-20">
          <nuxt-img v-motion-slide-visible-once-left :delay="200" :alt="`Séance photo de ${get('legalName')}`" src="/images/kira/photoshoot46-small.webp" class="rounded-lg aspect-square object-cover w-full" />
        </div>

        <template #fallback>
          Loading image...
        </template>
      </client-only>

      <div class="flex flex-col justify-center dark:text-primary-200">
        <client-only>
          <h2 v-motion-slide-visible-once-bottom :delay="600" :enter="{ transition: { type: 'spring', stiffness: 20 }}" class="text-5xl font-bold mb-10 text-primary-500 font-title leading-15">
            La coiffure pensée pour <span class="text-primary-800 dark:text-primary-400">tous</span> les types de cheveux
          </h2>
        </client-only>

        <p>
          Bien plus qu'un salon, chez Inéïah, la beauté est révélée, le cheveux est respecté,
          son passé est écouté, son présent est choyé et son futur est sublimé.
        </p>

        <!-- <p>
          Ici, chaque rendez-vous est un moment pour soi. On prend le temps de t’écouter, de 
          comprendre tes cheveux, ton style et ton histoire. Que tes cheveux soient crépus, bouclés ou lisses, 
          tu repars avec bien plus qu’une coiffure : confiance, bien-être et une vraie reconnexion à toi-même.
        </p> -->

        <p>
          Au-delà du résultat, c’est l’expérience qui compte : un espace bienveillant, sans jugement, où chaque 
          texture est respectée et chaque personne valorisée. Un lieu où tu peux enfin te sentir comprise, libre d’être toi, 
          et pleinement mise en lumière.
        </p>

        <div id="cta-1" class="mt-10">
          <base-telephone-button id="tel-call-us-intermediate-1" :with-icon="true" size="large" text="Je veux me faire belle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Business details
 */

const { get } = useBusinessDetails()
</script>
