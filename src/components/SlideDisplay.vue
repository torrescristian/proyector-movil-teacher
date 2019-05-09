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
    imgPath() {
      return this.slide.image
        ? '/api/slide/' + this.slide.image
        : 'default.gif';
    },
  },
  components: {
    SaveChanges,
  },
  methods: {
    setTitle(event) {
      const slide = {
        title: event.target.value,
        description: this.slide.description,
        image: this.slide.image,
      };
      this.$store.dispatch('manageSlides/setActiveSlide', {
        slide,
      });
    },
    setDescription(event) {
      const slide = {
        title: this.slide.title,
        description: event.target.value,
        image: this.slide.image,
      };
      this.$store.dispatch('manageSlides/setActiveSlide', {
        slide,
      });
    },
  },
};
</script>

