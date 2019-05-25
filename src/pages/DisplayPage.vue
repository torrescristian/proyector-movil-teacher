<template>
  <v-container grid-list-md>
    <div>2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. At dignissimos reprehenderit fuga voluptatibus dolores magni voluptate aspernatur, repellat ipsum. Itaque cupiditate repudiandae illum rerum assumenda temporibus recusandae. Excepturi, consequuntur labore.</div>
  </v-container>
</template>

<script>
export default {
  name: 'Reproducir',
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Reproducir',
    });
  },
};
</script>

