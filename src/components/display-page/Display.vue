<template>
  <v-container class="wrapper">
    <v-img :src="imgPath" class="grey lighten-2" contain></v-img>
  </v-container>
</template>

<script>

import cloneDeep from 'lodash.clonedeep';

export default {
  name: 'Display',
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
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  
}
</style>
