import { defineNuxtModule, addPlugin, createResolver, addComponentsDir, installModule } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: 'orion-login',
        configKey: 'orionLogin',
    },
    // Default configuration options of the Nuxt module
    defaults: {},
    setup(_options, _nuxt) {
        const resolver = createResolver(import.meta.url)

        // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
        addPlugin(resolver.resolve('./runtime/plugin'))

        addComponentsDir({
            path: resolver.resolve('./runtime/components'),
        })

        // Add CSS frameworks
        _nuxt.options.css.push('bulma/css/bulma.css')
        _nuxt.options.css.push('@fortawesome/fontawesome-free/css/all.css')

        // Add a module to this module
        installModule("@nuxtjs/i18n", {
            defaultLocale: 'pt',
            locales: [
                {
                    code: 'pt',
                    iso: 'pt-BR',
                    name: 'Português',
                },
                {
                    code: 'en',
                    iso: 'en-US',
                    name: 'English',
                },
            ],
            vueI18n: {
                messages: {
                    pt: resolver.resolve('./runtime/locales/pt-BR.json'),
                    en: resolver.resolve('./runtime/locales/en-US.json')
                }
            }

        })

    },
})
