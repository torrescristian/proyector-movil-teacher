<template>
  <main>
    <v-btn color="success" @click="handleClick" :disabled="!slides.length">Exportar</v-btn>
  </main>
</template>

<script lang="ts">
import { DBService } from '../../services/db.service';
import axios from 'axios';
import { Vue, Component } from 'vue-property-decorator';
import { Slide } from '../../interfaces/slide.interface';
import { LoginService } from '../../services/login.service';

@Component
export default class BtnExportComponent extends Vue {
  dbService: DBService;
  loginService: LoginService;
  
  constructor() {
    super();
    this.dbService = new DBService('slides');
    this.loginService = new LoginService();
  }

  // properties
  get slides(): Slide[] {
    return this.$store.getters['manageSlides/slides'];
  };

  openDownloadModal(token: string): void {
    const url: string = `http://localhost:3000/api/teacher/export?token=${token}`;
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  // methods
  async handleClick(): Promise<any> {
    const token = this.loginService.getToken();
    await axios.post('/api/teacher/export', {
      database: await this.dbService.json(),
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    this.openDownloadModal(token);
  };
};
</script>
