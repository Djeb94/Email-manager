<template>
  <div class="auth-container">
    <button v-if="!isLoggedIn" @click="signInMicrosoft" class="auth-button microsoft">Sign in with Microsoft</button>
    <button v-if="!isLoggedIn" class="auth-button google">
      <GoogleLogin :callback="callbackGoogle">Sign in with Google</GoogleLogin>
    </button>
    <button v-if="isLoggedIn" @click="signOut" class="auth-button sign-out">Sign out</button>
    <p v-if="isLoggedIn" class="welcome-text">{{ userInfo }}</p>
  </div>
</template>

<script>
import * as microsoftGraph from "../lib/microsoftGraph.js";
import { mapMutations, mapState } from 'vuex'
import { googleLogout } from "vue3-google-login";

export default {
  name: "LogIn",
  data() {
    return {
      isLoggedIn: false,
      userInfo: null,
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapMutations(['setUser']),
    callbackGoogle(response) {
      console.log('Logged in with Google')
      this.isLoggedIn = true
      console.log(response)
      this.userInfo = response.profileObj && response.profileObj.name ? response.profileObj.name : 
                     response.name ? response.name :
                     response.profileObj && response.profileObj.email ? response.profileObj.email : 
                     "Unknown User";
      this.setUser(this.userInfo);
    },
    async signInMicrosoft() {
      try {
        const user = await microsoftGraph.signInAndGetUser();
        this.isLoggedIn = true;
        this.userInfo = user.account.name; // Récupération du nom de l'utilisateur Microsoft
        this.setUser(this.userInfo);
      } catch (error) {
        console.error(error);
      }
    },
    async signOut() {
      try {
        if (this.isLoggedIn) {
          await microsoftGraph.signOutUser();
        } else {
          googleLogout();
        }
        this.isLoggedIn = false;
        this.$store.commit('clearUser');
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
  margin-top: 0px;
}

.auth-button:hover {
  opacity: 0.8;
}

.welcome-text {
  color: #333333;
  margin: 0;
}
</style>
