<template>
  <div class="container">
    <img src="../assets/logo.png">
    <el-menu mode="horizontal">
      <el-menu-item>
        <router-link to="/">Home</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/about">About</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/components">Components</router-link>
      </el-menu-item>
    </el-menu>
    <slot></slot>
  </div>
</template>

<script>
  import VLink from '@/components/VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>

<style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #f9f7f5;
  }
</style>
