<template>
  <div class="app">
    <img src="./assets/logo.png" alt="logo">
    <div class="panel control-panel">
      <a class="btn-floating btn-large waves-effect waves-light white">
        <i class="material-icons md-dark">play_arrow</i>
      </a>
    </div>
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

<style lang="stylus">
  @import "assets/css/icons.styl"
</style>
