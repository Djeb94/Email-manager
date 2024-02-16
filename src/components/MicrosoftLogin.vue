<template>
    <div>
      <button v-if="name===''" @click="signIn">Sign in with Microsoft</button>
      <p v-else>Welcome, {{ name }}</p>
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
  },
};
</script>