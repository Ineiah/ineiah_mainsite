import PrimeVue from 'primevue/config'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    unstyled: true,
    components: {
      button: {
        extend: {
          accent: {
            color: '#f59e0b',
            inverseColor: '#ffffff'
          }
        }
      }
    }
  })
})
