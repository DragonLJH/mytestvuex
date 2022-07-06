<template>
  <el-card class="box-card">
    <div slot="header">
      <span>{{ emerge.emergeTag }}</span>
      <el-button style="float: right; padding: 3px 0" type="text"
        >操作按钮</el-button
      >
    </div>
    <el-row type="flex" justify="space-around">
      <el-col
        :span="3"
        v-for="(item, index) in productList"
        :key="index"
        style="background-color: #ccc"
      >
        <div @click="clickCard(item.productId)">
          <el-card :body-style="{ padding: '10px' }">
            <img
              :src="item.productRotationImg[0]"
              class="image"
              style="width: 100%"
            />
            <div style="padding: 14px">
              <div>{{ item.productName }}</div>
              <el-tooltip placement="right">
                <div slot="content" style="width: 100px; font-size: 1rem">
                  {{ item.productMsg }}
                </div>
                <div
                  :style="{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                  }"
                >
                  {{ item.productMsg }}
                </div>
              </el-tooltip>

              <span></span>
              <div>
                <el-button
                  type="primary"
                  class="button"
                  icon="el-icon-star-off"
                  circle
                />
                <el-button
                  type="success"
                  class="button"
                  icon="el-icon-shopping-cart-1"
                  circle
                />
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: {
    emerge: Object,
  },
  data() {
    return {
      productList: [],
    };
  },
  methods: {
    queryProductByEmerge() {
      this.$axios
        .get("http://150.158.96.29:8781/product/queryProductByEmerge", {
          params: this.emerge,
        })
        .then((res) => {
          //当数据超过6时限制获取6条数据
          if (res.data.length > 6) {
            this.productList = res.data.filter((val, index) => {
              return index < 6;
            });
            console.log("queryProductByEmerge > 6", res);
          } else {
            this.productList = [...res.data];
            console.log("queryProductByEmerge < 6", res);
          }
        });
    },
    clickCard(productId) {
      console.log("产品ID:", productId);
    },
  },

  mounted() {
    this.queryProductByEmerge();
  },
};
</script>

<style scoped>
</style>