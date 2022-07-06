<template>
  <el-menu-item :index="childrenItem.path" :route="childrenItem.path">{{
    childrenItem.meta.title
  }}</el-menu-item>
</template>

<script>
export default {
  name: "MyMenuItem",
  props: {
    childrenItem: Object,
  },
};
</script>

<style>
</style>