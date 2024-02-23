<template>
  salut
  <div class="conversations-content">
    <button @click="$router.go(-1)">Retour</button>
    <h1>Email Message</h1>
    <p>{{ emailMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "ConversationsContent",
  props: ['emailId'],
  computed: {
    emailMessage() {
      
      const emails = JSON.parse(localStorage.getItem('emails')) || [];
      
      const email = emails.find(email => email.id == this.emailId);
      
      return email ? email.message : 'Email not found';
    }
  }
}
</script>

<style>
.conversations-content {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
