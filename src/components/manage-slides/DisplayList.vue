<template>
  <v-card>
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Filminas</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <drag-and-drop></drag-and-drop>
      <btn-upload-file></btn-upload-file>
    </v-list>
  </v-card>
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
