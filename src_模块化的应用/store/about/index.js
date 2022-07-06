const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENTTHREE = "INCREMENTTHREE";
const DECREMENTTHREE = "DECREMENTTHREE";


const about = {
  namespaced: true,
  state: {
    count: 0,
    name: "ls",
    age: 19,
    msg: "sdfsdfsdfsdfsdfsdfsdf"
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
    [INCREMENTTHREE](state, payload) {
      // 变更状态
      state.count += payload.count
    },
    [DECREMENTTHREE](state, payload) {
      // 变更状态
      state.count -= payload.count
    }

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

export default about;