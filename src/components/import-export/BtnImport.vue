<template>
  <main>
    <multiple-file-uploader
      postURL="/api/teacher/import"
      :postHeader="headers"
      :maxItems="1"
      headerMessage="Importar proyecto"
      successMessagePath="¡Se ha importado el proyecto con éxito 😃!"
      errorMessagePath="Ups, algo salió mal 🤷‍♂️"
      dropAreaPrimaryMessage="Arrastre el proyecto aquí"
      dropAreaSecondaryMessage="o haga click 🖱 para buscarlo"
      uploadButtonMessage="Subir proyecto"
      cancelButtonMessage="Cancelar"
      fileNameMessage="Nombre del archivo: "
      fileSizeMessage="Peso del archivo: "
      totalFileMessage="Cantidad de archivos: "
      totalUploadSizeMessage="Peso del proyecto"
      removeFileMessage="Quitar proyecto"
      fileUploadErrorMessage="🙈 error al subir el proyecto"
      minFilesErrorMessage="Debe subir al menos 1 proyecto"
      maxFilesErrorMessage="ERROR - Sólo puede subir la siguiente cantidad de archivos"
      retryErrorMessage="por favor inténtelo de nuevo"
      @upload-success="handleSuccess"
    ></multiple-file-uploader>
  </main>
</template>

<script lang="ts">
import MultipleFileUploader from './MultipleFileUploader.vue';
import { SlideService } from '../../services/slide.service';
import { Vue, Component } from 'vue-property-decorator';
import { Headers } from '../../interfaces/headers.interface';
import { LoginService } from '../../services/login.service';

@Component({
  components: {
    MultipleFileUploader,
  }
})
export default class BtnImportComponent extends Vue {
  headers: Headers;
  slideService: SlideService;
  loginService: LoginService;

  constructor() {
    super();
    this.slideService = new SlideService();
    this.loginService = new LoginService();
    this.headers = {
      authorization: `Bearer ${this.loginService.getToken()}`,
    };
  };
  
  async handleSuccess(data): Promise<any> {
    await this.slideService.replaceAll(Object.values(data));
    await this.$store.dispatch('manageSlides/pull');
  };
};
</script>
