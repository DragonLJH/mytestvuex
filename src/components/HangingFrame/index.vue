<template>
  <div class="HangingFrame">
    <el-card class="box-card" v-for="(item, index) in emergeTags" :key="index">
      <div slot="header" class="clearfix">
        <span>{{ item.emergeTag }}</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >更多</el-button
        >
      </div>
      <div><Exhibition :emergeTag="item.emergeTag" /></div>
    </el-card>
  </div>
</template>

<script>
import Exhibition from "./exhibition";
export default {
  name: "HangingFrame",
  components: {
    Exhibition,
  },
  data() {
    return {
      emergeTags: [],
    };
  },
  methods: {
    queryAllEmerge() {
      this.$axios
        .get("http://150.158.96.29:8781/emerge/queryAllEmerge")
        .then((val) => {
          console.log(val);
          this.emergeTags = val.data;
        });
    },
  },
  mounted() {
    this.queryAllEmerge();
  },
};
</script>

<style scoped>
.HangingFrame {
  text-align: left;
}
.HangingFrame .el-card {
  margin: 0px 0px 20px;
  height: 300px;
  overflow-y: auto;
}
</style>