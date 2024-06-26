<template>
  <div class="chat-balloon">
    <div class="balloon me">
      <div class="message-header">
        <div class="user-name">
          {{ name }}
        </div>
      </div>
      <p class="message-text">
        {{ text }}
      </p>
      <p class="message-timestamp">
        {{ timestampToTime(timestamp) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hash: { type: String },
    name: { type: String },
    text: { type: String },
    timestamp: { type: String },
  },

  data() {
    return {
      showReactions: true,
      hideReactions: false,
    }
  },

  methods: {
    timestampToTime(timestamp) {
      return new Date(timestamp)
        .toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    },
  },
}
</script>

<style>
.chat-balloon {
  display: flex;
  margin-bottom: 30px;
}

.chat-balloon .balloon {
  border-radius: 20px;
  padding: 10px;
  max-width: 80%;
  background-color: #e5e5ea; /* Balão cinza claro para mensagens recebidas */
  position: relative;
}

.chat-balloon .balloon.me {
  background-color: rgb(
    233,
    251,
    245
  ); /* Balão verde para mensagens do usuário */
}

.chat-balloon .message-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}

.chat-balloon .message-header .user-name {
  font-weight: bold;
  margin-right: 10px;
}

.chat-balloon .message-text {
  margin-bottom: 5px;
  font-size: 1rem;
}

.chat-balloon .message-timestamp {
  font-size: 0.8rem;
  color: #bab8b8;
  position: absolute;
  bottom: -20px;
  right: 5px;
}
</style>
