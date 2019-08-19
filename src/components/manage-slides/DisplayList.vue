<template>
  <main class="display-list">
    <v-card>
      <v-toolbar color="cyan" dark>
        <v-toolbar-title>Filminas</v-toolbar-title>
      </v-toolbar>
      <v-list class="display-list__list">
        <drag-and-drop></drag-and-drop>
      </v-list>
      <btn-upload-file></btn-upload-file>
    </v-card>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BtnUploadFile from './BtnUploadFile.vue';
import DragAndDrop from './DragAndDrop.vue';

@Component({
  components: {
    BtnUploadFile,
    DragAndDrop,
  }
})
export default class DisplayListComponent extends Vue {
};
</script>

<style lang="scss" scoped>
  .display-list {
    overflow-x: scroll;
    &__list {
      overflow-y: scroll;
      max-height: 400px;
    }
  }
</style>