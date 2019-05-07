<template>
  <v-toolbar dark class="grey darken-3">
    <h1>{{ title }}</h1>
  </v-toolbar>
</template>

<script>
export default {
  name: 'TheHeader',
  computed: {
    title() {
      return this.$store.getters['template/title'];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- -->
<style lang="scss"></style> 

