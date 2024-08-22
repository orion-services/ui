<template>
  <div>
    <p :class="validationClass" >
      <span v-show="hasStartedTyping && !isValid" class="notification is-warning" >
        <text class="title">Password must include:</text>
        <div v-for="(msg, index) in formattedMessages" :key="index" :class="msg.type">
          {{ msg.text }}
        </div>
      </span>
    </p>
  </div>
  <div
    v-show="showWarningNotification"
  >
  {{ warningMessage }} 
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
      showWarningNotification: false,
      warningMessage: '',
      messages: [
        { text: "8-20 Characteres", type: "invalid"},
        { text: "At least one capital letter", type: "invalid"},
        { text: "At least one number", type: "invalid"},
        { text: "No spaces", type: "invalid"},
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
      if(true){
      this.messages = validMessages;
      const allValid =  this.messages.every(msg => msg.type === 'valid')
      this.validationClass = allValid ? 'valid' : 'invalid';
      this.isValid = allValid ? true: false
      this.showWarningNotification = true;
      }
    }
  }
};
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

.notification{
  display: block;
  margin: 15px;
}
</style>
