<template>
  <main class="manage-slides">
    <div class="manage-slides__display">
      <display></display>
    </div>
    <div class="manage-slides__list">
      <display-list></display-list>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DisplayList from '@/components/manage-slides/DisplayList.vue';
import Display from '@/components/manage-slides/Display.vue';

@Component({
  components: { DisplayList, Display },
})
export default class ManageSlidesComponent extends Vue {
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Gestionar Filminas',
    });
    this.$store.dispatch('manageSlides/pull');
  };
};
</script>


<style lang="scss" scoped>
.manage-slides {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: 'display list';
  &__display {
    grid-area: display;
  }
  &__list {
    grid-area: list;
  }
}
</style>
