import { Module } from 'vuex';
import { RootState } from '../../interfaces/root-state.interface';

interface AnalyticsState {
  maxAmountOfStudents: number,
};

interface AnalyticsModulePayload {
  maxAmountOfStudents?: number,
}

export const AnalyticsModule:  Module<AnalyticsState, RootState> = {
  namespaced: true,
  state: {
    maxAmountOfStudents: 0,
  },
  getters: {
    maxAmountOfStudents(state) {
      return state.maxAmountOfStudents;
    },
  },
  mutations: {
    setMaxAmountOfStudents(state, { maxAmountOfStudents }) {
      state.maxAmountOfStudents = maxAmountOfStudents;
    },
  },
  actions: {
    setMaxAmountOfStudents({ commit }, payload: AnalyticsModulePayload) {
      commit('setMaxAmountOfStudents', payload);
    },
  },
};
