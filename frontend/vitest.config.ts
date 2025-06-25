import { defineConfig } from 'vitest/config'
// import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'nuxt',
    testTimeout: 1000
    // projects: []
  },
  // resolve: {
  //   alias: {
  //     'firebase/app': path.resolve(__dirname, 'tests/mocks/firebase/app.ts'),
  //     'firebase/database': path.resolve(__dirname, 'tests/mocks/firebase/database.ts')
  //   }
  // }
})
