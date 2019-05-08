<template>
  <v-btn color="success" @click="handleButton">Guardar Cambios</v-btn>
</template>

<script>
export default {
  name: 'SaveChanges',
  methods: {
    async handleButton() {
      await this.$store.dispatch('manageSlides/flush');
    },
  },
};
</script>
