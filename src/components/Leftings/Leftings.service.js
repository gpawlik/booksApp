import axios from 'axios';

import config from 'config/development';

export function fetch() {
  return axios.get(`${config.apiServer}/api/leftings/wall`);
}

export function fetchSingle(leftingId) {
  return axios.get(`${config.apiServer}/api/leftings/${leftingId}`);
}

export function create(data) {
  return axios.post(`${config.apiServer}/api/leftings`, data);
}
