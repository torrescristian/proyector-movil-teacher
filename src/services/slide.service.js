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
    dbService.setDbNameSync('slides');
    await dbService.set(key, value);
  },
  async insertSlide(event) {
    const filename = await uploadSlide(event);
    dbService.setDbNameSync('slides');
    return dbService.set(filename, {
      title: '',
      description: '',
      image: filename,
      order: Number(filename.split('_')[0]),
    });
  },
  get(key) {
    dbService.setDbNameSync('slides');
    return dbService.get(key);
  },
  getSlides() {
    dbService.setDbNameSync('slides');
    return dbService.json();
  },
  async replaceAll(newValues) {
    dbService.setDbNameSync('slides');
    await dbService.clear();
    const promises = newValues.map((slide, order) => {
      const { title, description, image } = slide;
      return dbService.set(image, {
        title,
        description,
        image,
        order,
      });
    });
    await Promise.all(promises);
  },
  async remove(slide) {
    dbService.setDbNameSync('slides');
    await dbService.remove(slide.image);
    try {
      await axios.delete(`/api/teacher/slide/${slide.image}`);
    } catch (err) {}
  },
};
