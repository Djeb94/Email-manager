<template>
  <base-layout>
    <HomePage/>
  </base-layout>
</template>

<script>
import HomePage from './pages/HomePage.vue'
import BaseLayout from './components/BaseLayout.vue'

export default {
  name: 'App',
  components: {
    HomePage,
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
  margin-top: 60px;
}

#header-nav{
  position: fixed;
  width: 100%;
  top: 0;
  background-color: green;
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
  position: fixed;
  width: 100%;
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
