import cloneDeep from 'lodash.clonedeep';
import slideService from '@/services/slide.service';

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
      state.activeSlide = cloneDeep(slide);
    },
    pull(state, { slides }) {
      state.slides = slides;
      if (state.slides.length > 0) {
        state.activeSlide = cloneDeep(slides[0]);
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
    async overrideActiveSlide({ getters, dispatch }) {
      const { title, description, image } = getters.activeSlide;
      const [slide] = getters.slides.filter((s) => s.image === image);
      if (image && (await slideService.get(image))) {
        await slideService.set(image, {
          title,
          description,
          image,
          order: slide.order,
        });
      }
      dispatch('pull');
    },
    async pull({ commit }) {
      const slides = await slideService.getSlides();
      const sortedSlides = Object.values(slides).sort((a, b) => {
        return a.order > b.order ? 1 : -1;
      });
      commit('pull', { slides: sortedSlides });
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
