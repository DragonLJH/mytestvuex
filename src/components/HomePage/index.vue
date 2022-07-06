<template>
  <div class="HomePage">
    <div class="carouselStyle">
      <Carousel />
    </div>
    <div v-for="(emerge, index) in emerges" :key="index" class="cardMsg">
      <CardMsg :emerge="emerge" />
    </div>
  </div>
</template>

<script>
import Carousel from "./carousel";
import CardMsg from "./cardMsg";
export default {
  components: { Carousel, CardMsg },
  name: "HomePage",
  data() {
    return {
      emerges: [],
    };
  },
  methods: {
    queryAllEmerge() {
      this.$axios
        .get("http://150.158.96.29:8781/emerge/queryAllEmerge")
        .then((res) => {
          this.emerges = res.data;
        });
    },
  },
  mounted() {
    this.queryAllEmerge();
  },
};
</script>

<style scoped>
</style>
