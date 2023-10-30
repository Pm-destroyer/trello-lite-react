import axios from 'axios';
import config from '../../config';

const axiosBaseInstance = axios.create({
  baseURL: config.API_BASE_URL,
});

const axiosAuthInstance = axios.create({
  baseURL: config.API_BASE_URL,
});

const axiosServiceInstance = axios.create({
  baseURL: config.API_BASE_URL,
});

export { axiosBaseInstance, axiosAuthInstance, axiosServiceInstance };
