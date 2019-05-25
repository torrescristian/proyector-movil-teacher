<template>
  <div class="wrapper">
    <div class="col">
      <h3>Exportar el proyecto para guardar los cambios, trabajar en otro proyecto y volver a usarlo cuando se necesite.</h3>
      <div class="col__actions">
        <btn-export></btn-export>
      </div>
    </div>
    <div class="col">
      <h3>
        Al importar otro proyecto
        <span class="col__text--danger">el actual se eliminará</span>.
        <br>
        <br>Primero debe
        <span class="col__text--highlighted">exportarlo</span> si desea seguir usándolo en futuras ocasiones.
      </h3>
      <div class="col__actions">
        <btn-import></btn-import>
      </div>
    </div>
  </div>
</template>

<script>
import BtnExport from '@/components/import-export/BtnExport.vue';
import BtnImport from '@/components/import-export/BtnImport.vue';

export default {
  name: 'ImportView',
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Importar / Exportar Proyecto',
    });
  },
  components: {
    BtnExport,
    BtnImport,
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
    grid-template-rows: 1fr 4fr;
    grid-gap: 1rem;
    padding: 2rem;
    border: 1px solid black;
    &__text {
      &--highlighted {
        text-decoration: underline;
      }
      &--danger {
        color: red;
      }
    }
    &__actions {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
