<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ storeState.name }}</div>
    <div>{{ storeState.age }}</div>
    <div>{{ storeState.msg }}</div>
    <div>{{ storeState.count }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  computed: {
    ...mapState({ storeState: "home" }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
