<template>
  <div>
 
    <h1>{{ message }}</h1>
  </div>
</template>
  
<script>

export default {
  name: "HomePage",
  data() {
    return {
      message: 'Welcome to Email Manager'
    }
  }
}

</script>

<style>
  div h1 {
    margin-top: 100px;
  }
</style>