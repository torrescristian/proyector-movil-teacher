<template>
  <v-app class="app">
    <the-header></the-header>
    <login-component></login-component>
    <router-view/>
    <the-footer></the-footer>
  </v-app>
</template>

<script lang="ts">
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
import LoginComponent from './components/LoginComponent.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    TheFooter,
    TheHeader,
    LoginComponent,
  },
})
export default class AppComponent extends Vue {
};
</script>

<style lang="scss">
.app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
}
</style>
