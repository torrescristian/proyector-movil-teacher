
<template>
  <draggable v-model="slides" group="image" @change="handleDragAndDrop">
    <template v-for="(slide, index) in slides">
      <v-list-tile :key="index" avatar @click="handleClickActiveSlide(slide)">
        <v-list-tile-avatar>
          <img :src="'/api/slide/' + slide.image">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="slide.title"></v-list-tile-title>
          <v-list-tile-sub-title v-html="slide.description"></v-list-tile-sub-title>
        </v-list-tile-content>
        <v-spacer></v-spacer>
        <btn-delete-item :slide="slide"></btn-delete-item>
      </v-list-tile>
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import BtnDeleteItem from './BtnDeleteItem.vue';

export default {
  name: 'DragAndDrop',
  computed: {
    slides: {
      get() {
        return this.$store.getters['manageSlides/slides'];
      },
      set(newValue) {
        this.$store.dispatch('manageSlides/set', {
          slides: newValue,
        });
      },
    },
  },
  async mounted() {
    await this.$store.dispatch('manageSlides/pull');
  },
  methods: {
    async handleClickActiveSlide(slide) {
      await this.$store.dispatch('manageSlides/setActiveSlide', {
        slide,
      });
    },
    async handleDragAndDrop() {
      await this.$store.dispatch('manageSlides/flush');
    },
  },
  components: {
    draggable,
    BtnDeleteItem,
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
