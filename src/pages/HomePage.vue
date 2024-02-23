<template>
  <div class="content">
    <h1>{{ welcome }}</h1>
    <p v-if="!isAuthenticated">{{ auth }}</p>
    <div v-else>
      <button id="writeemail" @click="toggleForm">{{ buttonLabel }}</button>
      <form v-if="showForm" @submit.prevent="submitForm" action="./pages/ConversationsIndexPage.vue">
        <label for="to">To :</label>
        <input v-model="email.to" type="email" id="to" name="to" required placeholder="Recipient">

        <label for="subject">Subjet :</label>
        <input v-model="email.subject" type="text" id="subject" name="subject" required placeholder="Subject line">

        <label for="message">Message :</label>
        <textarea v-model="email.message" id="message" name="message" rows="5" required placeholder="Your message"></textarea>

        <button type="submit">Send your message</button>
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
      showForm: false,
      email: {
        to: '',
        subject: '',
        message: ''
      }
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
    submitForm() {
      const { to, subject, message } = this.email;

      let emails = JSON.parse(localStorage.getItem('emails')) || [];

      const emailData = {
        id: emails.length || 0,
        to,
        subject,
        message,
        date: new Date()
      };

      emails.push(emailData);

      localStorage.setItem('emails', JSON.stringify(emails));

      this.email = {
        to: '',
        subject: '',
        message: ''
      };
    }
  }
}
</script>

<style>
.content {
  text-align: center;
}

h1 {
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

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  margin-top: 20px;
}

button:hover {
  background-color: #0056b3;
}

#writeemail {
  background-color: #0056b3;
  color: white;
  border: 0px;
  padding: 10px 20px;
  border-radius: 20px;
}
</style>
