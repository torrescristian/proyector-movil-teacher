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

<script>
import MultipleFileUploader from './MultipleFileUploader';
import slideService from '@/services/slide.service';

export default {
  name: 'ImportBtn',
  data() {
    return {
      headers: null,
    };
  },
  mounted() {
    this.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  },
  methods: {
    async handleSuccess(data) {
      await slideService.replaceAll(Object.values(data));
      await this.$store.dispatch('manageSlides/pull');
    },
  },
  components: {
    MultipleFileUploader,
  },
};
</script>
