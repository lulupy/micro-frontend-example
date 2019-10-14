<template>
  <div :class="$style.root">
    <h1 :class="$style.title">页面1</h1>
    <img :class="$style.img" alt="Vue logo" src="../assets/logo.png">
  </div>
</template>
<style module>
.root{
  text-align: center;
}
.title{
  font-size: 20px;
  color: red;
}
.img{
  width: 100px;
  margin: 30px;
}
</style>
