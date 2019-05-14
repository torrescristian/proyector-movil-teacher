<template>
  <v-app>
    <the-header></the-header>
    <router-view/>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';

export default {
  components: { TheFooter, TheHeader },
};
</script>
