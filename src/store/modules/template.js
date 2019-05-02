export default {
  namespaced: true,
  state: {
    title: 'home',
  },
  getters: {
    title(state) {
      return state.title;
    },
  },
  mutations: {
    setTitle(state, { title }) {
      state.title = title;
    },
  },
  actions: {
    setTitle({ commit }, payload) {
      commit('setTitle', payload);
    },
  },
};
