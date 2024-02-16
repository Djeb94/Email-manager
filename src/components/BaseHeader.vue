<template id="header">
  <nav id="header-nav">
    <button class="btn btn-primary mr-2">Home</button>
    <button class="btn btn-primary mr-2">Send mail</button>
    <button class="btn btn-primary mr-2">My mails</button>
    <button class="btn btn-secondary">Se connecter</button>
  </nav>
</template>

<script>

export default {
  name: 'BaseHeader',
  components: {

  }
}
</script>

<style>
#header-nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
  background-color: #333;
}

#header-nav button {
  border: none;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

#header-nav button:hover {
  background-color: #555;
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
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}

.mr-2 {
  margin-right: 0.5rem;
}
</style>