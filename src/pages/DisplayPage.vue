<template>
  <v-container class="wrapper">
    <div class="display">
      <display></display>
    </div>
    <div class="list">
      <display-list></display-list>
    </div>
  </v-container>
</template>

<script>
import Display from '@/components/display-page/Display.vue';
import DisplayList from '@/components/display-page/DisplayList.vue';

export default {
  name: 'Reproducir',
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Reproducir',
    });
  },
  components: { Display, DisplayList },
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
