import { describe, it, expect } from 'vitest'
import { useGalleryImages } from '../../app/composables/gallery/index'

describe('useGalleryImages', () => {
  it('should return an array of images with the correct root directory', () => {
    const { images } = useGalleryImages()

    expect(images.value).toBeInstanceOf(Array)
    expect(images.value.length).toBeGreaterThan(0)
  })

  it('should return an array of images on search', () => {
    const { filteredImages, search } = useGalleryImages()
    
    search.value = 'cheveux'

    expect(filteredImages.value).toBeInstanceOf(Array)
    expect(filteredImages.value.length).toBeGreaterThan(0)
  })
})

describe('useGalleryImage', () => {
  it('should return a specific image based on its name', () => {
    const image = useGalleryImage('group-1.jpg')
    expect(image).not.toBe('')
    console.log('Zaza', image)
  })
})
