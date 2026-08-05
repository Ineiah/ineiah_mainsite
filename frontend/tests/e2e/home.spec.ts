import { expect, test } from '@playwright/test'

test('Home page should have title and links to intro and docs', async ({ page }) => {
  await page.goto('/')

  const ctaNavabar = page.locator('#tel-call-us-navbar')
  await expect(ctaNavabar).toBeVisible()
  
  await expect(page.locator('#link-offer-hero')).toBeVisible()
  await expect(page.locator('#tel-call-us-hero')).toBeVisible()

  // Scroll down and check for the presence of
  // certain elements that are only visible after scrolling
  const scrollDepth: number = 1200
  
  await page.evaluate((scrollDepth) => {
    window.scrollTo({ top: scrollDepth, left: 0, behavior: 'smooth' })
  }, scrollDepth)

  await expect(page.getByRole('button', { name: 'Make me a princess' })).toBeVisible()
})

test('Customer wants to see the proposed services', async ({ page }) => {
  await page.goto('/')

  page.getByRole('link', { name: 'Services', exact: true }).click()

  await page.waitForSelector('nav', { state: 'visible' } )
  await page.waitForSelector('h1', { state: 'visible' } )

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
