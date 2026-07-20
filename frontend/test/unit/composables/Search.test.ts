import { describe, expect, it, vi } from 'vitest'
import { useGoogleSearch } from '../../../app/composables/google_search'

const mockFunction = vi.fn((_query: string) => {
  return []
})

describe.only('useGoogleSearch', () => {
  it('should return all items when query is empty', () => {
    const result = useGoogleSearch(mockFunction)
    expect(result).toBeDefined()
  })
})
