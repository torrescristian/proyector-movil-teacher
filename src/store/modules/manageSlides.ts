import cloneDeep from 'lodash.clonedeep';
import { Module } from 'vuex';
import { SlideService } from '../../services/slide.service';
import { Slide } from '../../interfaces/slide.interface';
import { RootState } from '../../interfaces/root-state.interface';

const slideService = new SlideService();
interface ManageSlideState {
  slides: Slide[];
  activeSlide: Slide;
  displayedImageIndex: number;
};

interface ManageSlidePayload {
  slide?: Slide,
  slides?: Slide[],
  index?: number,
}

export const ManageSlidesModule: Module<ManageSlideState, RootState> = {
  namespaced: true,
  
  state: {
    slides: [],
    activeSlide: {} as Slide,
    displayedImageIndex: 0,
  },
  
  getters: {
    displayedImageIndex(state): number {
      return state.displayedImageIndex;
    },
    slides(state): Slide[] {
      return state.slides;
    },
    activeSlide(state): Slide {
      return state.activeSlide;
    },
  },

  mutations: {
    set(state: ManageSlideState, { slides }: ManageSlidePayload) {
      state.slides = slides;
    },
    setActiveSlide(state: ManageSlideState, { slide }: ManageSlidePayload) {
      state.activeSlide = cloneDeep(slide);
    },
    setDisplayedImageIndex(state: ManageSlideState, { index }: ManageSlidePayload) {
      state.displayedImageIndex = index;
    },
    pull(state: ManageSlideState, { slides }: ManageSlidePayload) {
      state.slides = slides;
      if (state.slides.length > 0) {
        state.activeSlide = cloneDeep(slides[0]);
      }
    },
  },

  actions: {
    set({ commit }, payload: ManageSlidePayload): void {
      commit('set', payload);
    },
    setActiveSlide({ commit }, payload: ManageSlidePayload): void {
      commit('setActiveSlide', payload);
    },
    setDisplayedImageIndex({ commit }, payload: ManageSlidePayload): void {
      commit('setDisplayedImageIndex', payload);
    },
    async overrideActiveSlide({ getters, dispatch }): Promise<any> {
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
    async pull({ commit }): Promise<any> {
      const slides: Slide[] = await slideService.getSlides();
      const sortedSlides = Object.values(slides).sort((prev: Slide, next: Slide) => {
        return prev.order > next.order ? 1 : -1;
      });
      commit('pull', { slides: sortedSlides });
    },
    async delete({ dispatch }, { slide }: ManageSlidePayload): Promise<any> {
      await slideService.remove(slide);
      await dispatch('pull');
    },
    async flush({ getters, dispatch }): Promise<any> {
      await slideService.replaceAll(getters.slides);
      await dispatch('pull');
    },
  },

};
