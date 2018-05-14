<template>
  <div class="app">
    <router-view></router-view>
    <div class="panel control-panel">
      <a class="btn-floating btn-large waves-effect waves-dark white">
        <i class="material-icons md-dark md-36">play_arrow</i>
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
  @import "assets/css/global.styl"
</style>
