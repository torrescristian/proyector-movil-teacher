import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { TemplateModule } from './modules/template';
import { ManageSlidesModule } from './modules/manageSlides';
import { AnalyticsModule } from './modules/analytics';
import { RootState } from '../interfaces/root-state.interface';
Vue.use(Vuex);

export default new Store<RootState>({
  strict: true,
  modules: {
    template: TemplateModule,
    manageSlides: ManageSlidesModule,
    analytics: AnalyticsModule,
  },
});
