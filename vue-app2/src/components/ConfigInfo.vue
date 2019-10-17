<template>
  <div>
    <h2>config:</h2>
    <pre>{{config}}</pre>
  </div>

</template>
<script>
import { getConfig } from '../config';

const config = getConfig();

export default {
  computed: {
    config() {
      return config;
    },
  },
};
</script>
