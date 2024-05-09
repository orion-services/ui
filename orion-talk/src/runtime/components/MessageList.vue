<template>
  <template v-for="message in messages" :key="message.hash">
    <ChatBalloon
      :hash="message.hash"
      :name="message.user.name"
      :text="message.text"
      :timestamp="message.timestamp"
    />
  </template>
</template>

<script>
export default {
  props: {
    messages: { type: Object },
  },
  methods: {
    timestampToTime(timestamp) {
      return new Date(timestamp)
        .toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    },
  },
}
</script>
