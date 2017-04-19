import axios from 'axios';
import config from 'config/development';

export function userSignupRequest(data) {
  return () => {
    return axios.post(`${config.apiServer}/api/users`, data);
  };
}

export function isUserExists(identifier) {
  return () => {
    return axios.get(`${config.apiServer}/api/users/${identifier}`);
  };
}
