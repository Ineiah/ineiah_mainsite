<template>
  <section class="font-sans bg-primary-100 dark:bg-primary-800 relative">
    <nuxt-layout>
      <nuxt-page />

      <dev-only>
        <cookie-banner />
        <lazy-cookie-options :show="showOptions" :hydrate-when="showOptions" />
      </dev-only>
    </nuxt-layout>
  </section>
</template>

<script setup lang="ts">
import { provideSSRWidth } from '@vueuse/core'

const nuxtApp = useNuxtApp()
provideSSRWidth(1024, nuxtApp.vueApp)

const isMobile = useMediaQuery('(min-width: 320px)')
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

useState('isMobile', () => isMobile)
useState('isLargeScreen', () => isLargeScreen)

const { locales, locale } = useI18n()
useState('ogLocaleAlternate', () => locales.value.filter(l => l.code !== locale.value).map(l => l.code))

/**
 * Cookie
 */

const { showOptions } = useCookieComposable()

/**
 * Background theme
 */

const tokens = ['bg-primary-500/20', 'dark:bg-primary-800']

onMounted(() => {
  document.querySelector('html')?.classList.add(...tokens)
})

onUnmounted(() => {
  document.querySelector('html')?.classList.remove(...tokens)
})

/**
 * General SEO Tags
 */

const { geoLocation, get } = useBusinessDetails()

useHead({
  meta: [
    {
      name: 'geo.region',
      content: 'FR-HDF'
    },
    {
      name: 'geo.placename',
      content: get('address').city
    },
    {
      name: 'geo.position',
      content: geoLocation.value
    },
    {
      name: 'ICBM',
      content: geoLocation.value
    }
  ]
})

useHead({
  htmlAttrs: {
    lang: locale.value
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})

const { services } = useServices()

useSchemaOrg(
  [
    defineOrganization({
      '@type': 'HairSalon',
      'name': get('legalName'),
      'legalName': get('legalName'),
      'alternateName': 'Inéïah Beauté',
      'description': get('description'),
      'logo': get('logo'),
      'email': get('contact').email,
      'telephone': get('contact').telephone,
      'sameAs': get('sameAs'),
      'image': get('image'),
      'priceRange': '$$',
      'foundingDate': get('foundingDate'),
      'foundingLocation': {
        '@type': 'Place',
        'name': get('foundingLocation')
      },
      'founder': {
        '@type': 'Person',
        'name': get('founder'),
        'jobTitle': 'Founder & CEO',
        'description': get('founderDescription'),
        'image': get('founderImage'),
        'url': null,
        'sameAs': get('sameAs'),
        'worksFor': {
          '@type': 'Organization',
          'name': get('legalName')
        }
      },
      'numberOfEmployees': {
        '@type': 'QuantitativeValue',
        'value': 1
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Services',
        'itemListElement': services.value.flatMap((service) => {
          return service.services.map(subService => ({
            '@type': 'Offer',
            'price': subService.price,
            'priceCurrency': 'EUR',
            'availability': 'https://schema.org/InStock',
            'itemOffered': {
              '@type': 'Service',
              'name': `${service.name} - ${subService.name || ''} - ${subService.gender}`.trim(),
              'description': service.globalDescription,
              'serviceType': null,
              'provider': {
                '@type': 'Organization',
                'name': get('legalName')
              }
            }
          }))
        })
      },
      'taxId': null,
      'vatId': null,
      'address': {
        streetAddress: get('address').street,
        addressLocality: get('address').city,
        postalCode: get('address').postalCode,
        addressCountry: 'FR'
      },
      'currenciesAccepted': 'EUR',
      'areaServed': {
        '@type': 'Place',
        'name': {
          '@type': 'City',
          'name': get('address').city,
          'addressCountry': 'FR'
        }
      },
      'paymentAccepted': [
        'Credit Card',
        'Apple Pay',
        'Google Pay'
      ],
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Monday',
          'opens': '09:00:00',
          'closes': '17:00:00'
        },
        { '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Tuesday',
          'opens': '09:00:00',
          'closes': '17:00:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Wednesday',
          'opens': '09:00:00',
          'closes': '17:00:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Thursday',
          'opens': '09:00:00',
          'closes': '15:00:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Friday',
          'opens': '09:00:00',
          'closes': '15:00:00'
        }
      ],
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'contactType': 'customer service',
          'telephone': get('contact').telephone,
          'email': get('contact').email,
          'availableLanguage': ['English', 'French'],
          'hoursAvailable': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            'opens': '09:00:00',
            'closes': '15:00:00'
          }
        }
      ]
    })
  ]
)
</script>

<style lang="scss">
.page {

  &-enter-active,
  &-leave-active {
    transition: all 0.4s;
  }

  &-enter-from,
  &-leave-active {
    filter: blur(1rem);
  }
}
</style>
