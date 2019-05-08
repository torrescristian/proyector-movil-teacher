import axios from 'axios';

export default {
  uploadFile(path, formData) {
    return axios.post(path, formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        // Authorization: localStorage.get('token'),
      },
    });
  },
};
