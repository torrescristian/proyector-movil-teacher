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
  async insertSlide(event) {
    const filename = await uploadSlide(event);
    dbService.setDbName('slides');
    dbService.add({
      title: '',
      description: '',
      image: filename,
    });
  },
  getSlides() {
    dbService.setDbName('slides');
    return dbService.json();
  },
  replaceAll(newValues) {
    dbService.setDbName('slides');
    dbService.clear();
    for (let key = 0; key < newValues.length; key++) {
      const value = newValues[key];
      dbService.set(key, value);
    }
  },
};
