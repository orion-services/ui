<template>
  <div class="columns is-centered mt-6">
    <div class="column is-half">
      <LoginForm
        v-show="showLoginForm"
        @login="loginUser"
      />

      <CreateForm
        v-show="!showLoginForm"
        @create-user="createUser"
      />

      <div class="buttons is-right">
        <button
          class="button is-text"
          @click="toggleForms"
        >
          <div v-show="showLoginForm">
            <span class="icon">
              <i class="fa-solid fa-plus" />
            </span>
            <span>Cadastro</span>
          </div>
          <div v-show="!showLoginForm">
            <span class="icon">
              <i class="fa-solid fa-right-to-bracket" />
            </span>
            <span>Login</span>
          </div>
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
    url: {
      type: String,
      default: 'http://localhost:8080/users',
    },

    successLoginPath: {
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
        }
        else {
          this.user = await this.callUsersService(form)
          if (this.user != undefined) {
            sessionStorage.setItem('user', JSON.stringify(this.user))
            this.successMessage = 'Usuário criado com sucesso!'
            this.showSuccessNotification = true
          }
        }
      }
      catch (error) {
        this.errorMessage = error
        this.showErrorNotification = true
      }
    },

    /**
     * Authenticates the user in the Orion Users Service
     *
     * @param {*} form Form data to authenticate the user
     */
    async loginUser(form) {
      try {
        if (form.email === '' || form.password === '') {
          this.warningMessage = 'Por favor, preencha todos os campos'
          this.showWarningNotification = true
        }
        else {
          this.user = await this.callUsersService(form)
          if (this.user != undefined) {
            sessionStorage.setItem('user', JSON.stringify(this.user))
            this.$router.push(this.successLoginPath)
          }
        }
      }
      catch (error) {
        this.errorMessage = error
        this.showErrorNotification = true
      }
    },

    /**
     * Calls the users Web Service to create a new user
     */
    async callUsersService(form) {
      try {
        console.log(this.url + form.operation)
        const response = await fetch(this.url + form.operation, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            name: form.name,
            email: form.email,
            password: form.password,
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
    toggleForms() {
      this.showLoginForm = !this.showLoginForm
    },
  },
}
</script>
