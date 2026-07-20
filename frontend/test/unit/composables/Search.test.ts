import { describe, expect, it, vi, beforeEach } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { objectResolver, SearchItem, defineSearchResolver, useGoogleSearchComposable, GoogleSearchOptions } from '../../../app/composables/google_search'
import { defineComponent, ref } from 'vue'

const testData: SearchItem[] = [
  { id: '1', title: 'Product 1', description: 'Description for Product 1', slug: 'product-1', type: 'product', to: '/product-1', tags: [ 'tag1', 'tag2' ] },
  { id: '2', title: 'Page 1', description: 'Description for Page 1', slug: 'page-1', type: 'page', to: '/page-1', tags: [ 'tag3' ] }
]

// const mockFunction = vi.fn((_query: string): SearchItem[] => {
//   return [
//     {
//       id: '1',
//       title: 'Product 1',
//       description: 'Description for Product 1',
//       slug: 'product-1',
//       type: 'product',
//       to: '/product-1',
//       tags: ['tag1', 'tag2']
//     }
//   ]
// })

vi.mock('@vueuse/core', async (actualImport) => {
  const original = await actualImport<typeof import('@vueuse/core')>()
  return {
    ...original,
    useUrlSearchParams: vi.fn(() => {
      return {
        q: ''
      }
    })
  }
})

// describe('useGoogleSearch', () => {
//   let result: ReturnType<typeof useGoogleSearch> | undefined
  
//   beforeEach(async () => {
//     await mountSuspended(defineComponent({
//       template: '<div></div>',
//       setup() {
//         result = useGoogleSearch(mockFunction)
//         return {
//           result
//         }
//       }
//     }))
//   })

//   it('should return all items when query is empty', async () => {
//     expect(result).toBeDefined()

//     if (result) {
//       expect(result).toHaveProperty('activeType')
//       expect(result).toHaveProperty('query')
//       expect(result).toHaveProperty('allItems')
//       expect(result).toHaveProperty('searchedItems')
  
//       expect(result.query.value).toBe('')
//       expect(result.searchedItems.value.length).toBe(1)
//     }
//   })

//   it('should return searched element', async () => {
//     expect(result).toBeDefined()

//     if (result) {
//       result.query.value = 'Product 1'
//       expect(result.query.value).toBe('Product 1')
//       expect(result.searchedItems.value.length).toBe(1)

//       result.query.value = 'Non-existing product'
//       expect(result.query.value).toBe('Non-existing product')
//       expect(result.searchedItems.value.length).toBe(0)
//     }
//   })
// })

describe('objectResolver', () => {
  it('should resolve objects to SearchItem array', () => {
    const result = objectResolver<SearchItem>(testData, (obj) => ({
      id: obj.id,
      title: obj.title,
      description: obj.description,
      slug: obj.slug,
      type: obj.type,
      to: obj.to,
      tags: obj.tags
    }))
    expect(result).toHaveLength(2)
  })
})

describe('defineSearchResolver', () => {
  it('should filter items based on search query', () => {
    const mockSearchFunc = vi.fn((item: SearchItem, searchValue: string) => {
      return item.title.toLowerCase().includes(searchValue)
    })

    const resolver = defineSearchResolver(testData, mockSearchFunc)

    const result = resolver.resolve('Product')
    expect(result).toHaveLength(1)
    expect(result[0].title).toBe('Product 1')
  })
})

describe.only('useGoogleSearchComposable', () => {
  let options: GoogleSearchOptions = { activeType: ref<'all' | 'product' | 'page' | 'content'>('all'), resolvers: [] }
  let result: ReturnType<typeof useGoogleSearchComposable> | undefined

  beforeEach(async () => {
    await mountSuspended(defineComponent({
      template: '<div></div>',
      setup() {
        const resolvers = [
          defineSearchResolver(testData, (item, searchValue) => item.title.toLowerCase().includes(searchValue))
        ]

        options.resolvers = resolvers

        result = useGoogleSearchComposable(options)
        return {
          query: result.query,
          allItems: result.allItems
        }
      }
    }))
  })

  it('should return all items when query is empty', async () => {
    expect(result).toBeDefined()
    if (result) {
      expect(result.query.value).toBe('')
      expect(result.allItems.value).toHaveLength(2)
    }
  })

  it('should return an empty array when query does not match any item', async () => {
    expect(result).toBeDefined()
    if (result) {
      result.query.value = 'Non-existing product'
      expect(result.query.value).toBe('Non-existing product')
      expect(result.allItems.value).toHaveLength(0)
    }
  })

  it('should return filtered items when activeType is set to all', async () => {
    expect(result).toBeDefined()
    if (result) {
      options.activeType.value = 'all'
      expect(result.allItems.value).toHaveLength(1)
    }
  })
})
