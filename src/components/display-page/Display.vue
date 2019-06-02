<template>
  <main class="display">
    <div class="display__text">
      <span>
        <strong>Título:</strong> {{ slides[imageIndex].title }}<br/>
        <strong>Descripción:</strong> {{ slides[imageIndex].description }}
      </span>
      <span><strong>Filmina:</strong> {{ imageIndex + 1 }} de {{ slides.length }}</span>
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
    <div class="display__img-container">
      <img class="display__img" :src="getImgPath()"/>
    </div>
  </main>
</template>

<script lang="ts">
import cloneDeep from 'lodash.clonedeep';
import SocketIO from 'socket.io-client';
import { Watch, Vue, Component } from 'vue-property-decorator';
import { Slide } from '../../interfaces/slide.interface';

@Component
export default class DisplayComponent extends Vue {
  io: any = null;
  interval: number;
  
  constructor() {
    super();
    this.io = SocketIO();
  };
  
  mounted() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.emit();
    }, 1000);
  }

  beforeDestroy() {
    clearInterval(this.interval);
  }

  // watchers  
  @Watch('slides')
  handleChangeSlides(val: Slide[]) {
    this.imageIndex = 0;
  };

  // computed properties
  get slides(): Slide[] {
    return this.$store.getters['manageSlides/slides'];
  };
  
  get imageIndex(): number {
    return this.$store.getters['manageSlides/displayedImageIndex'];
  };

  set imageIndex(index) {
    this.$store.dispatch('manageSlides/setDisplayedImageIndex', {
      index,
    });    
  };

  // methods
  mod(n, m) {
    return ((n % m) + m) % m;
  };

  getImgPath() {
    return this.slides.length
      ? `/api/slide/${this.slides[this.imageIndex].image}`
      : 'default.gif';
  };

  changeImageIndexBy(delta) {
    this.imageIndex =  this.mod(this.imageIndex + delta, this.slides.length);
    this.emit();
  };

  async handleClickNext() {
    this.changeImageIndexBy(1);
  };

  async handleClickPrev() {
    this.changeImageIndexBy(-1);
  };

  emit(){
    this.io.emit('client:message', {
      imageName: this.slides[this.imageIndex].image,
    });
  };

};
</script>

<style lang="scss" scoped>
.display {
  display: grid;
  grid-template-areas: 
    "text"
    "buttons"
    "display";
  &__text {
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;
  }
  &__img {
    height: 60vh;
    &-container { 
      grid-area: "display";
      display: flex;
      justify-content: center;
    }
  }
  &__buttons {
    grid-area: "buttons";
    display: flex;
    justify-content: center;
  }
}
</style>
