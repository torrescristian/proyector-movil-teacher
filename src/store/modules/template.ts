interface TemplateState {
  title: string,
};


export default {
  namespaced: true,
  state: {
    title: 'home',
  },
  getters: {
    title(state: TemplateState) {
      return state.title;
    },
  },
  mutations: {
    setTitle(state: TemplateState, { title }) {
      state.title = title;
    },
  },
  actions: {
    setTitle({ commit }, payload) {
      commit('setTitle', payload);
    },
  },
};
