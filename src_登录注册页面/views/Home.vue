<template>
  <div class="home">
    <el-container>
      <el-aside width="200px"><Sidebar /></el-aside>
      <el-container>
        <el-header><top-nav /></el-header>
        <el-main><app-main /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppMain from "@/components/Home/AppMain/index.vue";
import Sidebar from "@/components/Home/Sidebar/index.vue";
import TopNav from "@/components/Home/TopNav/index.vue";

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
.el-header,
.el-footer {
  background-color: #b3c0d1;
}

.el-aside {
  background-color: #d3dce6;
}

.el-main {
  background-color: #e9eef3;
}
</style>