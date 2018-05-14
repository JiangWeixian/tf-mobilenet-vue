<template>
  <div class="app">
    <img src="./assets/logo.png" alt="logo">
    Welcome Webpack
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
</style>
