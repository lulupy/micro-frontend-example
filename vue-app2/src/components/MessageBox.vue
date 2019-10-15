<template>
  <div>
    <el-button v-on:click="handleClick()">通知父应用</el-button>
    <div>{{message}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    handleClick() {
      dispatchEvent(new CustomEvent('vue-app2:page1:click', {
        bubbles: true,
        detail: {
          message: '来自vue-app2的消息',
        },
      }));
    },
    handleReceiveMessage(event) {
      console.log('receive message from root app in vue app2');
      this.message = event.detail;
    },
  },
  mounted() {
    window.addEventListener('root:notify', this.handleReceiveMessage);
  },
  beforeDestroy() {
    window.removeEventListener('root:notify', this.handleReceiveMessage);
  },
};
</script>
