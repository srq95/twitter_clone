import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.175.175.56:8080/api',
});

export default instance;