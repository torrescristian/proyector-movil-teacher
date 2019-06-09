<template>
  <main class="chart">
    <div class="chart__text" v-show="maxAmountOfStudents === 0">
      Aún no se ha conectado ningún alumno
    </div>
    <div v-show="maxAmountOfStudents > 0">
      <canvas ref="canvas" class="chart__canvas"></canvas>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import Chart from 'chart.js';

@Component
export default class AnalyticsComponent extends Vue {
  @Prop(Number) readonly connectedStudents!: number;
  @Prop(Number) readonly maxAmountOfStudents!: number;

  // Watch
  @Watch('connectedStudents')
  handleChangeConnectedStudents() {
    this.drawChart();
  };

  // methods
  drawChart() {
    const ctx: HTMLCanvasElement = this.$refs.canvas as HTMLCanvasElement;
    const maxAmountOfStudents: number = this.maxAmountOfStudents;
    const connectedStudents: number = this.connectedStudents;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Cantidad de alumnos actualmente conectados', 'Total de alumnos que se conectaron'],
          datasets: [{
              label: 'Cantidad de alumnos actualmente conectados',
              data: [connectedStudents, maxAmountOfStudents],
              backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
          }],
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                  },
              }],
          },
      },
    });
  };

};
</script>

<style lang="scss" scoped>
.chart {
  &__text {
    margin-top: 40vh;
  }
  &__canvas {
    width: 80vw;
    height: 40vh;
  }
}
</style>
