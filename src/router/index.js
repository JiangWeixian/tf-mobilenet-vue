import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const VueCamera = (resolve) => {
  import('components/Camera/VueCamera').then((module) => {
    resolve(module)
  })
}

const Loading = (resolve) => {
  import('components/Loading/Loading').then((module) => {
    resolve(module)
  })
}

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/camera'
    },
    {
      path: '/camera',
      name: 'VueCamera',
      component: VueCamera
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    }
  ]
})
