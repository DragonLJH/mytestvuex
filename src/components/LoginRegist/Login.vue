<template>
  <div class="login">
    <div style="margin-top: 50px"></div>
    <el-form
      status-icon
      label-position="right"
      label-width="80px"
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
    >
      <el-form-item prop="userName" label="手机号">
        <el-input v-model="loginForm.userName">
          <i slot="prefix" class="el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="userPassword" label="密码">
        <el-input show-password v-model="loginForm.userPassword">
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-check" @click="toLogin"
          >登录</el-button
        >
        <el-button icon="el-icon-delete" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    active: String,
  },
  data() {
    return {
      loginForm: {
        userName: "",
        userPassword: "",
      },
      rules: {
        userName: [
          {
            pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g,
            message: "手机号格式不正确",
            trigger: "blur",
          },
          { required: true, message: "手机号不能为空", trigger: "blur" },
        ],
        userPassword: [
          {
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/g,
            message:
              "必须包含大小写字母和数字的组合，可以使用特殊字符，长度在6-16之间",
            trigger: "blur",
          },
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    resetForm() {
      this.$refs["loginForm"].resetFields();
    },
    toLogin() {
      this.$refs["loginForm"].validate((val) => {
        if (val) {
          this.$axios
            .get("http://150.158.96.29:8781/user/queryUserByUserName", {
              params: this.loginForm,
            })
            .then((res) => {
              if (res.data) {
                this.$message.success("登录成功");
                localStorage.setItem("userName", this.loginForm.userName);
                this.$router.replace("/homePage");
              } else {
                this.$message.error("登录失败");
              }
            });
        } else {
          return false;
        }
      });
    },
  },
  mounted() {},
  created() {},
  watch: {
    //根据父组件传来的参数来进行表单重置
    active(n, o) {
      if (n !== "login") {
        this.resetForm();
      }
    },
  },
};
</script>

<style scoped>
</style>