import axios from 'axios';

import config from 'config/development';

export const login = data => {
  return axios.post(`${config.apiServer}/api/auth`, data).then(res => {
    return res.data.token;
  });
};
