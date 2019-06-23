import axios from 'axios';
import { LoginService } from './login.service';

export class UploadFileService {
  loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  uploadFile(path: string, formData: FormData): Promise<any> {
    return axios.post(path, formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${this.loginService.getToken()}`,
      },
    });
  };
};
