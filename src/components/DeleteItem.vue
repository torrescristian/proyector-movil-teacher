<template>
  <v-btn icon>
    <v-icon color="red" @click="deleteItem">delete</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'DeleteItem',
  props: {
    id: String,
  },
  methods: {
    deleteItem() {
      console.log(this.$props.id);
    },
  },
};
</script>
