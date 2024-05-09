<template>
  <div
    id="app"
    class="container"
  >
    <div class="columns">
      <div class="column is-one-third">
        <div class="box">
          <div class="tabs">
            <ul>
              <li class="is-active">
                <a>Canal</a>
              </li>
            </ul>
          </div>
          <div class="panel">
            <a class="panel-block is-active">
              <span class="panel-icon">
                <i class="fas fa-user" />
              </span>
              Rodrigo
            </a>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <MessageList :messages="messages.getMessages" />

          <div class="field is-grouped">
            <div class="control is-expanded">
              <input
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: { type: Object },
    newMessage: { type: String },
  },

  methods: {
    sendMessage() {
      this.$emit('send-message', this.newMessage)
    },
  },
}
</script>
