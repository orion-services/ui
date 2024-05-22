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
                <a>Usuários</a>
              </li>
            </ul>
          </div>
          <div class="panel">
            <a class="panel-block is-active">
              <span class="panel-icon">
                <i class="fas fa-user" />
              </span>
              {{ user.name }}
            </a>
          </div>
        </div>
        <div
          v-show="hashChannel ===''"
          class="box"
        >
          <button
            class="button is-primary is-fullwidth"
            @click="createChannel"
          >
            Criar canal
          </button>
        </div>
        <div>
          {{ hashChannel }}
        </div>
      </div>
      <div
        v-show="hashChannel !==''"
        class="column"
      >
        <ChatBox
          :messages="channel.messages"
          @send-message="sendMessage"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    user: { type: Object },
    token: { type: String },
    url: { type: String, default: 'http://localhost:8082/graphql' },
  },

  data() {
    return {
      channel: '',
      hashChannel: '',
      newMessage: '',
    }
  },

  methods: {

    /**
     * Uses the fetch API to create a new channel using graphql
     */
    async createChannel() {
      try {
        const response = await this.callTalkService(this.createChannelQuery())
        console.log(response.data.createChannel)
        this.channel = response.data.createChannel
        this.hashChannel = this.channel.hash
      }
      catch (error) {
        console.error(error)
      }
    },

    /**
     * Sends a message to the Talk service
     */
    async sendMessage(data) {
      try {
        this.newMessage = data
        const response = await this.callTalkService(this.createMessageQuery())
        this.newMessage = ''
        this.channel.messages.push(response.data.createMessage)
        console.log(response.data.createMessage)
      }
      catch (error) {
        console.error(error)
      }
    },

    /**
     * Returns a query to create a new channel
     */
    createChannelQuery() {
      return `
        mutation addChannel { createChannel(
          channel: {
            name: "Talk channel"
          },
          user: {
            hash: "${this.user.hash}",
            name: "${this.user.name}"
          })
         {
           name
            hash
            messages {
              hash
              text
              timestamp
              user{
                hash
                name
              }
            }
          }
        }
       `
    },

    /**
     * Sends a message to the Talk service
     */
    createMessageQuery() {
      return `
        mutation addMessage {
          createMessage(
            text : "${this.newMessage}"
            channelHash: "${this.hashChannel}"
            userHash: "${this.user.hash}"
            userName: "${this.user.name}"
          )
          {
            text
            hash
            timestamp
            user {
                hash
                name
            }
            channel{
                hash
            }
          }
        }
       `
    },

    /**
     * Calls the Talk service using the fetch API
     * @param query The query to be sent to the Talk service
     */
    async callTalkService(query) {
      try {
        const response = await fetch(this.baseURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${this.token}`,
          },
          body: JSON.stringify({
            query: query,
          }),
        })
        return await response.json()
      }
      catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
