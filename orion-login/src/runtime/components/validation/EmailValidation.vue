<template>
  <span
    v-if="email && emailValidation && email !== emailValidation"
    v-show="showWarningNotification"
    class="notification is-warning"
  >
    {{ warningMessage }}
  </span>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      required: true,
    },
    emailValidation: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showWarningNotification: true,
      warningMessage: 'The emails do not match',
    }
  },
}
</script>

<style>
.notification {
    margin-top: 5px;
    font-size: 15px;
}
</style>
