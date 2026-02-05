import type { ServiceSection } from '~/types'


export const defaultServices: ServiceSection[] = [
  {
    name: 'Shampoings coupes coiffage',
    globalDescription: "Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)",
    includes: [
      "Diagnostic / Conseils",
      "Shampooing conditionner",
      "Séchage (naturel ou brushing)"
    ],
    services: [
      {
        name: null,
        price: 35,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 30,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coupe'
      },
      {
        name: 'Court',
        price: 55,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coupe'
      },
      {
        name: 'Mi-Long',
        price: 65,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 90,
        image: '/testimages/jpeg/customer18.jpg',
        category: 'Coupe'
      },
      {
        name: 'XL',
        price: 75,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 120,
        image: '/testimages/jpeg/customer1.jpg',
        category: 'Coupe'
      },
      {
        name: 'Transformation',
        price: 75,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 120,
        image: '/testimages/jpeg/customer2.jpg',
        category: 'Coupe'
      }
    ]
  },
  {
    name: 'Soins Olaplex',
    globalDescription: "Olaplex est un traitement capillaire révolutionnaire qui répare les cheveux endommagés en reconstruisant les liaisons disulfures brisées. Il est idéal pour les cheveux fragilisés par les traitements chimiques, la chaleur ou les agressions environnementales, offrant une restauration profonde et durable pour des cheveux plus forts, plus sains et plus brillants.",
    includes: [
      "Soin réparateur profond / Anti-casse",
    ],
    services: [
      {
        name: 'Court',
        price: 35,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      },
      {
        name: 'Mi-long',
        price: 45,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'

      },
      {
        name: 'Long',
        price: 55,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      },
      {
        name: 'XL',
        price: 65,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      }
    ]
  },
  {
    name: 'Soins Kératine Végétale / Botox Naturel',
    globalDescription: "Le soin à la kératine végétale est un traitement capillaire naturel qui utilise des ingrédients d'origine végétale pour lisser, nourrir et renforcer les cheveux. Contrairement aux traitements à la kératine traditionnels qui contiennent souvent des produits chimiques agressifs, ce soin offre une alternative plus douce et respectueuse de la santé capillaire, tout en offrant des résultats durables pour des cheveux plus lisses, plus brillants et plus faciles à coiffer.",
    includes: [
      "Soin réparateur profond / Anti-casse",
    ],
    services: [
      {
        name: 'Court',
        price: 75,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 30,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      },
      {
        name: 'Mi-long',
        price: 85,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 50,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      },
      {
        name: 'Long',
        price: 95,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 70,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      },
      {
        name: 'XL',
        price: 105,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 90,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      }
    ]
  },
  {
    name: 'Couleurs',
    globalDescription: "La coloration capillaire est un processus de transformation qui permet de changer la couleur naturelle des cheveux en utilisant des produits chimiques ou naturels. Que vous souhaitiez couvrir des cheveux gris, ajouter des reflets, ou opter pour une teinte complètement différente, la coloration offre une multitude d'options pour exprimer votre style et votre personnalité à travers vos cheveux.",
    includes: [
      "Soin réparateur profond / Anti-casse",
    ],
    services: [
      {
        name: 'Court',
        price: 75,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 30,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coloration'
      },
      {
        name: 'Mi-long',
        price: 85,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 50,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coloration'
      },
      {
        name: 'Long',
        price: 95,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 70,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coloration'
      },
      {
        name: 'XL',
        price: 105,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 90,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coloration'
      }
    ]
  },
  {
    name: 'Balayage / Mèches',
    globalDescription: "Le balayage et les mèches sont des techniques de coloration qui ajoutent des reflets naturels et de la dimension à vos cheveux. Ces méthodes permettent d'éclaircir certaines sections pour un effet lumineux et personnalisé, tout en respectant la santé de vos cheveux grâce à des produits de qualité et des soins adaptés.",
    includes: [
      "Soin réparateur profond / Anti-casse",
    ],
    services: [
      {
        name: 'Court',
        price: 75,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 30,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Mèches'
      },
      {
        name: 'Mi-long',
        price: 85,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 50,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Mèches'
      },
      {
        name: 'Long',
        price: 95,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 70,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Mèches'
      },
      {
        name: 'XL',
        price: 105,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 90,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Mèches'
      }
    ]
  }
]

export function useServices() {
  const services = ref<ServiceSection[]>(defaultServices)

  return {
    services
  }
}
