<template>
  <base-layout>
    <RouterView></RouterView>
  </base-layout>
</template>

<script>
import BaseLayout from './components/BaseLayout.vue'

export default {
  name: 'App',
  components: {
    BaseLayout,
   
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header-nav{
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: row;
  margin: 0;
  color: white;
}
#header-nav>*{
  margin: 14px 14px;
  flex-grow: 1;
}
#footer-nav{
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #202020;
  display: flex;
  flex-direction: row;
  color: white;
}
#footer-nav>*{
  margin: 14px 14px;
  flex-grow: 1;
}
</style>
