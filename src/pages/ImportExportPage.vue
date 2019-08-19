<template>
  <div class="wrapper">
    <div class="export col">
      <div class="export__text">
        <p>
          <strong>Exportar el proyecto para:</strong> 
          <br> - Importar otro proyecto
          <br> - Crear otro proyecto
          <br> - Exportar cambios del proyecto actual
        </p>
      </div>
      <div class="export__actions">
        <btn-export></btn-export>
      </div>
    </div>
    <div class="import col">
      <div class="import__actions">
        <btn-import></btn-import>
      </div>
      <p>
        <span class="import__text--danger">CUIDADO:</span> Al importar otro proyecto
        el actual <span class="import__text--danger">se eliminará</span>.
        <br/>
        <br/>👈 Primero debería
        <span class="import__text--highlighted">exportarlo</span>
        <br/> 
        <br/> si desea volver a usarlo en futuras ocasiones.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BtnExport from '@/components/import-export/BtnExport.vue';
import BtnImport from '@/components/import-export/BtnImport.vue';

@Component({
  components: {
    BtnExport,
    BtnImport,
  },
})
export default class ImportViewComponent extends Vue {
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Importar / Exportar Proyecto',
    });
    this.$store.dispatch('manageSlides/pull');
  };
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
  .col {
    padding: 2rem;
    border: 1px solid black;
  }
  .export {
    &__text {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__actions {
      display: flex;
      justify-content: center;
    }
  }
  .import {
    text-align: center;
    &__text {
      &--highlighted {
        text-decoration: underline;
      }
      &--danger {
        color: red;
      }
    }
    &__actions {
      font-size: 1rem;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
