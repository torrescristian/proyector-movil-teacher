<template>
  <v-btn color="success" @click="handleButton" :disabled="!slides.length">Guardar Cambios</v-btn>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Slide } from '../../interfaces/slide.interface';

@Component
export default class BtnSaveChangesComponent extends Vue {
  get slides(): Slide[] {
    return this.$store.getters['manageSlides/slides'];
  };

  async handleButton(): Promise<any> {
    await this.$store.dispatch('manageSlides/overrideActiveSlide');
  };
};
</script>
