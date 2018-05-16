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
        name: 'App',
        model: null
      }
    },
    computed: {
      isPc() {
        var ua = navigator.userAgent,
          isWindowsPhone = /(?:Windows Phone)/.test(ua),
          isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
          isAndroid = /(?:Android)/.test(ua),
          isFireFox = /(?:Firefox)/.test(ua),
          isChrome = /(?:Chrome|CriOS)/.test(ua),
          isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
          isPhone = /(?:iPhone)/.test(ua) && !isTablet,
          isPc = !isPhone && !isAndroid && !isSymbian && !isTablet;
        return isPc
      }
    }
  }
</script>

<style lang="stylus">
  @import "assets/css/global.styl"
</style>
