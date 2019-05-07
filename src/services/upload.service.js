export default {
  uploadFile(path, file) {
    return axios.post(path, file, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.get('token'),
      },
    });
  },
};
