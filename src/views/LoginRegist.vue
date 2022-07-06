<template>
  <div class="login-regist">
    <div class="center">
      <el-tabs
        v-model="activeName"
        type="border-card"
        @tab-click="handleClick"
        stretch
      >
        <el-tab-pane name="login">
          <span slot="label"><i class="el-icon-user-solid"></i> 登录</span>
          <Login />
        </el-tab-pane>
        <el-tab-pane name="regist">
          <span slot="label"><i class="el-icon-user"></i> 注册</span>
          <Regist />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Login from "../components/LoginRegist/Login.vue";
import Regist from "../components/LoginRegist/Regist.vue";
export default {
  name: "LoginRegist",
  components: {
    Login,
    Regist,
  },
  data() {
    return {
      activeName: "login",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(this.activeName, tab, event);
    },
  },
  mounted() {},
  created() {},
};
</script>

<style scoped>
.login-regist {
  width: 100%;
  padding: 100px 0px;
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
.center >>> .el-tabs{
  height: 100%;
}
</style>