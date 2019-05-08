<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-spacer></v-spacer>
          <v-toolbar-title>Filminas</v-toolbar-title>
        </v-toolbar>

        <v-list two-line>
          <drag-and-drop></drag-and-drop>
          <upload-file></upload-file>
          <save-changes></save-changes>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import uploadService from '../services/upload.service';
import UploadFile from './UploadFile.vue';
import DragAndDrop from './DragAndDrop.vue';
import SaveChanges from './SaveChanges.vue';

export default {
  name: 'SlideList',
  components: {
    UploadFile,
    DragAndDrop,
    SaveChanges,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
