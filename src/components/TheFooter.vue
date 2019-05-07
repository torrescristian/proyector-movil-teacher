<template>
  <v-footer class="pa-3" fixed>
    <v-spacer></v-spacer>
    <div>Proyector Móvil &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      bottomNav: 0,
    };
  },

  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return 'indigo';
        case 1:
          return 'teal';
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
