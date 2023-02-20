<script>
import Message from './Message.vue';

export default {
  name: 'Conversation',
  components: { Message },
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  computed: {
    latestMessages() {
      return this.messages.slice(-40);
    }
  }
};
</script>

<template>
    <div class="conversation">
    <div class="messages">
      <Message
        v-for="message in latestMessages"
        :key="message.id"
        :message="message"
      />
    </div>
  </div>
</template>

<style scoped>
.conversation {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}
</style>