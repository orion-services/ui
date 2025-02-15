import { defineNuxtModule, addPlugin, createResolver, addComponentsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'orion-talk',
    configKey: 'orionTalk',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Add components directory
    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
    })

    // Add CSS frameworks
    _nuxt.options.css.push('bulma/css/bulma.css')
    _nuxt.options.css.push('@fortawesome/fontawesome-free/css/all.css')
  },
})
