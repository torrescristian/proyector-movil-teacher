<template>
  <v-container class="manage-slides">
    <div class="manage-slides__display">
      <display></display>
    </div>
    <div class="manage-slides__list">
      <display-list></display-list>
    </div>
  </v-container>
</template>

<script>
import DisplayList from '@/components/manage-slides/DisplayList.vue';
import Display from '@/components/manage-slides/Display.vue';

export default {
  name: 'manageSlides',
  async mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Gestionar Filminas',
    });
    await this.$store.dispatch('manageSlides/pull');
  },
  components: { DisplayList, Display },
};
</script>

<style lang="scss">
.manage-slides {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: 'display list';
  &__display {
    grid-area: display;
  }
  &__list {
    grid-area: list;
  }
}
</style>
