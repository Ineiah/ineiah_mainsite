<template>
  <volt-card class="text-brand-brown-100 bg-cover" style="background-image:url('/hero/hair7.jpg')">
    <template #content>
      <div class="p-8 md:p-20">
        <div class="flex-col justify-center mx-auto text-center max-w-7xl">
          <h2 class="text-5xl md:text-7xl text-shadow-brand-500 font-bold mb-5 font-title">
            <slot name="title">
              Prête à se sublimer
            </slot>
          </h2>

          <p class="text-light max-w-lg mx-auto">
            <slot>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit enim eu lorem placerat consequat fusce
              suspendisse ornare duis eget. Varius aliquet ad non fermentum sociosqu praesent litora dolor dapibus varius.
              Quisque pellentesque vivamus odio taciti risus rutrum ipsum lacus eleifend erat. Ornare congue mauris habitant
              vestibulum platea pretium feugiat pharetra primis dictumst. Blandit quam vestibulum ante class nec convallis
              orci etiam vestibulum netus. Phasellus laoreet faucibus vel ac natoque vel fermentum accumsan taciti enim.
            </slot>
          </p>

          <volt-button :id="id" size="xl" class="mt-10" rounded>
            <BaseTelephoneLink :with-icon="true">
              <slot name="action">
                Obtenir mon moment plaisir
              </slot>
            </BaseTelephoneLink>
          </volt-button>
        </div>
      </div>
    </template>
  </volt-card>
</template>

<script setup lang="ts">
const { id = 'tel-offer-section' } = defineProps<{ id: string }>()
</script>
