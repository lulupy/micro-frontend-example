<template>
  <div>
    <el-button v-on:click="handleSendToVueApp2()">主应用发起通知, 子应用监听并处理</el-button>
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
    handleSendToVueApp2() {
      dispatchEvent(new CustomEvent('root:notify', {
        bubbles: true,
        detail: '来自父组件的信息',
      }));
    },
    handleReceiveMessageFromVueApp2(event) {
      this.message = event.detail.message;
    },
  },
  mounted() {
    window.addEventListener('vue-app2:page1:click', this.handleReceiveMessageFromVueApp2);
  },
  beforeDestroy() {
    window.removeEventListener('vue-app2:page1:click', this.handleVueApp2);
  },
};
</script>
