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

async function removeSlides(oldValues, newValues) {
  const difference = oldValues.filter((x) => !newValues.includes(x));
  const deletePromises = difference.map((slide) => {
    return axios.delete(`/api/teacher/slide/${slide.image}`);
  });
  await Promise.all(deletePromises);
}

export default {
  async insertSlide(event) {
    const filename = await uploadSlide(event);
    dbService.setDbName('slides');
    return dbService.add({
      title: '',
      description: '',
      image: filename,
    });
  },
  getSlides() {
    dbService.setDbName('slides');
    return dbService.json();
  },
  async replaceAll({ oldValues, newValues }) {
    await removeSlides(oldValues, newValues);
    dbService.setDbName('slides');
    dbService.clear();
    for (let key = 0; key < newValues.length; key++) {
      const value = newValues[key];
      dbService.set(key, value);
    }
  },
  async remove(key, slide) {
    dbService.setDbName('slides');
    await dbService.remove(Number(key));
    try {
      await axios.delete(`/api/teacher/slide/${slide.image}`);
    } catch (err) {}
  },
};
