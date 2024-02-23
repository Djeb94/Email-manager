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
      // Récupérer les e-mails à partir de localStorage
      const emails = JSON.parse(localStorage.getItem('emails')) || [];
      // Recherchez l'e-mail correspondant à l'ID fourni
      const email = emails.find(email => email.id == this.emailId);
      // Retourne le contenu de l'e-mail s'il est trouvé
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
