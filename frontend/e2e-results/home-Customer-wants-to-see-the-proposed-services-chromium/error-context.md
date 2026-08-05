# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> Customer wants to see the proposed services
- Location: frontend/tests/e2e/home.spec.ts:23:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#service-content-Mixte__Coupe__Court')
Expected: visible
Error: strict mode violation: locator('#service-content-Mixte__Coupe__Court') resolved to 2 elements:
    1) <article data-v-2ab4b139="" id="service-content-Mixte__Coupe__Court" class="relative bg-surface-200 cursor-pointer rounded-lg">…</article> aka getByRole('article').filter({ hasText: 'Cut on hairShort • $45.00 •' })
    2) <article data-v-2ab4b139="" id="service-content-Mixte__Coupe__Court" class="relative bg-surface-200 cursor-pointer rounded-lg">…</article> aka getByRole('article').filter({ hasText: 'Cut on hairShort • $32.00 •' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#service-content-Mixte__Coupe__Court')

```

# Page snapshot

```yaml
- generic [active] [ref=f96e1]:
  - generic [ref=f96e4]:
    - navigation [ref=f96e5]:
      - generic [ref=f96e8]:
        - link "Go to homepage" [ref=f96e10] [cursor=pointer]:
          - /url: /en
          - img "La beauté d'Inéïah" [ref=f96e11]
        - list [ref=f96e13]:
          - listitem [ref=f96e14]:
            - link "Go to Home page" [ref=f96e15] [cursor=pointer]:
              - /url: /en
              - text: Home
          - listitem [ref=f96e16]:
            - link "Go to Services page" [ref=f96e17] [cursor=pointer]:
              - /url: /en/our-services
              - text: Services
          - listitem [ref=f96e18]:
            - link "Go to Our Story page" [ref=f96e19] [cursor=pointer]:
              - /url: /en/our-story
              - text: Our Story
          - listitem [ref=f96e20]:
            - link "Go to Gallery page" [ref=f96e21] [cursor=pointer]:
              - /url: /en/gallery
              - text: Gallery
        - link [ref=f96e22] [cursor=pointer]:
          - /url: tel:+33 07 86 20 94 59
          - button "Contact Me" [ref=f96e23]
    - main [ref=f96e24]:
      - generic [ref=f96e25]:
        - generic [ref=f96e27]:
          - heading "My Services" [level=1] [ref=f96e28]
          - paragraph [ref=f96e29]: Découvrez mes prestations de coiffure et de soins capillaires, adaptées à vos besoins et à vos envies.
        - generic [ref=f96e30]:
          - generic [ref=f96e31]:
            - heading "Shampoos Cuts Styling" [level=2] [ref=f96e32]
            - generic [ref=f96e36]:
              - article [ref=f96e37] [cursor=pointer]:
                - generic [ref=f96e38]:
                  - img "Coupe - Court - Mixte - La beauté d'Inéïah" [ref=f96e39]
                  - generic [ref=f96e40]:
                    - paragraph [ref=f96e41]: Cut on hair
                    - paragraph [ref=f96e42]: Short • $45.00 • Mixed
              - article [ref=f96e43] [cursor=pointer]:
                - generic [ref=f96e44]:
                  - img "Coupe - Mi-Long - Mixte - La beauté d'Inéïah" [ref=f96e45]
                  - generic [ref=f96e46]:
                    - paragraph [ref=f96e47]: Cut on hair
                    - paragraph [ref=f96e48]: Medium-Length • $55.00 • Mixed
              - article [ref=f96e49] [cursor=pointer]:
                - generic [ref=f96e50]:
                  - img "Coupe - XL - Mixte - La beauté d'Inéïah" [ref=f96e51]
                  - generic [ref=f96e52]:
                    - paragraph [ref=f96e53]: Cut on hair
                    - paragraph [ref=f96e54]: XL • $75.00 • Mixed
              - article [ref=f96e55] [cursor=pointer]:
                - generic [ref=f96e56]:
                  - img "Coupe - Transformation - Mixte - La beauté d'Inéïah" [ref=f96e57]
                  - generic [ref=f96e58]:
                    - paragraph [ref=f96e59]: Cut on hair
                    - paragraph [ref=f96e60]: Transformation • $75.00 • Mixed
          - generic [ref=f96e61]:
            - heading "Shampoos Styling" [level=2] [ref=f96e62]
            - generic [ref=f96e66]:
              - article [ref=f96e67] [cursor=pointer]:
                - generic [ref=f96e68]:
                  - img "Coupe - Court - Mixte - La beauté d'Inéïah" [ref=f96e69]
                  - generic [ref=f96e70]:
                    - paragraph [ref=f96e71]: Cut on hair
                    - paragraph [ref=f96e72]: Short • $32.00 • Mixed
              - article [ref=f96e73] [cursor=pointer]:
                - generic [ref=f96e74]:
                  - img "Coupe - Mi-Long - Mixte - La beauté d'Inéïah" [ref=f96e75]
                  - generic [ref=f96e76]:
                    - paragraph [ref=f96e77]: Cut on hair
                    - paragraph [ref=f96e78]: Medium-Length • $42.00 • Mixed
              - article [ref=f96e79] [cursor=pointer]:
                - generic [ref=f96e80]:
                  - img "Coupe - Long - Mixte - La beauté d'Inéïah" [ref=f96e81]
                  - generic [ref=f96e82]:
                    - paragraph [ref=f96e83]: Cut on hair
                    - paragraph [ref=f96e84]: Long • $52.00 • Mixed
              - article [ref=f96e85] [cursor=pointer]:
                - generic [ref=f96e86]:
                  - img "Coupe - XL - Mixte - La beauté d'Inéïah" [ref=f96e87]
                  - generic [ref=f96e88]:
                    - paragraph [ref=f96e89]: Cut on hair
                    - paragraph [ref=f96e90]: XL • $62.00 • Mixed
          - generic [ref=f96e91]:
            - heading "Cut only" [level=2] [ref=f96e92]
            - article [ref=f96e97] [cursor=pointer]:
              - generic [ref=f96e98]:
                - img "Coupe - null - Mixte - La beauté d'Inéïah" [ref=f96e99]
                - generic [ref=f96e100]:
                  - paragraph [ref=f96e101]: Cut on hair
                  - paragraph [ref=f96e102]: • 25 to 45€ • Mixed
          - generic [ref=f96e103]:
            - heading "Olaplex Treatments" [level=2] [ref=f96e104]
            - generic [ref=f96e108]:
              - article [ref=f96e109] [cursor=pointer]:
                - generic [ref=f96e110]:
                  - img "Soin - Court - Mixte - La beauté d'Inéïah" [ref=f96e111]
                  - generic [ref=f96e112]:
                    - paragraph [ref=f96e113]: Care on hair
                    - paragraph [ref=f96e114]: Short • $30.00 • Mixed
              - article [ref=f96e115] [cursor=pointer]:
                - generic [ref=f96e116]:
                  - img "Soin - Mi-long - Mixte - La beauté d'Inéïah" [ref=f96e117]
                  - generic [ref=f96e118]:
                    - paragraph [ref=f96e119]: Care on hair
                    - paragraph [ref=f96e120]: Medium-length • $60.00 • Mixed
              - article [ref=f96e121] [cursor=pointer]:
                - generic [ref=f96e122]:
                  - img "Soin - Long - Mixte - La beauté d'Inéïah" [ref=f96e123]
                  - generic [ref=f96e124]:
                    - paragraph [ref=f96e125]: Care on hair
                    - paragraph [ref=f96e126]: Long • $60.00 • Mixed
              - article [ref=f96e127] [cursor=pointer]:
                - generic [ref=f96e128]:
                  - img "Soin - XL - Mixte - La beauté d'Inéïah" [ref=f96e129]
                  - generic [ref=f96e130]:
                    - paragraph [ref=f96e131]: Care on hair
                    - paragraph [ref=f96e132]: XL • $90.00 • Mixed
          - generic [ref=f96e133]:
            - heading "Vegetal Keratin / Natural Botox Treatments" [level=2] [ref=f96e134]
            - generic [ref=f96e138]:
              - article [ref=f96e139] [cursor=pointer]:
                - generic [ref=f96e140]:
                  - img "Soin - Court - Mixte - La beauté d'Inéïah" [ref=f96e141]
                  - generic [ref=f96e142]:
                    - paragraph [ref=f96e143]: Care on hair
                    - paragraph [ref=f96e144]: Short • $75.00 • Mixed
              - article [ref=f96e145] [cursor=pointer]:
                - generic [ref=f96e146]:
                  - img "Soin - Mi-long - Mixte - La beauté d'Inéïah" [ref=f96e147]
                  - generic [ref=f96e148]:
                    - paragraph [ref=f96e149]: Care on hair
                    - paragraph [ref=f96e150]: Medium-length • $85.00 • Mixed
              - article [ref=f96e151] [cursor=pointer]:
                - generic [ref=f96e152]:
                  - img "Soin - Long - Mixte - La beauté d'Inéïah" [ref=f96e153]
                  - generic [ref=f96e154]:
                    - paragraph [ref=f96e155]: Care on hair
                    - paragraph [ref=f96e156]: Long • $95.00 • Mixed
              - article [ref=f96e157] [cursor=pointer]:
                - generic [ref=f96e158]:
                  - img "Soin - XL - Mixte - La beauté d'Inéïah" [ref=f96e159]
                  - generic [ref=f96e160]:
                    - paragraph [ref=f96e161]: Care on hair
                    - paragraph [ref=f96e162]: XL • $150.00 • Mixed
          - generic [ref=f96e163]:
            - heading "Colors" [level=2] [ref=f96e164]
            - generic [ref=f96e168]:
              - article [ref=f96e169] [cursor=pointer]:
                - generic [ref=f96e170]:
                  - img "Coloration - Court - Mixte - La beauté d'Inéïah" [ref=f96e171]
                  - generic [ref=f96e172]:
                    - paragraph [ref=f96e173]: Coloring on hair
                    - paragraph [ref=f96e174]: Short • $75.00 • Mixed
              - article [ref=f96e175] [cursor=pointer]:
                - generic [ref=f96e176]:
                  - img "Coloration - Mi-long - Mixte - La beauté d'Inéïah" [ref=f96e177]
                  - generic [ref=f96e178]:
                    - paragraph [ref=f96e179]: Coloring on hair
                    - paragraph [ref=f96e180]: Medium-length • $85.00 • Mixed
              - article [ref=f96e181] [cursor=pointer]:
                - generic [ref=f96e182]:
                  - img "Coloration - Long - Mixte - La beauté d'Inéïah" [ref=f96e183]
                  - generic [ref=f96e184]:
                    - paragraph [ref=f96e185]: Coloring on hair
                    - paragraph [ref=f96e186]: Long • $95.00 • Mixed
              - article [ref=f96e187] [cursor=pointer]:
                - generic [ref=f96e188]:
                  - img "Coloration - XL - Mixte - La beauté d'Inéïah" [ref=f96e189]
                  - generic [ref=f96e190]:
                    - paragraph [ref=f96e191]: Coloring on hair
                    - paragraph [ref=f96e192]: XL • $105.00 • Mixed
          - generic [ref=f96e193]:
            - heading "Hair Contouring" [level=2] [ref=f96e194]
            - generic [ref=f96e198]:
              - article [ref=f96e199] [cursor=pointer]:
                - generic [ref=f96e200]:
                  - img "Hair Contouring - Court - Mixte - La beauté d'Inéïah" [ref=f96e201]
                  - paragraph [ref=f96e203]: Short • $75.00 • Mixed
              - article [ref=f96e204] [cursor=pointer]:
                - generic [ref=f96e205]:
                  - img "Hair Contouring - Mi-long - Mixte - La beauté d'Inéïah" [ref=f96e206]
                  - paragraph [ref=f96e208]: Medium-length • $85.00 • Mixed
              - article [ref=f96e209] [cursor=pointer]:
                - generic [ref=f96e210]:
                  - img "Hair Contouring - Long - Mixte - La beauté d'Inéïah" [ref=f96e211]
                  - paragraph [ref=f96e213]: Long • $95.00 • Mixed
              - article [ref=f96e214] [cursor=pointer]:
                - generic [ref=f96e215]:
                  - img "Hair Contouring - XL - Mixte - La beauté d'Inéïah" [ref=f96e216]
                  - paragraph [ref=f96e218]: XL • $105.00 • Mixed
          - generic [ref=f96e219]:
            - heading "Children's Prices" [level=2] [ref=f96e220]
            - article [ref=f96e225] [cursor=pointer]:
              - generic [ref=f96e226]:
                - img "Coupe - null - Mixte - La beauté d'Inéïah" [ref=f96e227]
                - generic [ref=f96e228]:
                  - paragraph [ref=f96e229]: Cut on hair
                  - paragraph [ref=f96e230]: • 15 to 25€ • Mixed
          - generic [ref=f96e234]:
            - heading "Ready for a change?" [level=2] [ref=f96e235]
            - paragraph [ref=f96e236]: A simple call is all it takes to chat, ask your questions, and book your appointment. Let's talk about your hair, your desires, and let's find a style that suits you.
            - link [ref=f96e237] [cursor=pointer]:
              - /url: tel:+33 07 86 20 94 59
              - button "Me contacter" [ref=f96e238]
      - generic [ref=f96e240]:
        - heading "Your privacy is important to us" [level=5] [ref=f96e252]
        - paragraph [ref=f96e253]: We process your personal information to measure and improve our sites and services, support our campaigns, and provide you with personalized content.
        - paragraph [ref=f96e254]:
          - text: For more information, please see our
          - link "Privacy Policy" [ref=f96e255] [cursor=pointer]:
            - /url: /legal/confidentialite
        - generic [ref=f96e256]:
          - button "More Options" [ref=f96e257] [cursor=pointer]
          - button "Accept All" [ref=f96e258] [cursor=pointer]
    - generic [ref=f96e259]:
      - generic [ref=f96e261]:
        - paragraph [ref=f96e262]: Always Listening to You
        - link "Contact Me" [ref=f96e263] [cursor=pointer]:
          - /url: tel:+33 07 86 20 94 59
      - generic [ref=f96e265]:
        - paragraph [ref=f96e266]: Easy and Quick Booking
        - link "Contact Me" [ref=f96e267] [cursor=pointer]:
          - /url: tel:+33 07 86 20 94 59
      - generic [ref=f96e269]:
        - paragraph [ref=f96e270]: Personalized Advice
        - link "Contact Me" [ref=f96e271] [cursor=pointer]:
          - /url: tel:+33 07 86 20 94 59
    - generic [ref=f96e273]:
      - generic [ref=f96e274]:
        - generic [ref=f96e275]:
          - link "Go to homepage" [ref=f96e276] [cursor=pointer]:
            - /url: /en
            - img "La beauté d'Inéïah" [ref=f96e277]
          - link "chez 70's coiffure" [ref=f96e278] [cursor=pointer]:
            - /url: https://www.seventiescoiffurelille.fr/services
          - generic [ref=f96e279]:
            - link [ref=f96e280] [cursor=pointer]:
              - /url: /
              - button "Français" [ref=f96e281]
            - link [ref=f96e282] [cursor=pointer]:
              - /url: /en
              - button "English" [ref=f96e283]
        - generic [ref=f96e284]:
          - list [ref=f96e285]:
            - paragraph [ref=f96e286]: Learn More
            - listitem [ref=f96e287]:
              - link "Contact" [ref=f96e288] [cursor=pointer]:
                - /url: /en/contact
            - listitem [ref=f96e289]:
              - link "FAQ" [ref=f96e290] [cursor=pointer]:
                - /url: /en/faq
            - listitem [ref=f96e291]:
              - link "Sitemap" [ref=f96e292] [cursor=pointer]:
                - /url: /en/sitemap
            - listitem [ref=f96e293]:
              - link "Privacy Policy" [ref=f96e294] [cursor=pointer]:
                - /url: /en/legal/privacy-policy
            - listitem [ref=f96e295]:
              - link "Legal Notice" [ref=f96e296] [cursor=pointer]:
                - /url: /en/legal/legal-notices
          - list [ref=f96e297]:
            - paragraph [ref=f96e298]: The Salon
            - listitem [ref=f96e299]:
              - link "Home" [ref=f96e300] [cursor=pointer]:
                - /url: /en
            - listitem [ref=f96e301]:
              - link "Our Services" [ref=f96e302] [cursor=pointer]:
                - /url: /en/our-services
            - listitem [ref=f96e303]:
              - link "Our Story" [ref=f96e304] [cursor=pointer]:
                - /url: /en/our-story
            - listitem [ref=f96e305]:
              - link "Our Cuts and Care" [ref=f96e306] [cursor=pointer]:
                - /url: /en/gallery
      - generic [ref=f96e307]:
        - generic:
          - link "instagram":
            - /url: https://www.instagram.com/ineiah
          - link "facebook":
            - /url: https://www.facebook.com/labeautedineiah
          - link "pinterest":
            - /url: https://fr.pinterest.com/labeautedineiah
  - generic [ref=f96e308]:
    - button "Toggle Nuxt DevTools" [ref=f96e309] [cursor=pointer]
    - generic "Page load time" [ref=f96e313]:
      - generic [ref=f96e314]: "355"
      - generic [ref=f96e315]: ms
    - button "Toggle Component Inspector" [ref=f96e317] [cursor=pointer]
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test'
  2  | 
  3  | test('Home page should have title and links to intro and docs', async ({ page }) => {
  4  |   await page.goto('/')
  5  | 
  6  |   const ctaNavabar = page.locator('#tel-call-us-navbar')
  7  |   await expect(ctaNavabar).toBeVisible()
  8  |   
  9  |   await expect(page.locator('#link-offer-hero')).toBeVisible()
  10 |   await expect(page.locator('#tel-call-us-hero')).toBeVisible()
  11 | 
  12 |   // Scroll down and check for the presence of
  13 |   // certain elements that are only visible after scrolling
  14 |   const scrollDepth: number = 1200
  15 |   
  16 |   await page.evaluate((scrollDepth) => {
  17 |     window.scrollTo({ top: scrollDepth, left: 0, behavior: 'smooth' })
  18 |   }, scrollDepth)
  19 | 
  20 |   await expect(page.getByRole('button', { name: 'Make me a princess' })).toBeVisible()
  21 | })
  22 | 
  23 | test('Customer wants to see the proposed services', async ({ page }) => {
  24 |   await page.goto('/')
  25 | 
  26 |   page.getByRole('link', { name: 'Services', exact: true }).click()
  27 | 
  28 |   await page.waitForSelector('nav', { state: 'visible' } )
  29 |   await page.waitForSelector('h1', { state: 'visible' } )
  30 | 
  31 |   expect(page.getByRole('heading', { name: 'My Services' })).toBeVisible()
  32 | 
  33 |   await page.evaluate(() => {
  34 |     window.scrollTo({ top: 250, left: 0, behavior: 'smooth' })
  35 |   })
  36 | 
  37 |   const serviceCardClass = '#service-content-Mixte__Coupe__Court'
  38 |   const firstServiceCard = page.locator(serviceCardClass)
> 39 |   await expect(firstServiceCard).toBeVisible()
     |                                  ^ Error: expect(locator).toBeVisible() failed
  40 | 
  41 |   await firstServiceCard.click()
  42 | 
  43 |   // Scroll the service card into view to ensure it's fully visible
  44 |   await page.evaluate(() => {
  45 |     document.querySelector(serviceCardClass)?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  46 |   })
  47 | 
  48 |   // Check for the CTA and that it can be actionnable
  49 |   const ctaButton = page.locator('#tel-service-1')
  50 |   await expect(ctaButton).toBeVisible()
  51 |   await expect(ctaButton).toBeEnabled()
  52 | })
  53 | 
```