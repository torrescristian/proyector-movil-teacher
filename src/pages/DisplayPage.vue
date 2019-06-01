<template>
  <v-container class="wrapper">
    <div class="display">
      <display></display>
    </div>
  </v-container>
</template>

<script>
import Display from '../components/display-page/Display.vue';

export default {
  name: 'Reproducir',
  async mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Reproducir Filminas',
    });
    await this.$store.dispatch('manageSlides/pull');
  },
  components: { Display },
};
</script>

<style lang="scss">
.wrapper {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-areas: 'display';
  .display {
    grid-area: display;
  }
  .list {
    grid-area: list;
  }
}
</style>
