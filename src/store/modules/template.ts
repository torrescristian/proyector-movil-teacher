import { Module } from 'vuex';
import { RootState } from '../../interfaces/root-state.interface';

interface TemplateState {
  title: string,
};

interface TemplatePayload {
  title?: string,
};

export const TemplateModule: Module<TemplateState, RootState> = {
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
    setTitle(state: TemplateState, { title }: TemplatePayload) {
      state.title = title;
    },
  },
  actions: {
    setTitle({ commit }, payload: TemplatePayload) {
      commit('setTitle', payload);
    },
  },
};
