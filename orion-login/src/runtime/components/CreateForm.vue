<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="card">
          <div class="card-content mt-6">
            <div class="content">
              <figure class="image is-64x64 mb-5">
                <img class="is-rounded" src="../assets/logo.png" alt="Logo" />
              </figure>

              <div class="control has-icons-left">
                <input
                  type="text"
                  class="input mb-4"
                  placeholder="Full name"
                  v-model="name"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>

              <div class="control has-icons-left">
                <input
                  class="input mb-4"
                  type="email"
                  placeholder="Your e-mail"
                  v-model="email"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>

              <div class="control has-icons-left">
                <input
                  class="input mb-4"
                  type="password"
                  placeholder="Choose a password"
                  v-model="password"
                  required
                  minlength="8"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>

              <button class="button is-rounded" @click="createUser()">
                <span class="icon">
                  <i class="fas fa-plus"></i>
                </span>
                <span>Create</span>
              </button>
            </div>
          </div>
        </div>
        <div class="notification is-success" v-show="showSuccessNotification">
          <button class="delete" @click="close"></button>
          Usuário cadastrado com sucesso!
        </div>
        <div class="notification is-warning" v-show="showFailNotification">
          <button class="delete" @click="close"></button>
          {{ failMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    baseURL: { String, default: "http://localhost:8080/api/users" },
    method: { String, default: "/create" },
    successPath: { String, default: "/" },
    errorPath: { String, default: "/" },
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      user: {},
      showSuccessNotification: false,
      showFailNotification: false,
      failMessage: "",
    };
  },
  methods: {
    /**
     * Create a new user
     */
    async createUser() {
      try {
        if (this.name === "" || this.email === "" || this.password === "") {
          this.failMessage = "Please fill in all fields";
          this.showFailNotification = true;
          this.$router.push(this.errorPath);
        } else {
          const user = await this.callUsersService();
          sessionStorage.setItem("user", user);
          this.showSuccessNotification = true;
          this.$router.push(this.successPath);
        }
      } catch (error) {
        this.failMessage = error;
        this.showFailNotification = true;
        this.$router.push(this.errorPath);
      }
    },

    /**
     * Calls the users service to create a new user
     */
    async callUsersService() {
      try {
        const url = this.baseURL + this.method;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            name: this.name,
            email: this.email,
            password: this.password,
          }),
        });
        return await response.json();
      } catch (error) {
        this.failMessage = error;
        this.showFailNotification = true;
      }
    },

    /**
     * Closes the success or fail notification
     */
    close() {
      this.showSuccessNotification = false;
      this.showFailNotification = false;
    },
  },
};
</script>

<style></style>
