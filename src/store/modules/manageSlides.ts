import cloneDeep from 'lodash.clonedeep';
import { SlideService } from '../../services/slide.service';
import { Slide } from '../../interfaces/slide.interface';
import { VuexStore } from '../../interfaces/vuex-store.interface';
import { ManageSlideState } from '../../interfaces/manage-slide-state.interface';

const slideService = new SlideService();

interface Context {
  getters: ManageSlideState, 
  dispatch: Function,
  commit: Function,
}

export const manageSlides: VuexStore = {
  namespaced: true,
  state: {
    slides: [],
    activeSlide: {} as Slide,
    displayedImageIndex: 0,
  },
  getters: {
    displayedImageIndex(state: ManageSlideState): number {
      return state.displayedImageIndex;
    },
    slides(state: ManageSlideState): Slide[] {
      return state.slides;
    },
    activeSlide(state: ManageSlideState): Slide {
      return state.activeSlide;
    },
  },
  mutations: {
    set(state: ManageSlideState, { slides }) {
      state.slides = slides;
    },
    setActiveSlide(state: ManageSlideState, { slide }) {
      state.activeSlide = cloneDeep(slide);
    },
    setDisplayedImageIndex(state: ManageSlideState, { index }) {
      state.displayedImageIndex = index;
    },
    pull(state: ManageSlideState, { slides }) {
      state.slides = slides;
      if (state.slides.length > 0) {
        state.activeSlide = cloneDeep(slides[0]);
      }
    },
  },
  actions: {
    set({ commit }: Context, payload): void {
      commit('set', payload);
    },
    setActiveSlide({ commit }: Context, payload): void {
      commit('setActiveSlide', payload);
    },
    setDisplayedImageIndex({ commit }: Context, payload): void {
      commit('setDisplayedImageIndex', payload);
    },
    async overrideActiveSlide({ getters, dispatch }: Context): Promise<any> {
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
    async pull({ commit }: Context): Promise<any> {
      const slides: Slide[] = await slideService.getSlides();
      const sortedSlides = Object.values(slides).sort((a: Slide, b: Slide) => {
        return a.order > b.order ? 1 : -1;
      });
      commit('pull', { slides: sortedSlides });
    },
    async delete({ dispatch }: Context, { slide }: { slide: Slide }): Promise<any> {
      await slideService.remove(slide);
      await dispatch('pull');
    },
    async flush({ getters, dispatch }: Context): Promise<any> {
      await slideService.replaceAll(getters.slides);
      await dispatch('pull');
    },
  },
};
