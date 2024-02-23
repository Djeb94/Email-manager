<template>
  <div class="conversations">
    <h1 v-if="isAuthenticated" class="page-title">Conversations</h1>
    <h1 v-else class="page-title">Vous devez vous connecter pour accéder à cette page.</h1>
    <ul v-if="isAuthenticated">
      <li v-for="email in emails" :key="email.id">
        <router-link :to="`/conversations/${email.id}`">
          <div class="email-info">
            <p id="email-content"><strong>To:</strong> {{ email.to }}</p>
            <p id="email-content"><strong>Subject:</strong> {{ email.subject }}</p>
          </div>
        </router-link>
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
  padding: 20px 20px 20px 0px;
  display: inline-block;
  justify-content: center;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px ;
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
.email-info {
  background-color: rgb(192, 206, 228);
  border-radius: 20px;
  padding: 10px;
  display: flex;
  margin-top: 40px;
  max-width: 500px;
}

.email-info p {
  text-decoration: none !important;
}
ul{
  list-style: none;
  text-decoration: none;
  padding-left: 0px;
}
#email-content{
  margin-left: 50px;
  margin-right: 10px;
  text-decoration: none;
  color: black;
 
}

.email-info p{
 padding-right: 30px;
}

</style>
