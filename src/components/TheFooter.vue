<template>
  <v-card>
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      absolute
      dark
      shift
      id="v-card"
    >
      <v-btn dark @click="redirect('/')">
        <span>Reproducir Filminas</span>
        <v-icon>ondemand_video</v-icon>
      </v-btn>

      <v-btn dark @click="redirect('/gestionar-filminas')">
        <span>Gestionar Filminas</span>
        <v-icon>settings</v-icon>
      </v-btn>

      <v-btn dark @click="redirect('/importar-exportar-proyecto')">
        <span>Importar / Exportar Proyecto</span>
        <v-icon>move_to_inbox</v-icon>
      </v-btn>

      <v-btn dark @click="redirect('/analitica')">
        <span>Analítica</span>
        <v-icon>timeline</v-icon>
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
          return 'blue-grey';
        case 1:
          return 'teal';
        case 2:
          return 'brown';
        case 3:
          return 'indigo';
      }
    },
  },
  methods: {
    redirect(page) {
      this.$router.push(page);
    },
  },
};
</script>

<style lang="scss" scoped>
#v-card {
  position: fixed;
}
</style>
