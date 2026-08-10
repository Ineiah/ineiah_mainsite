import { test, expect } from '@playwright/test'

test('All sliders should have their images set', async ({ page }) => {
  await page.goto('/galerie')

  await page.waitForSelector('section#gallery', { state: 'visible' })

  // Container to check for duplicate slider IDs
  const sliderIds: string[] = []

  const sliders = await page.locator('.slider').all()
  for (const slider of sliders) {
    console.log(slider)
    await page.evaluate(async (currentSlider) => {
      await currentSlider.scrollIntoViewIfNeeded({ timeout: 5000 })
    }, slider)

    const images = await slider.locator('img').all()
    // Check that images have their src attribute set
    for (const image of images) {
      await expect(image).toHaveAttribute('src', /.+/)
    }

    // Get the previous/next buttons and cyccle through the
    // slide to ensure that the images are set for all slides
  }
})
