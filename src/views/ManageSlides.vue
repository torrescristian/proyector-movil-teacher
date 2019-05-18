<template>
  <v-container class="wrapper">
    <div class="display">
      <slide-display></slide-display>
    </div>
    <div class="list">
      <slide-list></slide-list>
    </div>
  </v-container>
</template>

<script>
import SlideList from '../components/SlideList.vue';
import SlideDisplay from '../components/SlideDisplay.vue';

export default {
  name: 'manageSlides',
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Gestionar Filminas',
    });
  },
  components: { SlideList, SlideDisplay },
};
</script>

<style lang="scss">
.wrapper {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: 'display list';
  .display {
    grid-area: display;
  }
  .list {
    grid-area: list;
  }
}
</style>
