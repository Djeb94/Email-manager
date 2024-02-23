<template>
  <header class="base-header">
    <nav class="header-nav">
      <div class="nav">
      <router-link to="/" class="nav-link">Home</router-link>
  <router-link v-if="isAuthenticated" to="/conversations" class="nav-link" id="Conv">Conversations</router-link>
    </div>
      <Login/>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import Login from './Login.vue';

export default {
  name: 'BaseHeader',
  components: {
    Login,
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}

</script>

<style scoped>
.base-header {
  background-color: #f4f4f4;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-link {
  color: #333333;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-left: 80px;
}

.nav-link:hover {
  color: #007bff; /* Couleur au survol */
}

.btn {
  border: none;
  color: #ffffff; /* Couleur du texte des boutons */
  font-size: 1rem;
  padding: 0.5rem 1rem; /* Espacement intérieur */
  border-radius: 0.25rem; /* Bord arrondi */
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease; /* Transition pour le changement de couleur de fond */
}

.btn-primary {
  background-color: #007bff; /* Couleur de fond des boutons primaires */
}

.btn-primary:hover {
  background-color: #0056b3; /* Couleur au survol */
}
</style>
