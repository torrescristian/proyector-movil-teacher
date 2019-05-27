import Vue from 'vue';
import Router from 'vue-router';
import SharePage from './pages/SharePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'share-page',
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
  ],
});
