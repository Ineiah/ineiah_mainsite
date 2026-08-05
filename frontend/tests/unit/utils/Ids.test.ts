import { describe, it, expect } from 'vitest'
import { createElementId } from '../../../app/utils'

describe('utils/Ids', () => {
  it('should create element ID correctly', () => {
    const id = createElementId('link', 'navbar', 'home')
    expect(id).toBe('link-navbar__home')
  })
})
