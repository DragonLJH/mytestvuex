const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const home = {
  namespaced: true,
  state: {
    count: 0,
    name: "zs",
    age: 18,
    msg: "asdasdasdasdasdasdasd"
  },
  mutations: {
    [INCREMENT](state) {
      // 变更状态
      state.count++
    },
    [DECREMENT](state) {
      // 变更状态
      state.count--
    },

  },
  actions: {
    asyncIncrement({ commit }) {
      setTimeout(() => {
        commit('INCREMENT')
      }, 3000)
    },
    asyncDecrement({ commit }) {
      setTimeout(() => {
        commit('DECREMENT')
      }, 3000)
    },
  },

}
export default home;