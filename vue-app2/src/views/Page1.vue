<template>
  <div>
    <div :class="main">
      <h1 :class="$style.title">页面1</h1>
      <img :class="$style.img" alt="Vue logo" src="../assets/logo.png">
    </div>
    <ConfigInfo />
    <UserInfo />
    <MessageBox />
  </div>
</template>
<script>
import MessageBox from '../components/MessageBox.vue';
import ConfigInfo from '../components/ConfigInfo.vue';
import UserInfo from '../components/UserInfo.vue';

export default {
  components: {
    MessageBox,
    ConfigInfo,
    UserInfo,
  },
};
</script>
<style module>
.main{
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
