<template>
  <div class="home">
    1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. At dignissimos reprehenderit fuga voluptatibus dolores magni voluptate aspernatur, repellat ipsum. Itaque cupiditate repudiandae illum rerum assumenda temporibus recusandae. Excepturi, consequuntur labore.
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted() {
    this.$store.dispatch('template/setTitle', {
      title: 'Inicio',
    });
  },
}
</script>

