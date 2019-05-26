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

<script>
import uploadService from '@/services/upload.service';
import BtnUploadFile from './BtnUploadFile.vue';
import DragAndDrop from './DragAndDrop.vue';

export default {
  name: 'DisplayList',
  components: {
    BtnUploadFile,
    DragAndDrop,
  },
};
</script>
