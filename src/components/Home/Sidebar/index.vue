<template>
  <div class="sidebar">
    <el-menu
      :default-active="defaultActive"
      :collapse="isCollapse.collapse"
      :router="true"
      @select="handleSelect"
    >
      <SidebarItem
        v-for="(route, index) in routes"
        :key="index"
        :route="route"
      />
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SidebarItem from "./SidebarItem";
export default {
  components: {
    SidebarItem,
  },
  name: "Sidebar",
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      this.addTag(key);
    },
    ...mapActions({ addTag: "home/addTag" }),
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    defaultActive() {
      return this.$route.path;
    },
    ...mapState({ isCollapse: "home" }),
  },
  mounted() {
    console.log(this.routes);
    console.log(this.isCollapse);
  },
};
</script>

<style scoped>
</style>
