<template>
  <div class="card">
    <div class="card-content">
      <figure class="image is-64x64 mb-3">
        <img
          class="is-rounded"
          src="../assets/logo.png"
          alt="Orion logo"
        >
      </figure>

      <div class="control has-icons-left">
        <input
          v-model="name"
          type="text"
          class="input mb-4"
          placeholder="Full name"
          required
        >
        <span class="icon is-small is-left">
          <i class="fas fa-user" />
        </span>
      </div>

      <div class="control has-icons-left">
        <input
          v-model="email"
          class="input mb-4"
          type="email"
          placeholder="Your e-mail"
          required
        >
        <span class="icon is-small is-left">
          <i class="fas fa-envelope" />
        </span>
      </div>

      <div class="control has-icons-left">
        <input
          v-model="password"
          class="input mb-4"
          type="password"
          placeholder="Choose a password"
          minlength="8"
          required
        >
        <span class="icon is-small is-left">
          <i class="fas fa-lock" />
        </span>
      </div>

      <button
        class="button is-rounded"
        @click="create()"
      >
        <span class="icon">
          <i class="fas fa-plus" />
        </span>
        <span>Cadastro</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    operation: { type: String, default: '/create' },
  },

  emits: ['create-user'],

  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },

  methods: {
    create() {
      this.$emit('create-user', {
        name: this.name,
        email: this.email,
        password: this.password,
        operation: this.operation,
      })
    },

  },
}
</script>
