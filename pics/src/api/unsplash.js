import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID zTBaPc_LmCTbXszbkAjrmp0ZNxRbqT17vha6xYB0NII'
  }
});

