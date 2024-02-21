<template>
  <div>
    <button v-if="name === ''" @click="signIn">Connexion avec Microsoft</button>
    <button v-if="name === ''" @click="signIn">Connexion avec Google</button>
    <button v-else @click="signOut">Déconnexion</button>
    <p v-if="name !== ''">Welcome, {{ name }}</p>
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
.image-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-image: url("../assets/microsoft-logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  border-radius: 25px;
}

.button-text {
  display: none;
}

p {
  color: black;
}
</style>