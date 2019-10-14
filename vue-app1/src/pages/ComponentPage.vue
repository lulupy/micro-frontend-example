<template>
  <main-layout>
    <Dialog></Dialog>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Dialog from './components/Dialog.vue';

  export default {
    components: {
      MainLayout,
      Dialog,
    }
  }
</script>