<template>
  <v-alert :value="error" type="error">ERROR: No se encontró el token, no pueden usar los servicios.</v-alert>
</template>

<script>
import loginService from '@/services/login.service';

export default {
  data() {
    return {
      error: false,
    }
  },
  async mounted() {
    const token = this.$route.query.token;
    if (token) {
      loginService.setToken({
        token,
      });
    } else if (!loginService.getToken()) {
      this.error = true;
    }
  },
};
</script>
