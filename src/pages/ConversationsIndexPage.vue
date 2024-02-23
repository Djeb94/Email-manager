<template>
  <div class="conversations">
    <h1 v-if="isAuthenticated" class="page-title">Conversations</h1>
    <h1 v-else class="page-title">Vous devez vous connecter pour accéder à cette page.</h1>
    <ul v-if="isAuthenticated" class="email-list">
      <li v-for="email in emails" :key="email.id" class="email-item">
        <router-link :to="`/conversations/${email.id}`" class="email-link">{{ email.subject }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated']),
    emails() {
      return JSON.parse(localStorage.getItem('emails')) || [];
    }
  }
}
</script>

<style>
.conversations {
  padding: 20px;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.email-list {
  list-style: none;
  padding: 0;
}

.email-item {
  margin-bottom: 10px;
}

.email-link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s;
}

.email-link:hover {
  color: #0056b3;
}
</style>
