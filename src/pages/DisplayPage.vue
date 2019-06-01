<template>
  <v-container class="wrapper">
    <div class="display">
      <display></display>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Display from '../components/display-page/Display.vue';

@Component({
  components: { Display },
})
export default class ReproducirComponent extends Vue {
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Reproducir Filminas',
    });
    this.$store.dispatch('manageSlides/pull');
  };
};
</script>

<style lang="scss">
.wrapper {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-areas: 'display';
  .display {
    grid-area: display;
  }
  .list {
    grid-area: list;
  }
}
</style>
