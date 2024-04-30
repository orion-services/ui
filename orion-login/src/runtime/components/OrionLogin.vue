<template>
  <div class="columns is-centered mt-6">
    <div class="column is-half">
      <LoginForm
        v-show="showLoginForm"
        @login="login"
      />

      <CreateForm
        v-show="!showLoginForm"
        @create-user="createUser"
      />

      <div class="buttons is-right">
        <button
          class="button is-text"
          @click="changeForms()"
        >
          <span class="icon">
            <i class="fa-solid fa-user-plus" />
          </span>
          <span>Cadastre-se</span>
        </button>
      </div>

      <div
        v-show="showSuccessNotification"
        class="notification is-success"
      >
        <button
          class="delete"
          @click="close()"
        />
        {{ successMessage }}
      </div>

      <div
        v-show="showWarningNotification"
        class="notification is-warning"
      >
        <button
          class="delete"
          @click="close()"
        />
        {{ warningMessage }}
      </div>

      <div
        v-show="showErrorNotification"
        class="notification is-danger"
      >
        <button
          class="delete"
          @click="close()"
        />
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    baseURL: {
      type: String,
      default: 'http://localhost:8080/api/users',
    },
    successLoginPath: {
      type: String,
      default: '/',
    },
    errorLoginPath: {
      type: String,
      default: '/',
    },
    successCreateUserPath: {
      type: String,
      default: '/',
    },
    errorCreateUserPath: {
      type: String,
      default: '/',
    },
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',

      user: {},
      hash: '',
      token: '',

      showLoginForm: true,

      showSuccessNotification: false,
      showWarningNotification: false,
      showErrorNotification: false,
      successMessage: '',
      warningMessage: '',
      errorMessage: '',
    }
  },
  methods: {
    /**
     * Creates a new user in the Orion Users Service
     *
     * @param {*} form Form data to create a new user
     */
    async createUser(form) {
      try {
        if (form.name === '' || form.email === '' || form.password === '') {
          this.warningMessage = 'Por favor, preencha todos os campos'
          this.showWarningNotification = true
          this.$router.push(this.errorCreateUserPath)
        }
        else {
          console.log(user)
          const user = await this.callWebService(form.operation)
          if (user != undefined) {
            sessionStorage.setItem('user', user)
            this.successMessage = this.$t('userCreated')
            this.showSuccessNotification = true
            this.$router.push(this.successCreateUserPath)
          }
        }
      }
      catch (error) {
        console.log(error)
        this.errorMessage = error
        this.showErrorNotification = true
        this.$router.push(this.errorCreateUserPath)
      }
    },

    /**
     * Authenticates the user in the Orion Users Service
     *
     * @param {*} form Form data to authenticate the user
     */
    login(form) {
      if (form.name === '' || form.email === '' || form.password === '') {
        this.warningMessage = 'Por favor, preencha todos os campos'
        this.showWarningNotification = true
        this.$router.push(this.errorLoginPath)
      }
    },

    /**
     * Calls the users Web Service to create a new user
     */
    async callWebService(operation) {
      try {
        const response = await fetch(this.baseURL + operation, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            name: this.name,
            email: this.email,
            password: this.password,
          }),
        })
        return await response.json()
      }
      catch (error) {
        this.errorMessage = error
        this.showErrorNotification = true
      }
    },

    /**
     * Closes the notifications
     */
    close() {
      this.showSuccessNotification = false
      this.showWarningNotification = false
      this.showErrorNotification = false
    },

    /**
     * Changes the form to create a new user
     */
    changeForms() {
      this.showLoginForm = !this.showLoginForm
    },
  },
}
</script>
