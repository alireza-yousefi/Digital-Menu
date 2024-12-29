// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type IsAny<T> = 0 extends 1 & T ? true : false
type InjectionType<A extends Plugin> = IsAny<A> extends true ? unknown : A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+nuxt@0.7.0_magicast@0.3.5_rollup@4.24.2_vue@3.5.12/node_modules/@pinia/nuxt/dist/runtime/payload-plugin.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.8.1_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_zxmodwaeooxnnmj6iwzqqv3eae/node_modules/nuxt/dist/app/plugins/revive-payload.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.8.1_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_zxmodwaeooxnnmj6iwzqqv3eae/node_modules/nuxt/dist/head/runtime/plugins/unhead.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.8.1_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_zxmodwaeooxnnmj6iwzqqv3eae/node_modules/nuxt/dist/pages/runtime/plugins/router.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.8.1_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_zxmodwaeooxnnmj6iwzqqv3eae/node_modules/nuxt/dist/app/plugins/payload.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.8.1_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_zxmodwaeooxnnmj6iwzqqv3eae/node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.8.1_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_zxmodwaeooxnnmj6iwzqqv3eae/node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.8.1_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_zxmodwaeooxnnmj6iwzqqv3eae/node_modules/nuxt/dist/app/plugins/revive-payload.server.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.8.1_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_zxmodwaeooxnnmj6iwzqqv3eae/node_modules/nuxt/dist/app/plugins/chunk-reload.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+nuxt@0.7.0_magicast@0.3.5_rollup@4.24.2_vue@3.5.12/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.8.1_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_zxmodwaeooxnnmj6iwzqqv3eae/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+ui@2.18.7_magicast@0.3.5_rollup@4.24.2_vite@5.4.10_@types+node@22.8.1_terser@5.36.0__vue@3.5.12/node_modules/@nuxt/ui/dist/runtime/plugins/slideovers.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+ui@2.18.7_magicast@0.3.5_rollup@4.24.2_vite@5.4.10_@types+node@22.8.1_terser@5.36.0__vue@3.5.12/node_modules/@nuxt/ui/dist/runtime/plugins/modals.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+ui@2.18.7_magicast@0.3.5_rollup@4.24.2_vite@5.4.10_@types+node@22.8.1_terser@5.36.0__vue@3.5.12/node_modules/@nuxt/ui/dist/runtime/plugins/colors.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5_rollup@4.24.2/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5_rollup@4.24.2/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+icon@1.6.1_magicast@0.3.5_rollup@4.24.2_vite@5.4.10_@types+node@22.8.1_terser@5.36.0__vue@3.5.12/node_modules/@nuxt/icon/dist/runtime/plugin.js").default> &
  InjectionType<typeof import("../../plugins/bootstrap.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.8.1_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_zxmodwaeooxnnmj6iwzqqv3eae/node_modules/nuxt/dist/pages/runtime/plugins/prerender.server.js").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:payload' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'pinia' | 'nuxt:global-components' | 'nuxt:prefetch' | '@nuxt/icon'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }