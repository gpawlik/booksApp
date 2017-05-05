import axios from 'axios';

import config from 'config/development';
import xmlToJson from 'utils/xmlToJson';

export const searchBooks = query => {
  return axios
    .get(`${config.goodreadsApi.url}/search?key=${config.goodreadsApi.key}&q=${query}`)
    .then(res => {
      return xmlToJson(res.data);
    });
};
