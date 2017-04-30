import axios from 'axios';
import config from 'config/development';

export const fetchUser = id => {
  return axios.get(`${config.apiServer}/api/users/${id}`);
};

export const updateUser = ({ id, data }) => {
  return axios.put(`${config.apiServer}/api/users/${id}`, data);
};
