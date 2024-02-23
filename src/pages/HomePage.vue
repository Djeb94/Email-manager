<template>
  <div class="content">
    <h1>{{ welcome }}</h1>
    <p v-if="!isAuthenticated">{{ auth }}</p>
    <div v-else>
      <button id="writeemail" @click="toggleForm">{{ buttonLabel }}</button>
      <form v-if="showForm" @submit.prevent="submitForm" action="ConversationsPage.vue" method="post">
        <label for="to">À :</label>
        <input type="email" id="to" name="to" required placeholder="Destinataire">

        <label for="subject">Sujet :</label>
        <input type="text" id="subject" name="subject" required placeholder="Objet">

        <label for="message">Message :</label>
        <textarea id="message" name="message" rows="5" required placeholder="Votre message"></textarea>

        <button id="send">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: "HomePage",
  data() {
    return {
      showForm: false
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
    welcome() {
      return 'Welcome to Email Manager'
    },
    auth() {
      return 'Please log in your account to access conversations'
    },
    buttonLabel() {
      return this.showForm ? 'Return' : 'Write a mail \u{1F582}';
    },
    ...mapState(['user'])
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
  }
}
</script>

<style>
div h1 {
  margin-top: 100px;
}

form {
  margin: 0 auto;
  max-width: 550px;
  margin-top: 80px;
}

label,
input,
textarea {
  display: flex;
  margin-bottom: 10px;
  border-radius: 20px;
  width: 500px;
  padding: 5px;
  padding-left: 10px;
}

textarea {
  height: 150px;
  padding: 10px;
}

#send {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  float: right;
  margin-right: 35px;
  margin-top: 20px;
  margin-bottom: 20px;
}

#send:hover {
  background-color: #0056b3;
}
#writeemail{
  background-color: #0056b3;
  color: white;
  border: 0px;
  padding: 10px 20px;
  border-radius: 20px;
}
</style>