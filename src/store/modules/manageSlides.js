import slideService from '../../services/slide.service';

export default {
  namespaced: true,
  state: {
    slides: [],
  },
  getters: {
    slides(state) {
      return state.slides;
    },
  },
  mutations: {
    setSlides(state, { slides }) {
      state.slides = slides;
    },
  },
  actions: {
    setSlides({ commit }, payload) {
      commit('setSlides', payload);
    },
    async pull({ commit }) {
      const slides = await slideService.getSlides();
      commit('setSlides', { slides: Object.values(slides) });
    },
  },
};
