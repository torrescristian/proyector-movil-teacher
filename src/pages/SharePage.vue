<template>
  <main class="share">
    <div class="share__image">
      <img src="/api/qr">
    </div>
    <div class="share__text">
      <h2>Si el teléfono del alumno no cuenta con lector de QR puede ingresar a la siguiente página web:</h2>
      <br/>
      <h2 class="share__text--highlighted share__text--increased">
          {{ shareUrl }}
      </h2>
      <br/>
      <h3>
        <v-alert class="share__text--increased" type="warning" :value="true">
          IMPORTANTE: Esta computadora y el teléfono del alumno deben de estar en la misma red WiFi.
        </v-alert>
      </h3>  
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class SharePageComponent extends Vue {
  shareUrl: string;

  constructor() {
    super();
    this.shareUrl = '';
  }

  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Compartir Aplicación',
    });
    axios.get('/api/share-url').then((res) => {
      this.shareUrl = res.data.url;
    });
  };
  
};
</script>

<style lang="scss" scoped>
.share {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-areas: 
    'image'
    'text';
  text-align: center;
  margin: 1rem 8rem;
  &__image {
    grid-area: image;
    display: flex;
    justify-content: center;
  }
  &__text {
    grid-area: text;
    &--highlighted {
      color: #5d8aa8;
    }
    &--increased {
      font-size: 1.5rem;
    }
  }
}
</style>


