<template>
  <div class="auth-container">
    <button v-if="name === ''" @click="signIn" class="auth-button microsoft">Connexion avec Microsoft</button>
    <button v-if="name === ''" @click="signInG" class="auth-button google">Connexion avec Google</button>
    <button v-else @click="signOut" class="auth-button sign-out">Déconnexion</button>
    <p v-if="name !== ''" class="welcome-text">Welcome, {{ name }}</p>
  </div>
</template>

<script>
import * as microsoftGraph from "../lib/microsoftGraph.js";

export default {
  name: "SigninButton",
  data() {
    return {
      name: ""
    }
  },
  methods: {
    async signIn() {
      try {
        const user = await microsoftGraph.signInAndGetUser();
        this.name = user.account.name
        console.log(this.name);
        this.$emit('setUser', this.name);
      } catch (error) {
        console.error(error);
      }
    },
    async signOut() {
      try {
        await microsoftGraph.signOutUser();
        this.name = "";
        console.log("Utilisateur déconnecté.");
      } catch (error) {
        console.error(error);
      }
    }
  },
};
</script>

<style scoped>
.auth-container {
  display: flex; /* Utilisation de flexbox */
  align-items: center; /* Alignement vertical centré */
}

.auth-button {
  border: none;
  color: #ffffff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-right: 1rem;
}

.microsoft {
  background-color: #0078d4; /* Couleur Microsoft */
}

.google {
  background-color: #4285f4; /* Couleur Google */
}

.sign-out {
  background-color: #dc3545; /* Couleur de déconnexion */
}

.auth-button:hover {
  opacity: 0.8; /* Légère diminution de l'opacité au survol */
}

.welcome-text {
  color: #333333; /* Couleur du texte de bienvenue */
  margin: 0; /* Annule les marges par défaut */
}
</style>
