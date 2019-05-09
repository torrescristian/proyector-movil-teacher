<template>
  <v-btn icon>
    <v-icon color="red" @click="deleteItem">delete</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'DeleteItem',
  props: {
    id: Number,
  },
  methods: {
    async deleteItem() {
      const key = this.$props.id;
      await this.$store.dispatch('manageSlides/delete', { key });
    },
  },
};
</script>
