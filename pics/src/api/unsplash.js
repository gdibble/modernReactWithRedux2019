import axios from 'axios';

export default axios.create({
  headers: {
    Authorization: 'Client-ID 1a3018b68eae408c7f49377edd3543843e3ea56875f8d1189a6baf17cf48386e'
  },
  baseURL: 'https://api.unsplash.com'
});
