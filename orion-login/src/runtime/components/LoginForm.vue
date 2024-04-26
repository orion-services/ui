<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="card"></div>
        <div class="card mt-6">
          <div class="card-content has-text-centered">
            <figure class="image is-64x64 mb-3">
              <img
                class="is-rounded"
                src="../assets/logo.png"
                alt="Orion logo"
              />
            </figure>

            <div class="control has-icons-left">
              <input
                class="input mb-3"
                type="email"
                placeholder="E-mail"
                required
                v-model="email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>

            <div class="control has-icons-left">
              <input
                class="input mb-3"
                type="password"
                placeholder="Password"
                v-model="password"
                required
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>

            <button
              class="button is-rounded""
              @click="authenticate()"
            >
              <span class="icon">
                <i class="fas fa-right-to-bracket"></i>
              </span>
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        baseURL: {String, default: "http://localhost:8080/api/users"},
        method: {String, default: "/authenticate"},
        forwardPage: {String, default: "/dashboard"},
    },
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async authenticate() {
            try {
                console.log(this.baseURL + this.method);
                const response = await fetch(this.baseURL + this.method, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({
                        email: this.email,
                        password: this.password,
                    }),
                });
                await console.log(response.text());
            } catch (error) {
                console.error(error);
            }
        },
  },
};
</script>
