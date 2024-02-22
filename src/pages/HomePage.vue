<template>
  <div>
    <h1>{{ message }}</h1>
    <p>{{ auth }}</p>
  </div>
</template>
  
<script>

export default {
  name: "HomePage",
  data() {
    return {
      message: 'Welcome to Email Manager',
      auth: "Please log in your account to access conversations"
    }
  }
}

</script>

<style>
  div h1 {
    margin-top: 100px;
  }
</style>