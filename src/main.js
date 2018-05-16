import Vue from 'vue'
import router from './router'
import App from './App'


import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
