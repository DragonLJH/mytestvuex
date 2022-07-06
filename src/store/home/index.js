const CHANGE_COLLAPSE = "CHANGE_COLLAPSE";
const CLOSE_TAG = "CLOSE_TAG";
const ADD_TAG = "ADD_TAG";

const home = {
  namespaced: true,
  state: {
    collapse: false,
    dynamicTags: []
  },
  mutations: {
    //TopNav按钮控制菜单栏展开/关闭
    [CHANGE_COLLAPSE](state) {
      // 变更状态
      state.collapse = !state.collapse
    },
    //可关闭标签
    [CLOSE_TAG](state, tag) {
      //splice根据下标删除一个元素
      //根据传来的tag获取tag在state.dynamicTags的下标
      state.dynamicTags.splice(state.dynamicTags.indexOf(tag), 1);
    },
    //增加标签
    [ADD_TAG](state, tag) {
      state.dynamicTags = [...new Set([...state.dynamicTags, tag])]
    }

  },
  actions: {
    changeCollapse({ commit }) {
      setTimeout(() => {
        commit('CHANGE_COLLAPSE')
      }, 200)
    },
    closeTag({ commit }, tag) {
      setTimeout(() => {
        commit('CLOSE_TAG', tag)
      }, 200)
    },
    addTag({ commit }, tag) {
      setTimeout(() => {
        commit('ADD_TAG', tag)
      }, 200)
    },
  },

}
export default home;