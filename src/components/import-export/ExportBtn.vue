<template>
  <main>
    <v-btn color="success" @click="handleClick" :disabled="!slides.length">Exportar</v-btn>
  </main>
</template>

<script>
import dbService from '@/services/db.service';
import axios from 'axios';

export default {
  name: 'ExportBtn',
  computed: {
    slides: {
      get() {
        return this.$store.getters['manageSlides/slides'];
      },
    },
  },
  methods: {
    async handleClick() {
      dbService.setDbNameSync('slides');
      const token = localStorage.getItem('token');
      await axios.post('/api/teacher/export', {
        database: await dbService.json(),
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      window.open(`http://localhost:3000/api/teacher/export?token=${token}`);
    },
  },
};
</script>
