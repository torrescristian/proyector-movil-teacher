<template>
  <v-alert :value="error" type="error">ERROR: No se encontró el token, no pueden usar los servicios.</v-alert>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LoginService } from '../services/login.service';

@Component
export default class LoginComponent extends Vue {
  private error: boolean = false;

  constructor() {
    super();
    const loginService = new LoginService();
    // TODO: fix this: const token: string = this.$route.query.token as string;
    const search = location.search.split('token=');
    const token: string = search && search[1];
    if (token) {
      loginService.setToken({
        token,
      });
    } else if (!loginService.getToken()) {
      this.error = true;
    }
  };
  
};
</script>
