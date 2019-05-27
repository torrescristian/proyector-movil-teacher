<template>
  <main class="wrapper">
    <v-carousel 
      hide-delimiters 
      :interval="99999999" 
      @change="handleChange"
      class="carousel"
    >
      <v-carousel-item 
        v-for="(slide,i) in slides"
        :key="i"
        :src="getImgPath(slide)"
      ></v-carousel-item>
    </v-carousel>
    <div class="buttons">
      <v-btn @click="handleClickPrev" color="primary">
        <v-icon>navigate_before</v-icon>
        Anterior
      </v-btn>
      <v-btn @click="handleClickNext" color="primary">
        Siguiente
        <v-icon>navigate_next</v-icon>
      </v-btn>
    </div>
  </main>
</template>

<script>
import cloneDeep from 'lodash.clonedeep';
import SocketIO from 'socket.io-client';

export default {
  name: 'Display',
  data() {
    return {
      nextBtnElem: null,
      prevBtnElem: null,
      io: null,
      imageName: '',
    };
  },
  computed: {
    slides: {
      get() {
        return this.$store.getters['manageSlides/slides'];
      },
    },
  },
  mounted() {
    this.nextBtnElem = document.querySelector('.v-carousel__next button');
    this.nextBtnElem.style.display = 'none';
    this.prevBtnElem = document.querySelector('.v-carousel__prev button');
    this.prevBtnElem.style.display = 'none';
    this.io = SocketIO();
    window.addEventListener('keyup', (event) => {
      const key = event.key;
      if (key === 'ArrowRight') {
        this.handleClickNext();
      } else if (key === 'ArrowLeft') {
        this.handleClickPrev();
      }
    });
    setInterval(() => {
      this.emit();
    }, 1000);
  },
  methods: {
    getImgPath(slide) {
      return slide.image && this.slides.length
        ? '/api/slide/' + slide.image
        : 'default.gif';
    },
    handleChange(index) {
      this.imageName = this.slides[index].image;
    },
    async handleClickNext() {
      await this.nextBtnElem.click();
      this.emit();
    },
    async handleClickPrev() {
      await this.prevBtnElem.click();
      this.emit();
    },
    emit(){
      this.io.emit('client:message', {
        imageName: this.imageName,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-areas: 
    "display"
    "buttons";
  .carousel {
    grid-area: "display";
  }
  .buttons {
    grid-area: "buttons";
    display: flex;
    justify-content: center;
  }
}
</style>
