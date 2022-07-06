<template>
  <div class="shop-page">
    <el-table
      :summary-method="getSummaries"
      show-summary
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="80"> </el-table-column>
      <el-table-column label="" width="150">
        <template slot-scope="scope"
          ><el-image
            style="width: 100%"
            :src="scope.row.productRotationImg"
            fit="fit"
          ></el-image
        ></template>
      </el-table-column>
      <el-table-column label="名称" width="150">
        <template slot-scope="scope">{{ scope.row.productName }}</template>
      </el-table-column>
      <el-table-column label="颜色" width="150">
        <template slot-scope="scope">{{ scope.row.selectColor }}</template>
      </el-table-column>
      <el-table-column label="尺寸" width="150">
        <template slot-scope="scope">{{ scope.row.selectSize }}</template>
      </el-table-column>
      <el-table-column label="价格" width="150">
        <template slot-scope="scope">{{
          scope.row.productSellingPrice
        }}</template>
      </el-table-column>
      <el-table-column label="数量" width="150">
        <template slot-scope="scope"
          ><el-input-number
            size="mini"
            v-model="scope.row.selectNum"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope"
          ><el-button
            icon="el-icon-delete"
            @click="del(scope.row.shopId)"
            type="danger"
            size="mini"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ShopPage",
  data() {
    return {
      tableData: [
        {
          shopId: 1,
          userName: "18022429170",
          productId: 1,
          productRotationImg:
            "http://150.158.96.29:8082/my-shop-img/uploadProductRotationImg/2f0aecaef4514b46b25fb86484e60a1d.jpg",
          productName: "回力男鞋",
          selectSize: "37",
          selectColor: "蓝白色",
          productSellingPrice: 88,
          selectNum: 1,
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
    queryShopByUserName() {
      this.$axios
        .get("http://150.158.96.29:8781/shop/queryShopByUserName", {
          params: { userName: 18022429170 },
        })
        .then((res) => {
          this.tableData = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = new Array(columns.length).fill("");
      sums[0] = "总价";
      let sum = 0;
      data.forEach((element) => {
        sum += element.productSellingPrice * element.selectNum;
      });
      sums[columns.length - 1] = "￥" + sum;
      return sums;
    },
  },
  mounted() {
    this.queryShopByUserName();
  },
};
</script>

<style>
</style>