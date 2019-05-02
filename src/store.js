import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    title: "home"
  },
  getters: {
    title(state) {
      return state.title;
    }
  },
  mutations: {
    setTitle(state, { title }) {
      state.title = title;
    }
  },
  actions: {
    // setTitle(context, payload)
    setTitle({ commit }, { title }) {
      commit.dispatch("setTitle", { title });
    }
  }
});
