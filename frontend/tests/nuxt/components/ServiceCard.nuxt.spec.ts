import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import type { Service } from '~/types'
import { serviceFixture } from '../../__fixtures__'

import ServicesCard from '~/components/services/Card.vue'
import ServicesCardInfo from '~/components/services/CardInfo.vue'

type TestCase = {
  title: string
  props: {
    index: number
    service: Service
  }
}

describe('Services Card', () => {
  const testCases: TestCase[] = [
    {
      title: 'renders the service card with correct props',
      props: {
        index: 0,
        service: serviceFixture
      }
    }
  ]

  testCases.forEach(({ title, props }) => {
    it(title, async () => {
      const component = await mountSuspended(ServicesCard, { props })

      const imageEl = component.find('img')
      expect(imageEl.exists()).toBe(true)
      expect(imageEl.attributes('src')).toBe(props.service.image)
    })
  })
})
