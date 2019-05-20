<template>
  <v-btn color="success" @click="handleButton" :disabled="!slides.length">Guardar Cambios</v-btn>
</template>

<script>
export default {
  name: 'SaveChanges',
  computed: {
    slides: {
      get() {
        return this.$store.getters['manageSlides/slides'];
      },
    },
  },
  methods: {
    async handleButton() {
      await this.$store.dispatch('manageSlides/overrideActiveSlide');
    },
  },
};
</script>
