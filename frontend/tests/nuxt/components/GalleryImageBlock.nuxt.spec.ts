import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import { describe, expect, it, vi } from 'vitest'
import ImageBlock from '~/components/gallery/ImageBlock.vue'
import GallerySlider from '~/components/gallery/Slider.vue'
import type { GalleryImage } from '~/types'
import BaseTelephoneButton from '~/components/base/TelephoneButton.vue'
import { galleryImageFixture } from '../../__fixtures__'

// const { toggleSelectedMock } = vi.hoisted(() => ({ toggleSelectedMock: vi.fn() }))

// mockNuxtImport('useToggle', () => {
//   return () => [ref(true), toggleSelectedMock]
// })

describe('Gallery Image Block', () => {
  it('should render image component', async () => {
    const component = await mountSuspended(ImageBlock, {
      props: {
        image: galleryImageFixture
      }
    })

    const imageEl = component.get('img')
    expect(imageEl).toBeDefined()
    expect(imageEl.attributes('src')).toBe(image.image)
    expect(imageEl.attributes('alt')).toBeDefined()
  })
  
  it.skip('should render telephone button when selected', async () => {
    const component = await mountSuspended(ImageBlock, {
      props: {
        image: galleryImageFixture
      }
    })

    // Image Click
    const img = component.get('img')
    void img.trigger('click')
    
    const button = component.getComponent(BaseTelephoneButton)
    expect(button).toBeDefined()
  })

  it('should render image slider', async () => {
    const multipleImages = { ...galleryImageFixture }
    multipleImages.image = [
      'https://example.com/google.jpg',
      'https://example.com/google.jpg'
    ]
    const el = await mountSuspended(ImageBlock, { props: { image: multipleImages } })
    expect(el.getComponent(GallerySlider)).toBeDefined()
  })
})
