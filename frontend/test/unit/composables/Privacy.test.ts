import { describe, it, expect } from 'vitest';
import { useWebsitePolicies } from '../../../app/composables/legal/privacy'

describe('useWebsitePolicies', () => {
  it('should return default policies', () => {
    const { defaultPolicies } = useWebsitePolicies()

    expect(defaultPolicies.length).toBeGreaterThan(1)
    expect(defaultPolicies[0].title).toBe('Utilisation des données personnelles')
  })
})
