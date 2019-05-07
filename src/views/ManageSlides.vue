<template>
  <div>
    <slide-list></slide-list>
  </div>
</template>

<script>
import SlideList from '../components/SlideList.vue';

export default {
  name: 'manageSlides',
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Gestionar Filminas',
    });
  },
  components: { SlideList }
};
</script>

