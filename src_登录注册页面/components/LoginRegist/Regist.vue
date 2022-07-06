<template>
  <div class="regist">
    <div style="margin-top: 50px"></div>
    <el-form
      status-icon
      label-position="right"
      label-width="80px"
      :model="registForm"
      :rules="rules"
      ref="registForm"
    >
      <el-form-item prop="userName" label="手机号">
        <el-input v-model="registForm.userName">
          <i slot="prefix" class="el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="userPassword" label="密码">
        <el-input show-password v-model="registForm.userPassword">
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword">
        <el-input show-password v-model="registForm.checkPassword"
          ><i slot="prefix" class="el-icon-lock"></i
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-check" @click="toRegist"
          >注册</el-button
        >
        <el-button icon="el-icon-delete" @click="resetForm('registForm')"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkPassword = (rule, value, callback) => {
      setTimeout(() => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== this.registForm.userPassword) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      registForm: {
        userName: "",
        userPassword: "",
        checkPassword: "",
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
        checkPassword: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { validator: checkPassword, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toRegist() {
      // this.$axios
      //   .post(
      //     "http://150.158.96.29:8781/user/insertUser",
      //     this.qs.stringify(registForm)
      //   )
      //   .then((val) => {
      //     if (val) {
      //       this.$message({
      //         message: "注册成功",
      //         type: "success",
      //       });
      //     } else {
      //       this.$message.error("注册失败");
      //     }
      //   });

      // this.$message({
      //   message: this.registForm,
      //   type: "success",
      // });
      this.$refs["registForm"].validate((val) => {
        if (val) {
          console.log(this.registForm);
          this.$message.success(this.registForm);
        } else {
          return false;
        }
      });
    },
  },
  mounted() {},
  created() {},
};
</script>

<style scoped>
</style>