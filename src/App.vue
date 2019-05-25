<template>
  <v-app>
    <the-header></the-header>
    <login-component></login-component>
    <router-view/>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import LoginComponent from '@/components/LoginComponent.vue';

export default {
  components: { TheFooter, TheHeader, LoginComponent },
};
</script>
