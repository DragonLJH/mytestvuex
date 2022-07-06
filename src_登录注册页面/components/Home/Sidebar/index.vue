<template>
  <div class="sidebar">
    <el-menu default-active="/" class="el-menu-vertical-demo" :collapse="false">
      <div v-for="(route, index) in routes" :key="index">
        <div v-if="!route.hidden">
          <el-menu-item :index="route.path">
            <i :class="route.children[0].meta.icon"></i>
            <router-link slot="title" :to="route.children[0].path">{{
              route.children[0].meta.title
            }}</router-link>
          </el-menu-item>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {};
  },
  methods: {},
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
  mounted() {
    console.log(this.routes);
  },
};
</script>

<style scoped>
</style>
