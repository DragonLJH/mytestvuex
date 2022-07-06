import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home: {
      count: 0,
      name: "zs",
      age: 18,
      msg: "asdasdasdasdasdasdasd"
    },
    about: {
      count: 0,
      name: "ls",
      age: 19,
      msg: "sdfsdfsdfsdfsdfsdfsdf"
    }

  },
  getters: {
    getMsg(state) {
      return `hello !!! `
    }
  },

  mutations: {
    increment(state, payload) {
      // 变更状态
      state[payload.name].count++
    },
    decrement(state, payload) {
      // 变更状态
      state[payload.name].count--
    },

  },
  actions: {
    asyncIncrement({ commit }, payload) {
      setTimeout(() => {
        commit('increment', payload)
      }, 3000)
    },
    asyncDecrement({ commit }, payload) {
      setTimeout(() => {
        commit('decrement', payload)
      }, 3000)
    },

  }
})
