<template>
  <div>Talk</div>
</template>

<script>
export default {
  beforeMount() {
    const user = JSON.parse(sessionStorage.getItem('user'))
    if (user === undefined || user === null) {
      this.$router.push('/')
    }
  },
}
</script>
