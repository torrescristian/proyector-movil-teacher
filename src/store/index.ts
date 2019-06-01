import Vue from 'vue';
import Vuex from 'vuex';
import template from './modules/template';
import { manageSlides } from './modules/manageSlides';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    template,
    manageSlides: manageSlides as any,
  },
});
