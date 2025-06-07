import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'nuxt',
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  },
  resolve: {
    alias: {
      '~': new URL('./', import.meta.url).pathname
    }
  }
})
