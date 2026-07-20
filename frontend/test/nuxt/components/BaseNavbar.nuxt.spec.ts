import { NuxtLinkLocale } from '#components'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it, vi } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import { nextTick, ref } from 'vue'

import BaseNavbar from '../../../app/components/base/Navbar.vue'

mockNuxtImport<typeof import('vue-router').useRouter>('useRouter', async (original) => {
  return () => ({
    ...original(),
    meta: {
      name: 'privacy'
    }
  })
})

vi.mock('vue-i18n', async (original) => {
  const actual = await original<typeof import('vue-i18n')>()
  return {
    ...actual,
    t: vi.fn((key: string) => key)
  }
})

describe('Navbar', () => {
  it('should render', async () => {
    const component = await mountSuspended(BaseNavbar)
    
    const links = component.findAll('a')
    links.forEach((link) => {
      const message: string = `Link with text "${link.text()}" should have href and id attributes`
      expect(link.attributes('href'), message).toBeDefined()
      expect(link.attributes('id'), message).toBeDefined()
    })
  })

  it('should contain call to action', async () => {
    const component = await mountSuspended(BaseNavbar, { props: { id: 'navbar', buttonClass: '' } })
    const cta = component.find(`[id="tel-call-us-navbar"]`)

    expect(cta.exists()).toBeTruthy()

    const value = cta.attributes('href')
    expect(value).toBeDefined()
    expect(value?.startsWith('tel:')).toBeTruthy()
  })

  it('emits when mobile button is clicked', async () => {
    const component = await mountSuspended(BaseNavbar)
    const button = component.get('button[aria-controls="mobile-menu"]')

    await button.trigger('click')
    expect(component.emitted('mobile-menu')).toBeTruthy()
  })

  it('has all expected links', async () => {
    const component = await mountSuspended(BaseNavbar)
    const links = component.findAllComponents(NuxtLinkLocale)

    const linkTexts = links.map(link => link.text())
    const expectedTexts = [ 'Accueil', 'Prestations', 'Notre histoire' ]

    expectedTexts.forEach((text) => {
      expect(linkTexts).toContain(text)
    })
  })

  it('has accessibility attributes', async () => {
    const component = await mountSuspended(BaseNavbar)

    // expect(component.element.tagName).toBe('NAV')
    // expect(component.html()).toContain('sr-only')
    expect(component.get('button').attributes('aria-controls')).toBe('mobile-menu')
  })

  it.skip('matches snapshot', async () => {
    const component = await mountSuspended(BaseNavbar)
    expect(component.html()).toMatchSnapshot()
  })
})

vi.mock('@vueuse/core', async (original) => {
  const actual = await original<typeof import('@vueuse/core')>()
  return {
    ...actual,
    useScroll: vi.fn((_element: MaybeRefOrGetter<Window>) => ({ y: ref(0) }))
  }
})

describe('fixed when scrolled', () => {
  it.todo('applies bg-brand-pink-500 if show showBackground is true', async () => {
    const y = ref(100)

    const component = await mountSuspended(BaseNavbar)

    y.value = 800
    await nextTick()

    expect(component.classes()).toContain('bg-brand-pink-500')
    expect(component.classes()).not.toContain('bg-transparent')
  })

  it.todo('applises bg-brand-transparent if show showBackground is false', async () => {
    const component = await mountSuspended(BaseNavbar, {
      global: {
        mocks: {
          useScroll: () => ({ y: ref(0) })
        }
      }
    })

    await nextTick()

    expect(component.classes()).toContain('bg-transparent')
    expect(component.classes()).not.toContain('bg-brand-pink-500')
  })
})
