<template>
  <main class="share">
    <div class="share__image">
      <img src="/api/qr">
    </div>
    <div class="share__text">
      <p>Sino cuenta con lector de QR puede ingresar a la siguiente página web</p>
      <br/>
      <h2><a :href="shareUrl">{{ shareUrl }}</a></h2>
      <br/>
      <em>(Recuerde que debe estar en la misma red wifi)</em>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  data() {
    return {
      shareUrl: '',
    };
  },
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Compartir Aplicación',
    });
    axios.get('/api/share-url').then((res) => {
      this.shareUrl = res.data.url;
    });
  },
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
  &__image {
    grid-area: image;
    display: flex;
    justify-content: center;
  }
  &__text {
    grid-area: text;
  }
}
</style>


