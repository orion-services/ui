<template>
  <div>
    <p :class="validationClass" class="validation-text">
      <span v-show="hasStartedTyping && !isValid" class="tooltip">
        <text class="title">Password must include:</text>
        <div v-for="(msg, index) in formattedMessages" :key="index" :class="msg.type">
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
    }
  },
  data() {
    return {
      validationClass: 'invalid',
      isValid: false,
      messages: [
        { text: "8-20 Characteres", type: "invalid" },
        { text: "At least one capital letter", type: "invalid" },
        { text: "At least one number", type: "invalid" },
        { text: "No spaces", type: "invalid" }
      ],
    };
  },
  computed: {
    formattedMessages() {
      return this.messages;
    }
  },
  watch: {
    password(newPassword) {
      if (!this.hasStartedTyping && newPassword.length > 0) {
        this.hasStartedTyping = true;
      }

      let validMessages = [...this.messages];

      const hasEightToTwentyCharacters = newPassword.length >= 8 && newPassword.length <= 20;
      const hasCapitalLetter = /[A-Z]/.test(newPassword);
      const hasAtLeastOneNumber = /[0-9]/.test(newPassword);
      const hasNoSpaces = !(/\s/.test(newPassword));

      validMessages[0].type = hasEightToTwentyCharacters ? "valid" : "invalid";
      validMessages[1].type = hasCapitalLetter ? "valid" : "invalid";
      validMessages[2].type = hasAtLeastOneNumber ? "valid" : "invalid";
      validMessages[3].type = hasNoSpaces ? "valid" : "invalid";

      this.messages = validMessages;
      const allValid =  this.messages.every(msg => msg.type === 'valid')
      this.validationClass = allValid ? 'valid' : 'invalid';
      this.isValid = allValid ? true: false
    }
  }
};
</script>

<style>
.validation-text {
  position: relative;
  display: inline-block;
  padding: 5px;
  font-size: 14px;
}

.tooltip {
  width: 280px;
  background-color: #e6e6e6;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
  z-index: 1;
  top: 10%;
  opacity: 1;
  white-space: pre-wrap;
  text-align: justify;
  box-shadow: 5px 5px 5px #d0cccc;
}

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
</style>
