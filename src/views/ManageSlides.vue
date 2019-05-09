<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex md2></v-flex>
        <v-flex md6>
          <slide-display></slide-display>
        </v-flex>
        <v-flex md4>
          <slide-list></slide-list>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import SlideList from '../components/SlideList.vue';
import SlideDisplay from '../components/SlideDisplay.vue';

export default {
  name: 'manageSlides',
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Gestionar Filminas',
    });
  },
  components: { SlideList, SlideDisplay },
};
</script>

