<template >
  <el-menu-item
    v-if="!route.hidden && hasMultiple"
    :index="route.children[0].path"
    :route="route.children[0].path"
  >
    <i :class="route.children[0].meta.icon"></i>
    <span slot="title">{{ route.children[0].meta.title }}</span>
  </el-menu-item>

  <el-submenu
    v-else-if="!route.hidden"
    :index="route.path"
    :popper-append-to-body="false"
  >
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>{{ route.name }}</span>
    </template>
    <MyMenuItem
      v-for="(item, index) in route.children"
      :key="index"
      :childrenItem="item"
    />
  </el-submenu>
</template>

<script>
import MyMenuItem from "./MyMenuItem.vue";
export default {
  name: "SidebarItem",
  components: {
    MyMenuItem,
  },
  props: {
    route: Object,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  computed: {
    hasMultiple() {
      return this.route.children.length > 1 ? false : true;
    },
  },
};
</script>

<style>
</style>