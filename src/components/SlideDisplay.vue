<template>
  <v-layout row wrap>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex md-6>
          <v-text-field v-model="slide.title" label="Título" @keyup="setTitle"></v-text-field>
        </v-flex>
        <v-flex md-6>
          <v-text-field v-model="slide.description" label="Descripción" @keyup="setDescription"></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-img :src="imgPath" class="grey lighten-2" contain></v-img>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <v-layout row wrap>
        <save-changes></save-changes>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import SaveChanges from './SaveChanges.vue';
import _ from 'lodash';

export default {
  name: 'SlideDisplay',
  computed: {
    slide: {
      get() {
        return _.cloneDeep(this.$store.getters['manageSlides/activeSlide']);
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

