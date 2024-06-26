---
layout: default
title: Orion Login
nav_order: 10
---

# Orion Login

The Orion Login is a user interface component that provides a sign in and sign
up form to authenticate users with the [Orion Users Service](https://users.orion-services.dev).
{: .fs-3 }

## Features

The Orion Login component provides the following features:
{: .fs-3 }

* Sign-up page
* Sign-in page
{: .fs-3 }

## Installation

Install the module to your Nuxt application with one command:
{: .fs-3 }

```bash
npx nuxi module add orion-login
```
{: .fs-3 }

For more information about installation, please, look at the `npm` package:
[@orion-services/orion-login](https://www.npmjs.com/package/@orion-services/orion-login).
{: .fs-3 }

## Usage

To use the Orion Login component in your Nuxt application, import the component
and include it in your template. The component will render a sign in and sign up
form.
{: .fs-3 }

```vue
<template>
  <OrionLogin />
</template>
```
{: .fs-3 }

## Properties

The component accepts the following properties:
{: .fs-3 }

* url: The base URL of the Orion Users Service. Default is
  `http://localhost:8080/users`.
* success-login-path: The path to redirect the user after a successful login.
  Default is `/`.
{: .fs-3 }

### Example

```vue
<template>
    <OrionLogin
		  url="https://users.orion-services.dev"
		  success-login-path="/talk"
		/>
</template>
```
{: .fs-3 }

## Backend: Orion Users Service

Coming soon
{: .label .label-yellow }

The Orion Login component communicates with the Orion Users Service to
authenticate users. The backend is available at Docker Hub as a Docker image.
To run the backend, use the following command:
{: .fs-3 }

```bash
docker run -p 8080:8080 orionservices/orion-users
```
{: .fs-3 }
