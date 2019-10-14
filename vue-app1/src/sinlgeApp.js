import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
// import App from './App.vue';
import router from './router';

const App = () => import('./App.vue');

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    router,
  },
});

export const { bootstrap } = vueLifecycles;
export const { mount } = vueLifecycles;
export const { unmount } = vueLifecycles;
