<template>
  <div class="app">
    <img src="./assets/logo.png" alt="logo">
    <i class="em em-cat em-48"></i>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        name: 'App'
      }
    }
  }
</script>

<style>
  .app {
    font-size: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .em.em-48 {
    font-size: 48px;
  }
</style>
