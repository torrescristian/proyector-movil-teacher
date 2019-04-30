<template>
  <main class="nav">
    <nav>
      <router-link to="/">Home</router-link>
      | <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
