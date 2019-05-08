
<template>
  <draggable v-model="slides" group="image">
    <template v-for="slide in slides">
      <v-list-tile :key="slide.image" avatar>
        <v-list-tile-avatar>
          <img :src="'/api/slide/' + slide.image">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="slide.title"></v-list-tile-title>
          <v-list-tile-sub-title v-html="slide.description"></v-list-tile-sub-title>
        </v-list-tile-content>
        <v-spacer></v-spacer>
        <delete-item :id="slide.image"></delete-item>
      </v-list-tile>
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import DeleteItem from './DeleteItem.vue';

export default {
  name: 'DragAndDrop',
  computed: {
    slides() {
      return this.$store.getters['manageSlides/slides'];
    },
  },
  async mounted() {
    await this.$store.dispatch('manageSlides/pull');
  },
  components: {
    draggable,
    DeleteItem,
  },
};
</script>

<style lang="scss" scoped>
.item {
  background-color: #333;
  color: white;
  text-align: center;
  margin: 1rem;
  padding: 0.5rem;
}
</style>
