<template>
  <div class="carouse-img">
    <div class="main">
      <el-image :src="activeSrc"> </el-image>
    </div>
    <div class="hover">
      <el-row type="flex" justify="space-around">
        <el-col :span="5" v-for="(item, index) in srcList" :key="index">
          <el-image @mouseover="myMouseover" :src="item" fit="fill"></el-image>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "carouselImg",
  props: {
    srcList: Array,
  },
  data() {
    return {
      activeSrc: "",
    };
  },
  methods: {
    myMouseover(e) {
      this.activeSrc = e.target.src;
    },
  },
  mount() {},
  watch: {
    //监听父组件传来的值
    srcList(n, o) {
      this.activeSrc = n[0];
    },
  },
};
</script>

<style>
.carouse-img {
  width: 100%;
}
</style>

