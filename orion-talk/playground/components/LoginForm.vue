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
          v-model="email"
          class="input mb-3"
          type="email"
          placeholder="E-mail"
          required
        >
        <span class="icon is-small is-left">
          <i class="fas fa-envelope" />
        </span>
      </div>

      <div class="control has-icons-left">
        <input
          v-model="password"
          class="input mb-3"
          type="password"
          placeholder="Password"
          required
        >
        <span class="icon is-small is-left">
          <i class="fas fa-lock" />
        </span>
      </div>

      <button
        class="button is-rounded"
        @click=" login()"
      >
        <span class="icon">
          <i class="fas fa-right-to-bracket" />
        </span>
        <span>Login</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    operation: { type: String, default: '/authenticate' },
  },

  emits: ['login'],

  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    login() {
      this.$emit('login', {
        email: this.email,
        password: this.password,
        operation: this.operation,
      })
    },
  },
}
</script>
