<template>
  <div class="vue-app2">
    <el-menu mode="horizontal">
      <el-menu-item>
        <router-link to="/">页面一</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/page2">页面二</router-link>
      </el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>
<script>
import Vue from 'vue';
import ElementUI from 'element-ui';


if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  require('normalize.css');
  // eslint-disable-next-line
  require('element-ui/lib/theme-chalk/index.css');
}

Vue.use(ElementUI);

export default {};
</script>
