<template>
  <div>
    <p :class="validationClass">
      <span
        v-show="!isValid"
        class="notification"
      >
        <progress
          class="progress is-primary"
          :value="progressValue"
          max="100"
        >
          {{ progressValue }}%
        </progress>
        <text class="title">Password must include:</text>
        <div
          v-for="(msg, index) in formattedMessages"
          :key="index"
          :class="msg.type"
        >
          {{ msg.text }}
        </div>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    password: {
      type: String,
      required: true,
      default: null,
    },
  },
  data() {
    return {
      validationClass: 'invalid',
      isValid: false,
      messages: [
        { text: '8-20 Characters', type: 'invalid' },
        { text: 'At least one capital letter', type: 'invalid' },
        { text: 'At least one number', type: 'invalid' },
        { text: 'No spaces', type: 'invalid' },
      ],
      progressValue: 0,
    }
  },
  computed: {
    formattedMessages() {
      return this.messages
    },
  },
  watch: {
    password(newPassword) {
      const validMessages = [...this.messages]

      const hasEightToTwentyCharacters = (newPassword.length >= 8) && (newPassword.length <= 20)
      const hasCapitalLetter = /[A-Z]/.test(newPassword)
      const hasAtLeastOneNumber = /[0-9]/.test(newPassword)
      const hasNoSpaces = !(/\s/.test(newPassword))

      validMessages[0].type = hasEightToTwentyCharacters ? 'valid' : 'invalid'
      validMessages[1].type = hasCapitalLetter ? 'valid' : 'invalid'
      validMessages[2].type = hasAtLeastOneNumber ? 'valid' : 'invalid'
      validMessages[3].type = hasNoSpaces ? 'valid' : 'invalid'

      this.messages = validMessages
      const allValid = this.messages.every(msg => msg.type === 'valid')
      this.validationClass = allValid ? 'valid' : 'invalid'
      this.isValid = allValid

      this.updateProgress()
    },
  },
  methods: {
    updateProgress() {
      const validCount = this.messages.filter(msg => msg.type === 'valid').length
      this.progressValue = (validCount / this.messages.length) * 100
    },
  },
}
</script>

<style>
.title {
    color: #3d3d3d;
    font-size: 14px;
}

.invalid .tooltip {
    color: red;
}

.valid .tooltip {
    color: green;
}

.invalid {
    color: red;
}

.valid {
    color: green;
}

.notification {
    display: block;
    margin: 15px;
}

.progress {
    margin-top: 10px;
}
</style>
