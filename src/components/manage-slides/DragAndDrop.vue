
<template>
  <draggable v-model="slides" group="image" @change="handleDragAndDrop">
    <template v-for="(slide, index) in slides">
      <v-list-tile :key="index" avatar @click="handleClickSlide(slide)">
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

<script lang="ts">
import draggable from 'vuedraggable';
import BtnDeleteItem from './BtnDeleteItem.vue';
import { Component, Vue } from 'vue-property-decorator';
import { Slide } from '../../interfaces/slide.interface';

@Component({
  components: {
    draggable,
    BtnDeleteItem,
  },
})
export default class DragAndDropComponent extends Vue {
  // properties
  get slides(): Slide[] {
    return this.$store.getters['manageSlides/slides'];
  };
  
  set slides(newValues: Slide[]) {
    this.$store.dispatch('manageSlides/set', {
      slides: newValues,
    });
  };
  
  async handleClickSlide(slide: Slide): Promise<any> {
    await this.$store.dispatch('manageSlides/setActiveSlide', {
      slide,
    });
  };

  async handleDragAndDrop(): Promise<any> {
    await this.$store.dispatch('manageSlides/flush');
  };

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
