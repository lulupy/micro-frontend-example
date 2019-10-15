<template>
  <div :class="$style.root">
    <h1 :class="$style.title">页面1</h1>
    <img :class="$style.img" alt="Vue logo" src="../assets/logo.png">
    <MessageBox />
  </div>
</template>
<script>
import MessageBox from '../components/MessageBox.vue';

export default {
  components: {
    MessageBox,
  },
};
</script>
<style module>
.root{
  padding: 20px;
  text-align: center;
}
.title{
  font-size: 20px;
  color: yellowgreen;
}
.img{
  width: 100px;
  margin: 30px;
}
</style>
