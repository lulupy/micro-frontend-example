<template>
  <div :class="$style.root">
    <el-menu :class="$style.menu">
      <el-menu-item>
        <router-link to="/">home</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/react-app1">react-app1</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/vue-app1">vue-app1</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/vue-app2">vue-app2</router-link>
      </el-menu-item>
    </el-menu>
    <AuthBox :class="$style.auth" />
  </div>
</template>
<script>
import AuthBox from './AuthBox.vue';

export default {
  components: {
    AuthBox,
  },
};
</script>
<style module>
.root{
  display: flex;
  flex-direction: column;
}
.menu{
  flex-grow: 1;
}
.auth{
  text-align: center;
  margin-bottom: 20px;
  line-height: 25px;
}
</style>
