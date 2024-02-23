<template>
  <div class="conversations">
    <h1 v-if="isAuthenticated" class="page-title">Conversations</h1>
    <h1 v-else class="page-title">Vous devez vous connecter pour accéder à cette page.</h1>
    <div v-if="selectedEmail" class="email-message">
      <h2>Email Message</h2>
      <p class="email-content"><strong>To:</strong> {{ selectedEmail.to }}</p>
      <p class="email-content"><strong>Subject:</strong> {{ selectedEmail.subject }}</p>
      <p :class="{ 'wrap': shouldWrapMessage }" class="email-content"><strong>Message:</strong> {{ selectedEmail.message }}</p>
      <button id="delete" @click="deleteEmail(selectedEmail)">Delete your message</button>
    </div>
    <ul v-if="isAuthenticated">
      <li v-for="email in emails" :key="email.id">
        <router-link :to="`/conversations`" @click="selectEmail(email)">
          <div class="email-info">
            <p class="email-content"><strong>To:</strong> {{ email.to }}</p>
            <p class="email-content"><strong>Subject:</strong> {{ email.subject }}</p>
            
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
    },
    shouldWrapMessage() {
      const maxLength = 50;
      return this.selectedEmail && this.selectedEmail.message.length > maxLength;
    }
  },
  data() {
    return {
      selectedEmail: null
    };
  },
  methods: {
    selectEmail(email) {
      this.selectedEmail = email;
    },
    deleteEmail(email) {
      // Trouver l'index de l'email dans le tableau des emails
      const index = this.emails.findIndex(e => e.id === email.id);
      if (index !== -1) {
        // Supprimer l'email du tableau
        this.emails.splice(index, 1);
        // Mettre à jour le stockage local avec les nouvelles données
        localStorage.setItem('emails', JSON.stringify(this.emails));
        // Réinitialiser l'email sélectionné
        this.selectedEmail = null;
      }
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
  word-wrap: break-word;
}

.email-content {
 padding-left: 25px;
}

.email-info p { 
  padding-right: 30px; 
  word-wrap: break-word; 
}
 .email-message { 
  margin-top: 20px; 
  padding: 10px;
   border: 1px solid #ccc;
    border-radius: 5px;
     word-wrap: break-word;
    }
.wrap{
  white-space: pre-wrap;
  word-wrap: break-word;
}
#delete{
  background-color: #dc3545;
}
#delete:hover{
  opacity: 0.8;
}

</style>
