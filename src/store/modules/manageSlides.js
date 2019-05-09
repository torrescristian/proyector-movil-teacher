import _ from 'lodash';
import slideService from '../../services/slide.service';

export default {
  namespaced: true,
  state: {
    slides: [],
    activeSlide: {},
  },
  getters: {
    slides(state) {
      return state.slides;
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
      state.activeSlide = _.cloneDeep(slide);
    },
    pull(state, { slides }) {
      state.slides = slides;
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
    async pull({ commit, getters }) {
      const key = getters.activeSlide.image;
      const value = getters.activeSlide;
      if (key && (await slideService.get(key))) {
        await slideService.set(key, value);
      }
      const slides = await slideService.getSlides();
      commit('pull', { slides: Object.values(slides) });
    },
    async delete({ dispatch }, { slide }) {
      await slideService.remove(slide);
      await dispatch('pull');
    },
    async flush({ getters, dispatch }) {
      await slideService.replaceAll(getters.slides);
      await dispatch('pull');
    },
  },
};
