import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/gestionar-filminas',
      name: 'manage-slides',
      component: () =>
        import(
          /* webpackChunkName: "manage-slides" */ './views/ManageSlides.vue'
        ),
    },
    {
      path: '/importar-exportar-proyecto',
      name: 'import-export',
      component: () =>
        import(
          /* webpackChunkName: "import-export" */ './views/ImportExport.vue'
        ),
    },
    {
      path: '/analitica',
      name: 'analitica',
      component: () =>
        import(
          /* webpackChunkName: "manage-slides" */ './views/AnalyticsView.vue'
        ),
    },
  ],
});
