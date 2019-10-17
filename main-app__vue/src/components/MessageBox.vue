<template>
  <div>
    <el-button v-on:click="handleSendToVueApp2()">主应用发起通知, 子应用监听并处理</el-button>
    <el-alert
      style="margin-top: 5px"
      :key="i"
      v-for="(m, i) in messages"
      :title="m"
      type="success"
    >
    </el-alert>
  </div>
</template>
<script>

export default {
  data() {
    return {
      messages: [],
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
      this.messages.push(event.detail.message);
    },
  },
  mounted() {
    window.addEventListener('vue-app2:notify', this.handleReceiveMessageFromVueApp2);
  },
  beforeDestroy() {
    window.removeEventListener('vue-app2:notify', this.handleVueApp2);
  },
};
</script>
