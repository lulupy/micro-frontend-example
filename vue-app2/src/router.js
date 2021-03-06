import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'page1',
      component: () => import(/* webpackChunkName: "page1" */ './views/Page1.vue'),
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import(/* webpackChunkName: "page2" */ './views/Page2.vue'),
    },
  ],
});
