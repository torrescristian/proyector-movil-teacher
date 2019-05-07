<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-spacer></v-spacer>
          <v-toolbar-title>Filminas</v-toolbar-title>
        </v-toolbar>

        <v-list two-line>
          <template v-for="item in items">
            <v-list-tile :key="item.title" avatar>
              <v-list-tile-avatar>
                <img :src="item.image">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.description"></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon color="red">delete</v-icon>
              </v-btn>
            </v-list-tile>
          </template>
          <form enctype="multipart/form-data" @change="uploadFile">
            <input type="file" name="archivo">
          </form>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import uploadService from '../services/upload.service';

export default {
  name: 'SlideList',
  data() {
    return {
      items: [
        {
          title: 'Titulo',
          description: 'Descripcion',
          image: '',
        },
      ],
    };
  },
  methods: {
    async uploadFile(event) {
      const file = event.target.files[0];
      await uploadService.uploadFile('/api/teacher/slide', file);
      console.log('exito');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
