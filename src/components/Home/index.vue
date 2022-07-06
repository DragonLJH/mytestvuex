<template>
  <div class="home">
    <el-container>
      <span style="width: auto">
        <Sidebar />
      </span>
      <el-container>
        <el-header style="height: 100px"><top-nav /></el-header>
        <el-main><app-main /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppMain from "./AppMain/index.vue";
import Sidebar from "./Sidebar/index.vue";
import TopNav from "./TopNav/index.vue";

export default {
  name: "Home",
  components: {
    AppMain,
    Sidebar,
    TopNav,
  },
};
</script>

<style scoped>
.el-header {
  padding: 0px;
  background-color: #b3c0d1;
}
.el-aside {
  background-color: #d3dce6;
}

.el-main {
  background-color: #e9eef3;
}
</style>