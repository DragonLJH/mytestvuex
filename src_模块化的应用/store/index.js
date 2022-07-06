import Vue from 'vue'
import Vuex from 'vuex'
import home from './home/index'
import about from './about/index'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    about: about,
    home: home,
  }
})

export default store