<template>
  <v-alert :value="error" type="error">ERROR: No se encontró el token, no pueden usar los servicios.</v-alert>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LoginService } from '../services/login.service';

@Component
export default class LoginComponent extends Vue {
  private error: boolean;
  private loginService: LoginService;

  constructor() {
    super();
    this.error = false;
    this.loginService = new LoginService();
  };
  
  mounted() {
    const token: string = this.$route.query.token as string;
    if (token) {
      this.loginService.setToken({
        token,
      });
    } else if (!this.loginService.getToken()) {
      this.error = true;
    }
  }

};
</script>
