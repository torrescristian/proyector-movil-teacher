<template>
  <main class="nav">
    <nav>
      <router-link to="/">Inicio</router-link>|
      <router-link to="/gestionar-filminas">Gestionar Filminas</router-link>
    </nav>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'TheNav',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
