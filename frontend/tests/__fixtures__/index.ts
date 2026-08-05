import type { GalleryImage, Service, ServiceSection } from '../../app/types'
// import faker from '@faker-js/faker'

export const serviceFixture: Service = {
  name: 'Court',
  price: 45,
  priceText: null,
  gender: 'Mixte',
  description: null,
  includes: [],
  duration: 60,
  image: '/images/services/customer15.jpg',
  category: 'Coupe'
}

export const serviceSectionFixture: ServiceSection = {
  name: 'Shampoings • Coupes • Mise en forme',
  globalDescription: 'Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)',
  includes: [
    'Diagnostic / Conseils',
    'Shampooing conditionner',
    'Séchage (naturel ou brushing)'
  ],
  services: [
    serviceFixture
  ]
}

export const galleryImageFixture: GalleryImage = {
  name: 'Coupe courte femme',
  image: '/images/gallery/customer15.jpg',
  category: 'image',
  url: null,
  alt: 'Coupe courte femme',
  isVisible: true,
  author: {
    name: 'John Doe',
    website: null,
    instagram: 'johndoe',
    username: 'johndoe'
  },
  model: {
    instagram: 'modelinstagram'
  },
  brands: [
    {
      name: 'Brand Name',
      website: 'https://brandwebsite.com'
    }
  ]
}
