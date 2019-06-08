import axios from 'axios';
import { DBService } from './db.service';
import { UploadFileService } from './upload.service';
import { Slide } from '../interfaces/slide.interface';
import { LoginService } from './login.service';

export class SlideService {
  private dbService: DBService;
  private loginService: LoginService;
  private uploadFileService: UploadFileService;

  constructor() {
    this.dbService = new DBService('slides');
    this.loginService = new LoginService();
    this.uploadFileService = new UploadFileService();
  }
  async set(key: string, value: Slide): Promise<any> {
    await this.dbService.set(key, value);
  };

  async insertSlide(event): Promise<any> {
    const filename: string = await this.uploadSlide(event);
    if (!filename) {
      return new Promise((resolve, reject) => {
        reject();
      });
    }

    return this.dbService.set(filename, {
      title: '',
      description: '',
      image: filename,
      order: Number(filename.split('_')[0]),
    });
  };

  get(key: string): Promise<any> {
    return this.dbService.get(key);
  };

  getSlides(): Promise<any> {
    return this.dbService.json();
  };

  async replaceAll(newValues: Slide[]): Promise<any> {
    await this.dbService.clear();
    const promises = newValues.map((slide: Slide, order: number) => {
      const { title, description, image } = slide;
      return this.dbService.set(image, {
        title,
        description,
        image,
        order,
      });
    });
    await Promise.all(promises);
  };

  async remove(slide: Slide): Promise<any> {
    await this.dbService.remove(slide.image);
    try {
      await axios.delete(`/api/teacher/slide/${slide.image}`, {
        headers: {
          Authorization: `Bearer ${this.loginService.getToken()}`,
        }
      });
    } catch (err) {}
  };

  private async uploadSlide(event: any): Promise<string> {
    const file: File = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('slide', file);
    const uploadServiceResponse = await this.uploadFileService.uploadFile(
      '/api/teacher/slide',
      formData,
    );
    return uploadServiceResponse.data.filename;
  };
};
