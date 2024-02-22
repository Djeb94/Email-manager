<template>
    <div>
      <h1 v-if="isAuthenticated">Conversations</h1>
      <h1 v-else>Vous devez vous connecter pour accéder à cette page.</h1>
      <ul>
        <li v-for="conversation in conversations" :key="conversation.id">
          <router-link :to="`/conversations/${conversation.id}`">{{ conversation.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  
  export default {
    computed: {
      ...mapGetters(['isAuthenticated']),
      conversations() {
        return [
          { id: 1, title: 'Conversation 1', content: 'Content of conversation 1' },
          { id: 2, title: 'Conversation 2', content: 'Content of conversation 2' },
          { id: 3, title: 'Conversation 3', content: 'Content of conversation 3' },
        ]
      }
    }
  }
  </script>