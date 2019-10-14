import Vue from 'vue';
import Router from 'vue-router';
import Page1 from './views/Page1.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'page1',
      component: Page1,
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import(/* webpackChunkName: "page2" */ './views/Page2.vue'),
    },
  ],
});
