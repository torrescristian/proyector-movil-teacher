import slideService from '../../services/slide.service';

export default {
  namespaced: true,
  state: {
    originalSlides: [],
    slides: [],
    activeSlide: {
      image: 'undefined.gif',
    },
  },
  getters: {
    slides(state) {
      return state.slides;
    },
    originalSlides(state) {
      return state.originalSlides;
    },
    activeSlide(state) {
      return state.activeSlide;
    },
  },
  mutations: {
    set(state, { slides }) {
      state.slides = slides;
    },
    setActiveSlide(state, { slide }) {
      state.activeSlide = slide;
    },
    pull(state, { slides }) {
      state.slides = slides;
      state.originalSlides = slides;
      if (state.slides.length > 0) {
        state.activeSlide = slides[0];
      }
    },
    delete(state, { key }) {
      state.slides.splice(key, 1);
      if (state.slides.length > 0) {
        state.activeSlide = slides[0];
      }
    },
  },
  actions: {
    set({ commit }, payload) {
      commit('set', payload);
    },
    setActiveSlide({ commit }, payload) {
      commit('setActiveSlide', payload);
    },
    async pull({ commit }) {
      const slides = await slideService.getSlides();
      commit('pull', { slides: Object.values(slides) });
    },
    async delete({ commit, getters }, payload) {
      const slide = getters.slides[payload.key];
      const slides = await slideService.getSlides();
      const key = Object.keys(slides)[payload.key];
      await slideService.remove(key, slide);
      commit('delete', payload);
    },
    async flush({ getters, dispatch }) {
      await slideService.replaceAll({
        oldValues: getters.originalSlides,
        newValues: getters.slides,
      });
      await dispatch('pull');
    },
  },
};
