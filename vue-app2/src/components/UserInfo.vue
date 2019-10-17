<template>
  <div>
    <h2>user:</h2>
    <pre>{{user}}</pre>
  </div>

</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
