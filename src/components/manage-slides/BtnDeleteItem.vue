<template>
  <v-btn icon>
    <v-icon color="red" @click="deleteItem">delete</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Slide } from '../../interfaces/slide.interface';

@Component
export default class BtnDeleteItemComponent extends Vue {
  @Prop(Object) readonly slide!: Slide;
  
  async deleteItem(): Promise<any> {
    const slide = this.$props.slide;
    await this.$store.dispatch('manageSlides/delete', { slide });
  };

};
</script>
