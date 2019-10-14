<template>
  <div :class="$style.root">
    <Dialog />
  </div>
</template>
<script>
import Dialog from '../components/Dialog.vue';

export default {
  components: {
    Dialog,
  },
};
</script>
<style module>
.root{
  padding: 20px;
}
</style>
