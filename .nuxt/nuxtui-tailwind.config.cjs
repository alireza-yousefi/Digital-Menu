
      const { defaultExtractor: createDefaultExtractor } = require('tailwindcss/lib/lib/defaultExtractor.js')
      const { customSafelistExtractor, generateSafelist } = require("D:/project/Digital-Menu/node_modules/.pnpm/@nuxt+ui@2.18.7_magicast@0.3.5_rollup@4.24.2_vite@5.4.10_@types+node@22.8.1_terser@5.36.0__vue@3.5.12/node_modules/@nuxt/ui/dist/runtime/utils/colors")

      const defaultExtractor = createDefaultExtractor({ tailwindConfig: { separator: ':' } })

      module.exports = {
        plugins: [
          require('@tailwindcss/forms')({ strategy: 'class' }),
          require('@tailwindcss/aspect-ratio'),
          require('@tailwindcss/typography'),
          require('@tailwindcss/container-queries'),
          require('@headlessui/tailwindcss')
        ],
        content: {
          files: [
            "D:/project/Digital-Menu/node_modules/.pnpm/@nuxt+ui@2.18.7_magicast@0.3.5_rollup@4.24.2_vite@5.4.10_@types+node@22.8.1_terser@5.36.0__vue@3.5.12/node_modules/@nuxt/ui/dist/runtime/components/**/*.{vue,mjs,ts}",
            "D:/project/Digital-Menu/node_modules/.pnpm/@nuxt+ui@2.18.7_magicast@0.3.5_rollup@4.24.2_vite@5.4.10_@types+node@22.8.1_terser@5.36.0__vue@3.5.12/node_modules/@nuxt/ui/dist/runtime/ui.config/**/*.{mjs,js,ts}"
          ],
          transform: {
            vue: (content) => {
              return content.replaceAll(/(?:\r\n|\r|\n)/g, ' ')
            }
          },
          extract: {
            vue: (content) => {
              return [
                ...defaultExtractor(content),
                ...customSafelistExtractor("U", content, ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","primary"], ["primary"])
              ]
            }
          }
        },
        safelist: generateSafelist(["primary"], ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","primary"]),
      }
    