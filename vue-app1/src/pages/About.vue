<template>
  <main-layout>
    <p class="about">About page</p>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      MainLayout
    }
  }
</script>

<style scoped>
  .about {
    color: red;
  }
</style>