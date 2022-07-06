<template>
  <div class="my-top-nav-tag">
    <el-tag
      :key="index"
      v-for="(tag, index) in dynamicTags"
      closable
      :disable-transitions="false"
      @close="myCloseTag(tag)"
      @click="clickTag(tag)"
      :type="routePath === tag ? '' : 'info'"
    >
      {{ tag }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "MyTopNavTag",
  data() {
    return {};
  },
  methods: {
    myCloseTag(tag) {
      this.closeTag(tag);
      if (tag === this.routePath) {
        //（this.dynamicTags.indexOf(tag) - 1） 根据 tag 获取 tag 在this.dynamicTags的下标的下一个元素
        let nextTag = this.dynamicTags[this.dynamicTags.indexOf(tag) - 1];
        //如果不存在下一个路由则不进行跳转
        if (nextTag !== undefined) {
          //路由跳转到下一个元素
          this.$router.push(nextTag);
          //当下一个元素为undefined但是tag栏还存在数据，将回到最后的tag
        } else if (nextTag === undefined && this.dynamicTags.length !== 0) {
          this.$router.push(this.dynamicTags[this.dynamicTags.length - 1]);
        }
      }
    },

    ...mapActions({
      closeTag: "home/closeTag",
    }),
    //根据点击的tag跳转到相应的路由页面
    clickTag(tag) {
      this.$router.push(tag);
    },
  },
  computed: {
    //获取vuex的tag数据
    dynamicTags() {
      return this.home.dynamicTags;
    },
    ...mapState({ home: "home" }),
    routePath() {
      //获取路由
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.el-tag {
  cursor: pointer;
  margin: 0px 5px;
}
</style>