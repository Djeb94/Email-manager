<template id="header">
  <nav id="header-nav">
    <button class="btn btn-primary mr-2">Home</button>
    <button class="btn btn-primary mr-2">Send mail</button>
    <button class="btn btn-primary mr-2">My mails</button>
    <button class="btn btn-secondary" @click="showLoginPopup">Login</button>

    <div v-if="showPopup" class="login-popup">
      <div class="popup-content">
        <span class="close" @click="closePopup">&times;</span>
        <p>Choisissez votre mode de connexion :</p>
        <button class="btn btn-secondary" @click="loginWithOption('Google')">Google</button>
        <button class="btn btn-secondary" @click="loginWithOption('Microsoft')"></button>
      </div>
    </div>
  </nav>
</template>

<script>
import MicrosoftLogin from './MicrosoftLogin.vue'

export default {
  name: 'BaseHeader',
  components: {
    MicrosoftLogin,
  },
  data() {
    return {
      showPopup: false
    };
  },
  methods: {
    showLoginPopup() {
      this.showPopup = true;
      console.log('Clicked on Login button');
    },
    closePopup() {
      this.showPopup = false;
      console.log('Clicked on close button');
    },
    loginWithOption(option) {
      console.log('Connexion avec', option);
    }
  }
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


/* Style pour le popup de connexion */
.login-popup {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.popup-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.popup-content button {
  margin-right: 10px;
}
</style>
