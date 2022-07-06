<template>
  <div class="About">
    <h1>{{ getMsg }}</h1>
    <h1>{{ msg }}</h1>
    <div>{{ storeState.name }}</div>
    <div>{{ storeState.age }}</div>
    <div>{{ storeState.msg }}</div>
    <div>{{ storeState.count }}</div>
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
    <div>
      <button @click="asyncIncrement">异步+</button>
      <button @click="asyncDecrement">异步-</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      msg: "about",
    };
  },
  methods: {
    increment() {
      this.$store.commit("increment", { name: this.msg });
    },
    decrement() {
      this.$store.commit("decrement", { name: this.msg });
    },
    asyncIncrement() {
      this.$store.dispatch("asyncIncrement", { name: this.msg });
    },
    asyncDecrement() {
      this.$store.dispatch("asyncDecrement", { name: this.msg });
    },
  },
  mounted() {
    console.log(this.storeState);
  },
  computed: {
    // storeState() {
    //   return this.$store.state.about;
    // },
    //storeState(别名) , about(store.state.about)
    ...mapState({ storeState: "about" }),
    ...mapGetters({ getMsg: "getMsg" }),
  },
};
</script>

<style>
</style>