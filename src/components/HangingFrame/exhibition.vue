<template>
  <div class="Exhibition">
    <div v-for="(item, index) in products" :key="index">
      <el-row :gutter="5">
        <el-col :span="6">
          <el-image
            style="width: 100%"
            :src="item.productRotationImg[0]"
            fit="cover"
          ></el-image>
        </el-col>
        <el-col :span="18">
          <div style="font-size: 18px; font-weight: bold">
            {{ item.productName }}
          </div>
          <div
            @mouseover="showStyle"
            @mouseout="hideStyle"
            style="
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              cursor: pointer;
            "
          >
            {{ item.productMsg }}
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exhibition",
  props: {
    emergeTag: String,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    queryProductByEmerge() {
      this.$axios
        .get("http://150.158.96.29:8781/product/queryProductByEmerge", {
          params: { emergeTag: this.emergeTag },
        })
        .then((res) => {
          console.log(res);
          this.products = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    showStyle(e) {
      e.target.style.whiteSpace = "normal";
    },
    hideStyle(e) {
      e.target.style.whiteSpace = "nowrap";
    },
  },
  mounted() {
    this.queryProductByEmerge();
  },
};
</script>

<style scoped>
.Exhibition .el-row {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}
</style>