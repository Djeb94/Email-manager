<template>
  <div>
    <h1>Conversations</h1>
    <ul>
      <li v-for="conversation in conversations" :key="conversation.id">
        <router-link :to="`/conversations/${conversation.id}`">{{ conversation.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      conversations: [
        { id: 1, title: 'Conversation 1', content: 'Content of conversation 1' },
        { id: 2, title: 'Conversation 2', content: 'Content of conversation 2' },
        { id: 3, title: 'Conversation 3', content: 'Content of conversation 3' },
      ]
    }
  }
}
</script>