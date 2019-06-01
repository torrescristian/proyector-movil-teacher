<template>
  <v-container class="display">
    <div class="display__title">
      <v-text-field
        v-model="slide.title"
        label="Título"
        @keyup="setTitle"
        :disabled="!slides.length"
      ></v-text-field>
    </div>
    <div class="display__description">
      <v-text-field
        v-model="slide.description"
        label="Descripción"
        @keyup="setDescription"
        :disabled="!slides.length"
      ></v-text-field>
    </div>
    <div class="display__save-button">
      <btn-save-changes></btn-save-changes>
    </div>
    <div class="display__img-container">
      <img :src="imgPath" class="display__img"/>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BtnSaveChanges from './BtnSaveChanges.vue';
import cloneDeep from 'lodash.clonedeep';
import { Slide } from '../../interfaces/slide.interface';

@Component({
  components: {
    BtnSaveChanges,
  }
})
export default class DisplayComponent extends Vue {

  // properties
  get slide(): Slide {
    return cloneDeep(this.$store.getters['manageSlides/activeSlide']);
  };

  get slides(): Slide[] {
    return this.$store.getters['manageSlides/slides'];
  };
  
  get imgPath(): string {
    return this.slide.image && this.slides.length
      ? '/api/slide/' + this.slide.image
      : 'default.gif';
  };

  // methods
  async setTitle(event): Promise<any> {
    const slide: Slide = {
      title: event.target.value,
      description: this.slide.description,
      image: this.slide.image,
      order: undefined,
    };
    await this.$store.dispatch('manageSlides/setActiveSlide', {
      slide,
    });
  };
  
  async setDescription(event): Promise<any> {
    const slide: Slide = {
      title: this.slide.title,
      description: event.target.value,
      image: this.slide.image,
      order: undefined,
    };
    await this.$store.dispatch('manageSlides/setActiveSlide', {
      slide,
    });
  };
};
</script>

<style lang="scss" scoped>
.display {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'title  description'
    'save   save'
    'player player';
  &__title {
    grid-area: title;
  }
  &__description {
    grid-area: description;
  }
  &__img {
    height: 50vh;
    &-container {
      grid-area: player;
      display: flex;
      justify-content: center;
    }
  }
  &__save-button {
    grid-area: save;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
