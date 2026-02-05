import type { Arrayable, GalleryImage } from '~/types'

const galleryImages: Arrayable<GalleryImage> = [
  {
    name: 'Lissage brésilien',
    image: '/hero/hair6.jpg'
  },
  {
    name: 'Boucles naturelles',
    image: '/testimages/jpeg/customer10.jpg'
  },
  {
    name: 'Coupe pixie moderne',
    image: '/hero/hair10.jpg'
  },
  {
    name: 'Brushing volumineux',
    image: '/testimages/jpeg/customer18.jpg'
  },
  {
    name: 'Coupe dégradée',
    image: '/testimages/jpeg/customer6.jpg'
  },
  {
    name: 'Chignon élégant',
    image: '/hero/hair12.jpg'
  },
  {
    name: 'Nom de la coupe',
    image: '/hero/hair6.jpg'
  },
  {
    name: 'Coupe chignon',
    image: '/testimages/jpeg/customer15.jpg'
  },
  {
    name: 'Coupe afro',
    image: '/testimages/jpeg/customer11.jpg'
  },
  {
    name: 'Coupe undercut',
    image: [
      '/testimages/jpeg/customer13.jpg',
      '/testimages/jpeg/customer14.jpg',
      '/testimages/jpeg/customer17.jpg'
    ]
  },
  {
    name: 'Coupe bob asymétrique',
    image: '/hero/hair10.jpg'
  },
  {
    name: 'Coupe tresse',
    image: [
      '/testimages/jpeg/customer4.jpg',
      '/testimages/jpeg/customer5.jpg'
    ]
  }
]

/**
 * Custom composable to manage the image gallery state and filtering logic.
 * Currently, it returns all images without filtering, but it can be extended to implement search functionality.
 */
export function useImageGallery() {
  const images = ref(galleryImages)

  const search = ref<string>('')

  const filteredImages = computed(() => {
    return images.value.filter(img => img.name.toLowerCase().includes(search.value.toLowerCase())) // Currently returns all images
  })

  const keywords = computed(() => {
    const allKeywords = images.value.map(image => image.name)
    return Array.from(new Set(allKeywords)) // Return unique keywords
  })

  return {
    images,
    search,
    filteredImages,
    keywords
  }
}
