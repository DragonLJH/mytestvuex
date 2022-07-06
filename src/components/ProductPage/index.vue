<template>
  <div class="product-page">
    <el-divider content-position="right" style="opacity: 0">{{
      product.productName
    }}</el-divider>
    <el-row type="flex" justify="space-around">
      <el-col :span="5">
        <div class="left">
          <HangingFrame />
        </div>
      </el-col>
      <el-col :span="17">
        <div class="main">
          <el-row type="flex" justify="space-around">
            <el-col :span="8">
              <div class="main-left">
                <CarouselImg :srcList="product.productRotationImg" />
              </div>
            </el-col>
            <el-col :span="14">
              <div class="main-right">
                <div class="title">
                  {{ product.productMsg }}
                </div>
                <div class="sellP">
                  销售价格：
                  <span style="color: #f00">
                    ￥{{ product.productSellingPrice }}
                  </span>
                </div>
                <div>
                  市场价格：<del>{{ product.productPrice }} </del>
                </div>
                <div>
                  <el-row :gutter="20">
                    <el-col :span="6">
                      <div>库存：{{ product.productStock }}</div>
                    </el-col>
                    <el-col :span="6" :offset="6">
                      <div>销量：{{ product.productSalesVolume }}</div>
                    </el-col>
                  </el-row>
                </div>

                <div>
                  颜色：
                  <el-button-group
                    v-for="(item, index) in product.productColor"
                    :key="index"
                  >
                    <el-button
                      :type="
                        item === selectProduct.selectColor ? 'primary' : ''
                      "
                      @click="colorBtn"
                      >{{ item }}</el-button
                    >
                  </el-button-group>
                </div>
                <div>
                  尺寸：
                  <el-button-group
                    v-for="(item, index) in product.productSize"
                    :key="index"
                  >
                    <el-button
                      :type="item === selectProduct.selectSize ? 'primary' : ''"
                      @click="sizeBtn"
                      >{{ item }}</el-button
                    >
                  </el-button-group>
                </div>
                <div>
                  数量：<el-input-number
                    v-model="selectProduct.num"
                    @change="handleChange"
                    :min="1"
                    :max="10"
                    label="描述文字"
                  ></el-input-number>
                </div>
                <div>
                  <el-button type="primary" @click="shop">加入购物车</el-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div style="margin-top: 20px">
          <el-tabs>
            <el-tab-pane label="图片介绍">
              <div style="background-color: #fff">
                <el-image
                  v-for="url in product.productMsgImg"
                  :key="url"
                  :src="url"
                ></el-image>
              </div>
            </el-tab-pane>
            <el-tab-pane label="商品介绍">
              <el-descriptions :column="2" border>
                <el-descriptions-item>
                  <template slot="label">商品名称</template>
                  {{ product.productName }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">商品描述 </template>
                  {{ product.productMsg }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">商品颜色 </template>
                  {{ product.productColor }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">商品尺寸 </template>
                  {{ product.productSize }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">销售价格 </template>
                  {{ product.productSellingPrice }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">市场价格 </template>
                  {{ product.productPrice }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">销量 </template>
                  {{ product.productSalesVolume }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label"> 库存</template>
                  {{ product.productStock }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">商品类型 </template>
                  {{ product.productType }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label"> 商品定位</template>
                  {{ product.productEmergeSite }}
                </el-descriptions-item>
              </el-descriptions>
            </el-tab-pane>
            <el-tab-pane label="评论"></el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CarouselImg from "./carouselImg.vue";
import HangingFrame from "../HangingFrame/index.vue";
export default {
  name: "ProductPage",
  components: { CarouselImg, HangingFrame },
  data() {
    return {
      product: {
        productColor: ["浅绿色", "米白色", "米色"],
        productEmergeSite: "新品#推荐商品#特惠商品#",
        productId: 2,
        productMsg:
          "Nike耐克女子卫衣2021秋季新款保暖加绒圆领上衣透气休闲宽松运动女装套头衫 DJ7666-017 浅绿色",
        productMsgImg: [
          "http://150.158.96.29:8082/my-shop-img/uploadProductMsgImg/a936d7287bff44aa930e5d7fb25f4d75.jpg",
          "http://150.158.96.29:8082/my-shop-img/uploadProductMsgImg/e6ec068175a84e1ea0e109fea733a8bf.jpg",
          "http://150.158.96.29:8082/my-shop-img/uploadProductMsgImg/1ee8681ec7e04985a22a825016e423cd.jpg",
          "http://150.158.96.29:8082/my-shop-img/uploadProductMsgImg/eacfc115cade4e8babc388ee905a30e5.jpg",
          "http://150.158.96.29:8082/my-shop-img/uploadProductMsgImg/658d188ece54409caf3d964cde019d75.jpg",
          "http://150.158.96.29:8082/my-shop-img/uploadProductMsgImg/3d8d98ba7aeb40d6a7b7503304a8fc26.jpg",
          "http://150.158.96.29:8082/my-shop-img/uploadProductMsgImg/1c6118866f9a4f428faaf7031ee005a0.jpg",
        ],
        productName: "Nike耐克女子卫衣",
        productPrice: 356,
        productRotationImg: [
          "http://150.158.96.29:8082/my-shop-img/uploadProductRotationImg/7b1ddf7cb8f543a492af90068d5a71d2.jpg",
          "http://150.158.96.29:8082/my-shop-img/uploadProductRotationImg/3b5fa7ae95294787802d8021cc23feb2.jpg",
          "http://150.158.96.29:8082/my-shop-img/uploadProductRotationImg/979fbb6899ae464d94a4f31236379947.jpg",
          "http://150.158.96.29:8082/my-shop-img/uploadProductRotationImg/26b5e53087cd49f396bcbd6c2a2bfd8a.jpg",
        ],
        productSalesVolume: 10,
        productSellingPrice: 256,
        productStock: 100,
        productType: "女装",
        productSize: ["S", "M", "L", "XL"],
      },
      selectProduct: {
        productId: 0,
        num: 1,
        selectColor: "",
        selectSize: "",
      },
    };
  },
  methods: {
    queryProductById() {
      this.$axios
        .get("http://150.158.96.29:8781/product/queryProductById", {
          params: { productId: 2 },
        })
        .then((val) => {
          this.product = val.data;
          this.selectProduct.productId = val.data.productId;
          console.log(val.data);
        });
    },
    colorBtn(e) {
      this.selectProduct.selectColor = e.target.innerText;
    },
    sizeBtn(e) {
      this.selectProduct.selectSize = e.target.innerText;
    },

    handleChange(value) {
      console.log(value);
    },
    shop() {
      console.log(this.selectProduct);
    },
  },
  mounted() {
    this.queryProductById();
  },
};
</script>

<style scoped>
.el-divider >>> .el-divider__text {
  background-color: rgba(0,0,0,0);
}
.main-right {
  color: #666;
  text-align: left;
}
.main-right > div {
  margin-bottom: 10px;
}
.title {
  color: #000;
  font-size: 1.5rem;
  font-weight: 600;
}
.sellP {
  font-weight: 500;
  font-size: 1.25rem;
}
</style>