---
layout: default
title: Orion Login
nav_order: 10
---

# Orion Login Component

The Orion Login Component is a user interface component that provides a sign
in and sign up form to authenticate users with the
[Orion Users Service](https://users.orion-services.dev).

## Installation

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add orion-login
```

For more information about installation, please, look at the `npm` package:
[@orion-services/orion-login](https://www.npmjs.com/package/@orion-services/orion-login).

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

* baseURL: The base URL of the Orion Users Service. Default is
  `http://localhost:8080/api/users`.
* successLoginPath: The path to redirect the user after a successful login.
  Default is `/`.
* errorLoginPath: The path to redirect the user after a failed login. Default
  is `/`.
* successCreateUserPath: The path to redirect the user after a successful user
  creation. Default is `/`.
* errorCreateUserPath: The path to redirect the user after a failed user
  creation. Default is `/`.

### Example

```vue
<template>
	<OrionLogin
		baseURL="https://users.orion-services.dev/api/users"
		successLoginPath="/dashboard"
		errorLoginPath="/error"
		successCreateUserPath="/dashboard"
		errorCreateUserPath="/error"
	/>
</template>
```

## Backend: Orion Users Service

The Orion Login component communicates with the Orion Users Service to
authenticate users. The backend is available at Docker Hub as a Docker image.
To run the backend, use the following command:

```bash
docker run -p 8080:8080 orionservices/orion-users
```

Coming soon
{: .label .label-yellow }
