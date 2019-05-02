<template>
  <div class="header">
    <h1>{{ title }}</h1>
  </div>
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

