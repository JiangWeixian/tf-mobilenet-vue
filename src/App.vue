<template>
  <div class="app">
    <router-view></router-view>
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
  @import "assets/css/global.styl"
</style>
