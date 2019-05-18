<template>
  <main>
    <v-btn color="success" @click="handleClick">Exportar</v-btn>
  </main>
</template>

<script>
import dbService from '../../services/db.service';
import axios from 'axios';

export default {
  name: 'ExportBtn',
  methods: {
    async handleClick() {
      dbService.setDbNameSync('slides');
      await axios.post('/api/teacher/export', {
        database: await dbService.json(),
      });
      window.open('http://localhost:3000/api/teacher/export');
    },
  },
};
</script>
