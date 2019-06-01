<template>
  <main class="display">
    <div class="display__img">
      <img :src="getImgPath()" height="500"/>
    </div>
    <div class="display__buttons">
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
    imageIndex: {
      get() {
        return this.$store.getters['manageSlides/displayedImageIndex'];
      },
      set(index) {
        this.$store.dispatch('manageSlides/setDisplayedImageIndex', {
          index,
        });    
      },
    },
  },
  watch: {
    imageIndex(val, oldVal) {
      this.imageName = this.slides[val].image;
    },
    slides(val, oldVal) {
      this.imageName = val[this.imageIndex].image;
    },
  },
  mounted() {
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
    mod(n, m) {
      return ((n % m) + m) % m;
    },
    getImgPath() {
      return this.slides.length
        ? `/api/slide/${this.imageName}`
        : 'default.gif';
    },
    changeImageIndexBy(delta) {
      this.imageIndex =  this.mod(this.imageIndex + delta, this.slides.length);
      this.emit();
    },
    async handleClickNext() {
      this.changeImageIndexBy(1);
    },
    async handleClickPrev() {
      this.changeImageIndexBy(-1);
    },
    emit(){
      this.io.emit('client:message', {
        imageName: this.imageName,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.display {
  display: grid;
  grid-template-areas: 
    "display"
    "buttons";
  &__img {
    grid-area: "display";
    display: flex;
    justify-content: center;
  }
  &__buttons {
    grid-area: "buttons";
    display: flex;
    justify-content: center;
  }
}
</style>
