<template>
  <div>
    <h1>{{ welcome }}</h1>
    <p v-if="!isAuthenticated">{{ auth }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "HomePage",
  computed: {
    ...mapGetters(['isAuthenticated']),
    welcome() {
      return 'Welcome to Email Manager'
    },
    auth() {
      return 'Please log in your account to access conversations'
    }
  }
}
</script>

<style>
  div h1 {
    margin-top: 100px;
  }
</style>