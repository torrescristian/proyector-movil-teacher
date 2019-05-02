<template>
  <div class="about">
    2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus harum, eveniet officia voluptate nisi cumque perferendis labore sapiente pariatur placeat adipisci natus ea distinctio impedit aliquid nesciunt aliquam aperiam.
  </div>
</template>

<script>
export default {
  name: 'manageSlides',
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Gestionar Filminas',
    });
  },
};
</script>

