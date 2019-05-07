<template>
  <v-app>
    <the-header></the-header>
    <the-nav></the-nav>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
import TheNav from '@/components/TheNav.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';

export default {
  components: { TheNav, TheFooter, TheHeader },
};
</script>
