<template>
  <div class="app-main">
    <router-view :key="key" />
  </div>
</template>

<script>
export default {
  name: "AppMain",
  data() {
    return {};
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  watch: {},
};
</script>

<style scoped>
</style>
