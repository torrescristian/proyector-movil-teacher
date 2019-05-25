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
import DisplayList from '@/components/manage-slides/DisplayList.vue';
import Display from '@/components/manage-slides/Display.vue';

export default {
  name: 'manageSlides',
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Gestionar Filminas',
    });
  },
  components: { DisplayList, Display },
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
