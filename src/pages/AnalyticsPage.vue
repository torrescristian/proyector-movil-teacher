<template>
  <v-container grid-list-md>
    <the-chart
      :connectedStudents="connectedStudents"
      :maxAmountOfStudents="maxAmountOfStudents"
    ></the-chart>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheChart from '../components/analytics-page/TheChart.vue';
import io from 'socket.io-client';

@Component({
  components: {
    TheChart,
  }
})
export default class AnalyticsComponent extends Vue {
  socket: SocketIOClient.Socket;
  connectedStudents: number;
  maxAmountOfStudents: number;
  
  constructor() {
    super();
    this.socket = null;
    this.connectedStudents = 0;
    this.maxAmountOfStudents = 0;
  };
  
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Analítica',
    });

    this.socket = io();
    this.socket.on('server:list-clients', (data: { clients: string[] }) => {
      this.connectedStudents = data.clients.length - 1;
      if (this.connectedStudents > this.maxAmountOfStudents) {
        this.maxAmountOfStudents = this.connectedStudents;
      } 
    });
  };

  beforeDestroy() {
    this.socket.close();
    this.socket = null;
  }

};

</script>



