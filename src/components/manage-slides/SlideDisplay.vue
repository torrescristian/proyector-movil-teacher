<template>
  <v-container class="wrapper">
    <div class="title">
      <v-text-field
        v-model="slide.title"
        label="Título"
        @keyup="setTitle"
        :disabled="!slides.length"
      ></v-text-field>
    </div>
    <div class="description">
      <v-text-field
        v-model="slide.description"
        label="Descripción"
        @keyup="setDescription"
        :disabled="!slides.length"
      ></v-text-field>
    </div>
    <div class="save">
      <save-changes></save-changes>
    </div>
    <div class="player">
      <v-img :src="imgPath" class="grey lighten-2" contain></v-img>
    </div>
  </v-container>
</template>

<script>
import SaveChanges from './SaveChanges.vue';
import cloneDeep from 'lodash.clonedeep';

export default {
  name: 'SlideDisplay',
  computed: {
    slide: {
      get() {
        return cloneDeep(this.$store.getters['manageSlides/activeSlide']);
      },
    },
    slides: {
      get() {
        return this.$store.getters['manageSlides/slides'];
      },
    },
    imgPath() {
      return this.slide.image && this.slides.length
        ? '/api/slide/' + this.slide.image
        : 'default.gif';
    },
  },
  components: {
    SaveChanges,
  },
  methods: {
    async setTitle(event) {
      const slide = {
        title: event.target.value,
        description: this.slide.description,
        image: this.slide.image,
      };
      await this.$store.dispatch('manageSlides/setActiveSlide', {
        slide,
      });
    },
    async setDescription(event) {
      const slide = {
        title: this.slide.title,
        description: event.target.value,
        image: this.slide.image,
      };
      await this.$store.dispatch('manageSlides/setActiveSlide', {
        slide,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'title  description'
    'save   save'
    'player player';
  .title {
    grid-area: title;
  }
  .description {
    grid-area: description;
  }
  .player {
    grid-area: player;
  }
  .save {
    grid-area: save;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
