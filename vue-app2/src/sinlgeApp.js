import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import { setConfig } from './config';
import router from './router';
import store from './store';

const App = () => import(/* webpackChunkName: "app" */ './App.vue');

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    router,
    store,
  },
});

export default (props) => {
  const {
    config,
    userInfo,
  } = props;

  setConfig(config);
  if (userInfo) {
    store.commit('setAuth', userInfo);
  }
  window.addEventListener('root:login', (event) => {
    store.commit('setAuth', event.detail);
    console.log('vue-app2 handle root:login');
  });
  window.addEventListener('root:logout', () => {
    store.commit('setAuth', null);
    console.log('vue-app2 handle root:logout');
  });
  return vueLifecycles;
};
