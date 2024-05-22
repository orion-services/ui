<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Orion Login
- Package name: orion-login
- Description: Orion Login Nuxt module
-->

# Orion Login

![NPM License](https://img.shields.io/npm/l/%40orion-services%2Forion-login)
[![Nuxt][nuxt-src]][nuxt-href]
[![Discord](https://img.shields.io/discord/713516488601894922?style=flat&label=Discord&color=%23D8FCD3&link=https%3A%2F%2Fdiscord.com%2Finvite%2FXpyGTZPApN)](https://discord.com/invite/XpyGTZPApN)

The Orion Login is a user interface component that provides a sign in and sign
up form to authenticate users with the [Orion Users Service](https://users.orion-services.dev).
It is built as a [Nuxt](https://nuxtjs.org) module.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/orion-services/ui/tree/main/orion-login?file=playground%2Fapp.vue)
- [📖 &nbsp;Documentation](https://ui.orion-services.dev/components/orion-login/orion-login)

## Features

The Orion Login component provides the following features:

* Sign-up page
* Sign-in page

## Installation

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add orion-login
```

## Usage

To use the Orion Login component in your Nuxt application, import the component
and include it in your template. The component will render a sign in and sign up
form.

```vue
<template>
  <OrionLogin />
</template>
```

## Properties

The component accepts the following properties:

* url: The base URL of the Orion Users Service. Default is
  `http://localhost:8080/users`.
* success-login-path: The path to redirect the user after a successful login.
  Default is `/`.

### Example

```vue
<template>
    <OrionLogin
		  url="https://users.orion-services.dev"
		  success-login-path="/talk"
		/>
</template>
```

<details>
  <summary>Local development</summary>

  ```bash
  # Install dependencies
  npm install

  # Generate type stubs
  npm run dev:prepare

  # Develop with the playground
  npm run dev

  # Build the playground
  npm run dev:build

  # Run ESLint
  npm run lint

  # Run Vitest
  npm run test
  npm run test:watch

  # Release new version
  npm run release
  ```

</details>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/orion-login/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/orion-login

[npm-downloads-src]: https://img.shields.io/npm/dm/orion-login.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/orion-login

[license-src]: https://img.shields.io/npm/l/orion-login.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/orion-login

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
