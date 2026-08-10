import { expect, test } from '@playwright/test'

test.describe('customer wants to see proposed services', async () => {
  test.describe.configure({ timeout: 60000 })

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('nav', { state: 'visible' })
  })

  test('Customer wants to see the proposed services', async ({ page }) => {
    page.getByRole('link', { name: 'Services', exact: true }).click()
    await page.waitForSelector('h1', { state: 'visible' })

    expect(page.getByRole('heading', { name: 'My Services' })).toBeVisible()

    await page.evaluate(() => {
      window.scrollTo({ top: 250, left: 0, behavior: 'smooth' })
    })

    const serviceCardClass = '#service-content-Mixte__Coupe__Court'
    const firstServiceCard = page.locator(serviceCardClass)
    await expect(firstServiceCard).toBeVisible()

    await firstServiceCard.click()

    // Scroll the service card into view to ensure it's fully visible
    await page.evaluate(() => {
      document.querySelector(serviceCardClass)?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    })

    // Check for the CTA and that it can be actionnable
    const ctaButton = page.locator('#tel-service-1')
    await expect(ctaButton).toBeVisible()
    await expect(ctaButton).toBeEnabled()
  })
})
