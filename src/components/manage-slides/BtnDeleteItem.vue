<template>
  <v-btn icon>
    <v-icon color="red" @click="deleteItem">delete</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'BtnDeleteItem',
  props: {
    slide: Object,
  },
  methods: {
    async deleteItem() {
      const slide = this.$props.slide;
      await this.$store.dispatch('manageSlides/delete', { slide });
    },
  },
};
</script>
