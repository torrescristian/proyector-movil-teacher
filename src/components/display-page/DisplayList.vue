<template>
  <v-card>
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Filminas</v-toolbar-title>
    </v-toolbar>
    <v-list>
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
        </v-list-tile>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'DisplayList',
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
  },
  methods: {
    handleClickActiveSlide(slide) {},
  },
};
</script>
