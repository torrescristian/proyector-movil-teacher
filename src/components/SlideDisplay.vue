<template>
  <v-layout row wrap>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex md-6>
          <v-text-field v-model="slide.title" label="Título"></v-text-field>
        </v-flex>
        <v-flex md-6>
          <v-text-field v-model="slide.description" label="Descripción"></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-img :src="'/api/slide/' + slide.image" class="grey lighten-2" contain></v-img>
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

export default {
  name: 'SlideDisplay',
  computed: {
    slide: {
      get() {
        return this.$store.getters['manageSlides/activeSlide'];
      },
      set(newValue) {
        return this.$store.dispatch('manageSlides/setActiveSlide', {
          slide: newValue,
        });
      },
    },
  },
  components: {
    SaveChanges,
  },
};
</script>

