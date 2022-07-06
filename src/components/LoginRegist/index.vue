<template>
  <div class="login-regist" :style="{ height: `${windowHeight}px` }">
    <div class="center">
      <el-tabs v-model="activeName" type="border-card" stretch>
        <el-tab-pane name="login">
          <span slot="label"><i class="el-icon-user-solid"></i> 登录</span>
          <Login :active="activeName" />
        </el-tab-pane>
        <el-tab-pane name="regist">
          <span slot="label"><i class="el-icon-user"></i> 注册</span>
          <Regist :active="activeName" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Login from "./Login.vue";
import Regist from "./Regist.vue";
export default {
  name: "LoginRegist",
  components: {
    Login,
    Regist,
  },
  data() {
    return {
      activeName: "login",
      windowHeight: document.documentElement.clientHeight,
    };
  },
  methods: {},
  mounted() {
    //onresize 事件会在窗口或框架被调整大小时发生。
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        this.windowHeight = window.fullHeight; // 高
      })();
    };
  },
  created() {},
};
</script>

<style scoped>
.login-regist {
  width: 100%;
  background-color: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center {
  width: 500px;
  height: 400px;
  background-color: #ccc;
}
.center >>> .el-tabs {
  height: 100%;
}
</style>