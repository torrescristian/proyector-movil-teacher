<template>
  <v-card height="200px">
    <v-bottom-nav :active.sync="bottomNav" :color="color" :value="true" absolute>
      <v-btn>
        <span>Filminas</span>
        <v-icon>slideshow</v-icon>
      </v-btn>

      <v-btn>
        <span>Compartir</span>
        <v-icon>share</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
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
