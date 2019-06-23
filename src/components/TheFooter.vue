<template>
  <v-footer class="pa-3">
    <v-spacer></v-spacer>
    <div>Proyector Móvil &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheFooterComponent extends Vue {
};
</script>
