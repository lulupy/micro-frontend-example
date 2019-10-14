<template>
  <div>
    <div :class="$style.root">
      <MainMenu :class="$style.menu"/>
      <div :class="$style.appContainer">
        <router-view />
        <div id="child-apps">
          <div />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import MainMenu from './components/MainMenu.vue';

Vue.use(ElementUI);

export default {
  name: 'App',
  components: {
    MainMenu,
  },
};
</script>

<style module>
.root{
  height: 100vh;
  weight: 100vw;
  display: flex;
}
.appContainer{
  border: 10px solid yellowgreen;
  flex-grow: 1;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}
.menu{
  width: 200px;
}
</style>
