<template>
  <v-card>
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Filminas</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <drag-and-drop></drag-and-drop>
      <upload-file></upload-file>
    </v-list>
  </v-card>
</template>

<script>
import uploadService from '@/services/upload.service';
import UploadFile from './UploadFile.vue';
import DragAndDrop from './DragAndDrop.vue';

export default {
  name: 'SlideList',
  components: {
    UploadFile,
    DragAndDrop,
  },
};
</script>
