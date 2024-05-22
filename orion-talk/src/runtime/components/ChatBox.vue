import { send } from 'process';
<template>
  <div class="box scrollable">
    <template
      v-for="message in messages"
      :key="message.hash"
    >
      <ChatBalloon
        :hash="message.hash"
        :name="message.user.name"
        :text="message.text"
        :timestamp="message.timestamp"
      />
    </template>
  </div>
  <div class="field is-grouped">
    <div class="control is-expanded">
      <input
        v-model="newMessage"
        class="input"
        type="text"
        placeholder="Digite sua mensagem"
        @keyup.enter="sendMessage"
      >
    </div>
    <div class="control">
      <button
        class="button is-info"
        @click="sendMessage"
      >
        Enviar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: { type: Object },
  },

  emits: ['send-message'],

  data() {
    return {
      channel: '',
      hashChannel: '',
      newMessage: '',
    }
  },

  methods: {

    /**
     * Sends a message to the parent component
     */
    sendMessage() {
      this.$emit('send-message', this.newMessage)
      this.newMessage = ''
    },

    timestampToTime(timestamp) {
      return new Date(timestamp).toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      })
    },

  },
}
</script>

<style>
.scrollable {
  width: 98%;
  height: 50%;
  overflow: auto;
  padding: 10px;
}
</style>
