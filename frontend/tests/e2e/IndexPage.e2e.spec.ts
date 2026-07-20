import { test, expect } from '@nuxt/test-utils/playwright'

test('Index page has expected content', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  await expect(page).toHaveTitle(/The power of dancing to fashion/)
})
