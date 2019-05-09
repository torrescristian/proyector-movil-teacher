import slideService from '../../services/slide.service';

export default {
  namespaced: true,
  state: {
    originalSlides: [],
    slides: [],
  },
  getters: {
    get(state) {
      return state.slides;
    },
    getOriginalSlides(state) {
      return state.originalSlides;
    },
  },
  mutations: {
    set(state, { slides }) {
      state.slides = slides;
    },
    pull(state, { slides }) {
      state.slides = slides;
      state.originalSlides = slides;
    },
    delete(state, { key }) {
      state.slides.splice(key, 1);
    },
  },
  actions: {
    set({ commit }, payload) {
      commit('set', payload);
    },
    async pull({ commit }) {
      const slides = await slideService.getSlides();
      commit('pull', { slides: Object.values(slides) });
    },
    async delete({ commit, getters }, payload) {
      const slide = getters.get[payload.key];
      const slides = await slideService.getSlides();
      const key = Object.keys(slides)[payload.key];
      await slideService.remove(key, slide);
      commit('delete', payload);
    },
    async flush({ getters, dispatch }) {
      await slideService.replaceAll({
        oldValues: getters.getOriginalSlides,
        newValues: getters.get,
      });
      await dispatch('pull');
    },
  },
};
