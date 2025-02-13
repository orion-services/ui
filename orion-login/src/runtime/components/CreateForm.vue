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
          v-model="emailVerification"
          class="input mb-4"
          type="email"
          placeholder="Confirm your e-mail"
          required
        >
        <span class="icon is-small is-left">
          <i class="fas fa-envelope" />
        </span>
      </div>
      <EmailVerification :email :emailVerification="emailVerification"/>
      
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
      <PasswordVerification :password="password"/>
      <button
        class="button is-rounded is-fullwidth"
        @click="create()"
      >
        <span class="icon">
          <i class="fas fa-user-plus" />
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import EmailVerification from './EmailVerification.vue';
import PasswordVerification from './PasswordVerification.vue';
export default {
  components: {
    PasswordVerification,
    EmailVerification
  },
  props: {
    operation: { type: String, default: '/create' },
  },

  emits: ['create-user'],

  data() {
    return {
      name: '',
      email: '',
      emailVerification: '',
      password: '',
    }
  },

  methods: {
    create() {
      this.$emit('create-user', {
        name: this.name,
        email: this.email,
        email: this.emailVerification,
        password: this.password,
        operation: this.operation,
      })
    },

  },
}
</script>
