export class LoginService {
  private key: 'token';

  setToken({ token = '' }: { token: string }): void {
    localStorage.setItem(this.key, token);
  };

  getToken(): string {
    return localStorage.getItem(this.key);
  };
};
