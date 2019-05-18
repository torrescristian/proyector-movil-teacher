<template>
  <div class="wrapper">
    <div class="col">
      <p>Exportar el proyecto para guardar los cambios, trabajar en otro proyecto y volver a usarlo cuando se necesite</p>
      <div class="col__actions">
        <export-btn></export-btn>
      </div>
    </div>
    <div class="col">
      <p>
        Al importar otro proyecto el actual se eliminará.
        <br>Primero debe
        <span class="col__text--highlighted">exportarlo</span> si desea seguir usándolo en futuras ocasiones.
      </p>
      <div class="col__actions">
        <import-btn></import-btn>
      </div>
    </div>
  </div>
</template>

<script>
import ExportBtn from '../components/import-export/ExportBtn.vue';
import ImportBtn from '../components/import-export/ImportBtn.vue';

export default {
  name: 'ImportView',
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Importar / Exportar Proyecto',
    });
  },
  components: {
    ExportBtn,
    ImportBtn,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  text-align: center;
  .col {
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-gap: 1rem;
    padding: 2rem;
    border: 1px solid black;
    &__text--highlighted {
      text-decoration: underline;
    }
    &__actions {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
