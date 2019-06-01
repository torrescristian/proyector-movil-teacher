<template>
  <form class="form" enctype="multipart/form-data" @change="uploadFile">
    <input ref="file" class="form__input--hidden" type="file" name="slide">
    <v-btn class="form__button" icon @click="add" color="success">
      <v-icon>add</v-icon>
    </v-btn>
  </form>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Slide } from '../../interfaces/slide.interface';
import { SlideService } from '../../services/slide.service';

@Component
export default class BtnUploadFileComponent extends Vue {
  slideService: SlideService;
  $refs: {
    file: HTMLFormElement
  }
  constructor() {
    super();
    this.slideService = new SlideService();
  };
  
  async uploadFile(event): Promise<any> {
    await this.slideService.insertSlide(event);
    await this.$store.dispatch('manageSlides/pull');
  };
  
  add(): void {
    this.$refs.file.click();
  };
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;
  &__input--hidden {
    display: none;
  }
}
</style>
