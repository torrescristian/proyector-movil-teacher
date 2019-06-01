<template>
  <nav class="nav">
    <h1>{{ title }}</h1>
    <div class="nav__router">
      <router-link to="/" class="nav__link">
        <v-icon class="nav__icon">share</v-icon>
        <span class="nav__text"> Compartir Aplicación</span>
      </router-link>
      <router-link to="/reproducir" class="nav__link">
        <v-icon class="nav__icon">ondemand_video</v-icon>
        <span class="nav__text"> Reproducir Filminas</span>
      </router-link>
      <router-link to="/gestionar-filminas" class="nav__link">
        <v-icon class="nav__icon">settings</v-icon>
        <span class="nav__text"> Gestionar Filminas</span>
      </router-link>
      <router-link to="/importar-exportar-proyecto" class="nav__link">
        <v-icon class="nav__icon">move_to_inbox</v-icon>
        <span class="nav__text"> Importar / Exportar Proyecto</span>
      </router-link>
      <router-link to="/analitica" class="nav__link">
        <v-icon class="nav__icon">timeline</v-icon>
        <span class="nav__text"> Analítica</span>
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheHeaderComponent extends Vue {
  get title() {
    return this.$store.getters['template/title'];
  }
};
</script>

<style lang="scss" scope>
.nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  &__router {
    display: flex;
    justify-content: space-around;
    align-content: center;
  }
  &__link {
    padding: 0 2rem;
    text-decoration: none;
    color: gray;
  }
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .nav {
    &__link {
      padding: 1rem;
    }
    &__text {
      display: none;
    }
  }
}
</style> 
