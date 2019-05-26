<template>
  <form class="form" enctype="multipart/form-data" @change="uploadFile">
    <input ref="file" class="form__input--hidden" type="file" name="slide">
    <v-btn class="form__button" icon @click="add" color="success">
      <v-icon>add</v-icon>
    </v-btn>
  </form>
</template>

<script>
import slideService from '@/services/slide.service.js';

export default {
  methods: {
    async uploadFile(event) {
      await slideService.insertSlide(event);
      await this.$store.dispatch('manageSlides/pull');
    },
    add(event) {
      this.$refs.file.click();
    },
  },
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
