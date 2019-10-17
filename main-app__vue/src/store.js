import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export default store;
