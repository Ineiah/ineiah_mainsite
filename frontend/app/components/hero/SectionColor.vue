<template>
  <div class="grid grid-cols-1 md:grid-cols-2 auto-rows-min mt-10 bg-primary-500 dark:bg-primary-700 dark:text-primary-200 overflow-hidden">
    <div class="items-center md:flex md:p-10">
      <div class="p-10 text-center md:text-left md:max-w-lg">
        <client-only>
          <h2 v-motion-slide-visible-once-bottom :delay="600" :enter="{ transition: { type: 'spring', stiffness: 20 } }" class="text-3xl font-bold mb-4 md:text-5xl text-primary-800 dark:text-primary-400 font-title leading-10 md:leading-15">
            L'histoire de <span class="italic">{{ get('legalName') }}</span>
          </h2>

          <template #fallback>
            <h2 class="text-3xl font-bold mb-4 md:text-5xl text-primary-800 font-title leading-10 md:leading-15">
              L'histoire de <span class="italic">{{ get('legalName') }}</span>
            </h2>
          </template>
        </client-only>

        <p class="font-light">
          Notre histoire, c’est avant tout une histoire humaine. Une histoire de passion, de transmission et
          d’amour du cheveu sous toutes ses formes. Derrière chaque geste se cache un parcours, une vision et l’envie
          profonde de créer un lieu où chacun peut se sentir reconnu, respecté et valorisé. Découvre comment cette aventure
          est née et ce qui l’anime au quotidien.
        </p>

        <nuxt-link-locale to="/notre-histoire">
          <volt-button size="large" class="mt-10" rounded>
            {{ $t("Découvrir") }}
            <icon name="fa7-solid:arrow-right" />
          </volt-button>
        </nuxt-link-locale>
      </div>
    </div>

    <div class="h-auto">
      <client-only>
        <nuxt-img v-motion-fade-once-visible :delay="600" :alt="`${get('founder')}`" src="/images/kira/photoshoot40.jpg" class="aspect-square object-cover h-full xl:w-full" />
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Business details
 */

const { get } = useBusinessDetails()
</script>
