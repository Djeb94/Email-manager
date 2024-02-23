<template>
  <div class="auth-container">
    <button v-if="user === null" @click="signIn" class="auth-button microsoft">Sign in with Microsoft</button>
    <button v-if="user === null" @click="signInG" class="auth-button google">Sign in with Google</button>
    <button v-else @click="signOut" class="auth-button sign-out">Sign out</button>
    <p v-if="user !== null" class="welcome-text">Welcome, {{ user }}</p>
  </div>
</template>

<script>
import * as microsoftGraph from "../lib/microsoftGraph.js";
import { mapMutations, mapState } from 'vuex'

export default {
  name: "SigninButton",
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapMutations(['setUser']),
    async signIn() {
      try {
        const user = await microsoftGraph.signInAndGetUser();
        this.setUser(user.account.name);
      } catch (error) {
        console.error(error);
      }
    },
    async signOut() {
      try {
        await microsoftGraph.signOutUser();
        this.setUser(null);
      } catch (error) {
        console.error(error);
      }
    }
  },
};
</script>

<style scoped>
.auth-container {
  display: flex;
  align-items: center;
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
  background-color: #0078d4;
}

.google {
  background-color: #4285f4;
}

.sign-out {
  background-color: #dc3545;
}

.auth-button:hover {
  opacity: 0.8;
}

.welcome-text {
  color: #333333;
  margin: 0;
}
</style>