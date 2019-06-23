import Vue from 'vue';
import Router, { RouterMode, RouteConfig }  from 'vue-router';
import SharePage from './pages/SharePage.vue';

Vue.use(Router);

const mode: RouterMode = 'history';
const base: string =  process.env.BASE_URL;
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'share-page',
    component: SharePage,
  },
  {
    path: '/profesor',
    name: 'share-page-teacher',
    component: SharePage,
  },
  {
    path: '/reproducir',
    name: 'display-page',
    component: () =>
      import(
        /* webpackChunkName: "display-page" */ './pages/DisplayPage.vue'
      ),
  },
  {
    path: '/gestionar-filminas',
    name: 'manage-slides-page',
    component: () =>
      import(
        /* webpackChunkName: "manage-slides-page" */ './pages/ManageSlidesPage.vue'
      ),
  },
  {
    path: '/importar-exportar-proyecto',
    name: 'import-export-page',
    component: () =>
      import(
        /* webpackChunkName: "import-export-page" */ './pages/ImportExportPage.vue'
      ),
  },
  {
    path: '/analitica',
    name: 'analytics-page',
    component: () =>
      import(
        /* webpackChunkName: "analytics-page" */ './pages/AnalyticsPage.vue'
      ),
  },
]; 

export default new Router({
  mode,
  base,
  routes,
});
