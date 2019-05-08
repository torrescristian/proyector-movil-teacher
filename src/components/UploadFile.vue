<template>
  <form enctype="multipart/form-data" @change="uploadFile">
    <input type="file" name="slide">
  </form>
</template>

<script>
import slideService from '../services/slide.service.js';

export default {
  methods: {
    async uploadFile(event) {
      slideService.insertSlide(event);
    },
  },
};
</script>
