<template>
  <div>
    <el-button v-if="!user" v-on:click="login()">登陆</el-button>
    <span v-if="user">
      <div>{{user.username}}</div>
      <el-button v-if="user" v-on:click="logout()">退出</el-button>
    </span>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      console.log(this.$store);
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      const userInfo = {
        username: 'lu',
        token: 'xxxaaaxxxaaa',
      };
      this.$store.commit('login', userInfo);
      dispatchEvent(new CustomEvent('root:login', {
        bubbles: true,
        detail: userInfo,
      }));
    },
    logout() {
      this.$store.commit('logout');
      dispatchEvent(new CustomEvent('root:logout', {
        bubbles: true,
      }));
    },
  },
};
</script>
