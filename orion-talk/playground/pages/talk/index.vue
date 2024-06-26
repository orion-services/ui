<template>
  <div>
    <OrionTalk
      :user="user"
      :token="token"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      user: {},
    }
  },

  mounted() {
    this.loadFromSession()
  },

  methods: {
    loadFromSession() {
      const storage = JSON.parse(sessionStorage.getItem('user'))
      if (storage !== undefined || storage !== null) {
        this.user = storage.user
        this.token = storage.token
      }
      else {
        this.$router.push('/')
      }
    },
  },
}
</script>
