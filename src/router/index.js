import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const VueCamera = (resolve) => {
  import('components/Camera/VueCamera').then((module) => {
    resolve(module)
  })
}

const MobileNet = (resolve) => {
  import('components/Model/MobileNet').then((module) => {
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
      redirect: '/loading'
    },
    {
      path: '/model',
      name: 'MobileNet',
      component: MobileNet,
      redirect: '/camera',
      children: [
        {
          path: '/camera',
          name: 'VueCamera',
          component: VueCamera
        }
      ]
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    }
  ]
})
