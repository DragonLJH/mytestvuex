<template>
  <div class="top-nav">
    <div class="top">
      <el-button :icon="topNavIcon" circle @click="mySwitch"></el-button>
      <el-button
        icon="el-icon-switch-button"
        :style="{ fontSize: '16px', float: 'right' }"
        type="danger"
        >{{ user.username }}</el-button
      >
    </div>
    <div class="bottom"><MyTopNavTag /></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import MyTopNavTag from "./MyTopNavTag.vue";
export default {
  name: "TopNav",
  components: {
    MyTopNavTag,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      mySwitch: "home/changeCollapse",
    }),
  },
  computed: {
    topNavIcon() {
      return this.home.collapse ? "el-icon-s-unfold" : "el-icon-s-fold";
    },
    ...mapState({ home: "home" }),
    ...mapState({ user: "user" }),
  },
};
</script>

<style scoped>
.top-nav {
  text-align: left;
  height: 100px;
}
.top-nav > .top {
  height: 60px;
  line-height: 60px;
}
.top-nav > .top > .el-button {
  font-size: 32px;
}
.top-nav > .bottom {
  height: 40px;
  line-height: 40px; 
  background-color: #fff;
}
</style>
