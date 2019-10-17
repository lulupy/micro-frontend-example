<template>
  <div>
    <el-button v-on:click="handleClick()">通知父应用</el-button>
    <el-alert
      style="margin-top: 5px"
      :key="i"
      v-for="(m, i) in messages"
      :title="m"
      type="success"
    >
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
    handleClick() {
      dispatchEvent(new CustomEvent('vue-app2:notify', {
        bubbles: true,
        detail: {
          message: '来自vue-app2的消息',
        },
      }));
    },
    handleReceiveMessage(event) {
      this.messages.push(event.detail);
      console.log('receive message from root app in vue app2');
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
