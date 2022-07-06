<template>
  <div class="About">
    <h1>{{ msg }}</h1>
    <div>{{ storeState.name }}</div>
    <div>{{ storeState.age }}</div>
    <div>{{ storeState.msg }}</div>
    <div>{{ storeState.count }}</div>
    <div>
      <button @click="INCREMENT">+</button>
      <button @click="DECREMENT">-</button>
    </div>
    <div>
      <button @click="INCREMENTTHREE({ count: 3 })">+3</button>
      <button @click="DECREMENTTHREE({ count: 3 })">-3</button>
    </div>
    <div>
      <button @click="asyncIncrement">异步+</button>
      <button @click="asyncDecrement">异步-</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "about",
    };
  },
  methods: {
    //mapMutations存放在methods中
    //调用模块化的方法带上模块化的名称（模块化名称/方法名称）
    ...mapMutations({
      INCREMENT: "about/INCREMENT",
      DECREMENT: "about/DECREMENT",
      INCREMENTTHREE: "about/INCREMENTTHREE",
      DECREMENTTHREE: "about/DECREMENTTHREE",
    }),

    ...mapActions({
      asyncIncrement: "about/asyncIncrement",
      asyncDecrement: "about/asyncDecrement",
    }),
  },
  mounted() {
    console.log(this.storeState);
  },
  computed: {
    //属性存放在电脑缓存中
    ...mapState({ storeState: "about" }),
  },
};
</script>

<style>
</style>