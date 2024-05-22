---
layout: default
title: Orion Talk
nav_order: 20
---

# Orion Talk

The Orion Talk is a user interface component that provides textual chat for the
[Orion Talk Service](https://talk.orion-services.dev).
{: .fs-3 }

## Features

The Orion Talk component provides the following features:
{: .fs-3 }

* Create a new channel in the service
* Receive all messages from a channel
* Send a message to a channel
{: .fs-3 }

## Installation

Install the module to your Nuxt application with one command:
{: .fs-3 }

```bash
npx nuxi module add orion-talk
```
{: .fs-3 }

For more information about installation, please, look at the `npm` package:
[@orion-services/orion-login](https://www.npmjs.com/package/@orion-services/orion-talk).
{: .fs-3 }

## Usage

To use the Orion Talk component in your Nuxt application, import the component
and include it in your template. The component will render a chat interface.
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

* `user`: The user object with at least a `name` and `hash` properties:
  user{hash, name}
* `token`: A string representing a JWT(JSON Web Token) for the user.
* `url`: The URL of the Orion Talk Service, the default is
  `http://localhost:8082/graphql`.
{: .fs-3 }

### Example

```vue
<template>
    <OrionTalk
      :user="user"
      :token="token"
      :url="http://talk.orion-services.dev/graphql"
    />
</template>
```
{: .fs-3 }

## Backend: Orion Talk Service

Coming soon
{: .label .label-yellow }

The Orion Talk component communicates with the Orion Talk Service. The backend
is available at Docker Hub as a Docker image. To run the backend, use the
following command:
{: .fs-3 }

```bash
docker run -p 8080:8080 orionservices/orion-talk
```
{: .fs-3 }
