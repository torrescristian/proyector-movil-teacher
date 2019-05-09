import axios from 'axios';
import dbService from './db.service';
import uploadService from './upload.service';

async function uploadSlide(event) {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append('slide', file);
  const uploadServiceResponse = await uploadService.uploadFile(
    '/api/teacher/slide',
    formData
  );
  return uploadServiceResponse.data.filename;
}

export default {
  async set(key, value) {
    dbService.setDbName('slides');
    await dbService.set(key, value);
  },
  async insertSlide(event) {
    const filename = await uploadSlide(event);
    dbService.setDbName('slides');
    return dbService.set(filename, {
      title: '',
      description: '',
      image: filename,
    });
  },
  get(key) {
    dbService.setDbName('slides');
    return dbService.get(key);
  },
  getSlides() {
    dbService.setDbName('slides');
    return dbService.json();
  },
  async replaceAll(newValues) {
    dbService.setDbName('slides');
    dbService.clear();
    newValues.forEach((slide) => {
      dbService.set(slide.image, slide);
    });
  },
  async remove(slide) {
    dbService.setDbName('slides');
    await dbService.remove(slide.image);
    try {
      await axios.delete(`/api/teacher/slide/${slide.image}`);
    } catch (err) {}
  },
};
