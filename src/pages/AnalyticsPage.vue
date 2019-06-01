<template>
  <v-container grid-list-md>
    <div>4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. At dignissimos reprehenderit fuga voluptatibus dolores magni voluptate aspernatur, repellat ipsum. Itaque cupiditate repudiandae illum rerum assumenda temporibus recusandae. Excepturi, consequuntur labore.</div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AnalyticsComponent extends Vue {
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Analítica',
    });
  };
};
</script>

