<template>
  <div class="soltNode2">
    <a :href="url">
      <slot name="header"></slot>
    </a>
    <main>
      <slot>{{ main }}</slot>
    </main>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
  },
  data() {
    return {
      main: "main",
    };
  },
  mounted() {
    console.log(this.url);
  },
};
</script>

<style>
</style>