<template id="header">
  <nav id="header-nav">
    <router-link to="/" class="btn btn-primary mr-2">Home</router-link>
    <router-link to="conversations" class="btn btn-primary mr-2">Conversations</router-link>
    <microsoft-login></microsoft-login>
  </nav>
</template>

<script>
import MicrosoftLogin from './MicrosoftLogin.vue'
export default {
  name: 'BaseHeader',
  components: {
    MicrosoftLogin
  },
}
</script>

<style scoped>
.header-nav {
  background-color: #333;
  padding: 0.5rem;
}

/* Style pour les boutons */
.btn {
  border: none;
  color: black;
  font-size: 1.1rem;
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  text-decoration: none;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-secondary {
  background-color: transparent;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}
</style>
