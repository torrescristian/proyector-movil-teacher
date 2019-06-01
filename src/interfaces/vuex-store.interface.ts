import { ManageSlideState } from './manage-slide-state.interface';

export interface VuexStore {
    namespaced: boolean,
    state: ManageSlideState,
    getters: object,
    mutations: object,
    actions: object,
}