// import { defineVitestProject } from '@nuxt/test-utils/config'
// import { defineConfig } from 'vitest/config'

// import path from 'path'

// export default defineConfig({
//   test: {
//     globals: true,
//     testTimeout: 20000,
//     setupFiles: ['tests/setup.ts'],
//     // reporters: ['default', 'html'],
//     alias: {
//       '~': path.resolve(__dirname, 'app')
//     },
//     coverage: {
//       enabled: true
//     },
//     projects: [
//       await defineVitestProject({
//         test: {
//           name: 'nuxt',
//           include: ['tests/nuxt/**/*.{spec,test}.ts'],
//           testTimeout: 20000
//         }
//       }),
//       await defineVitestProject({
//         test: {
//           name: 'e2e',
//           include: ['tests/e2e/*.{test,spec}.ts'],
//           environment: 'node'
//         }
//       }),
//       await defineVitestProject({
//         test: {
//           name: 'unit',
//           include: ['tests/unit/*.{test,spec}.ts'],
//           environment: 'node'
//         }
//       })
//     ]
//   },
//   // resolve: {
//   //   alias: {
//   //     'firebase/firestore': path.resolve(__dirname, 'tests/__mocks__/firebase/firestore.ts'),
//   //     'firebase/app': path.resolve(__dirname, 'tests/__mocks__/firebase/app.ts'),
//   //     'firebase/database': path.resolve(__dirname, 'tests/__mocks__/firebase/database.ts')
//   //   }
//   // }
// })

import { defineConfig } from 'vitest/config'
import { defineVitestProject } from '@nuxt/test-utils/config'

export default defineConfig({
  test: {
    exclude: [
      '**/node_modules/**',
      // 'test/e2e/**'
    ],
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: [ 'text', 'json', 'html' ]
    },
    env: {
      NODE_ENV: 'test'
    },
    projects: [
      await defineVitestProject({
        test: {
          name: 'unit',
          include: [ 'test/unit/**/*.{test,spec}.ts' ],
          environment: 'node',
          testTimeout: 20000,
          tags: [
            {
              name: 'unit',
            }
          ]
        }
      }),
      await defineVitestProject({
        test: {
          name: 'nuxt',
          include: [ 'test/nuxt/**/*.{test,spec}.ts' ],
          environment: 'nuxt',
          testTimeout: 20000,
          tags: [
            {
              name: 'nuxt',
            }
          ]
        }
      }),
      await defineVitestProject({
        test: {
          name: 'integration',
          include: [ 'test/integration/**/*.{test,spec}.ts' ],
          environment: 'node',
          testTimeout: 20000,
          tags: [
            {
              name: 'integration',
            }
          ]
        }
      })
    ]
  },
  resolve: {}
})
