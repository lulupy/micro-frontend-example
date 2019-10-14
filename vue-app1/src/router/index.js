import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/vue-app1',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/pages/About.vue')
    },
    {
      path: '/components',
      name: 'Components',
      component: () => import('@/pages/ComponentPage.vue')
    },
  ]
})
