import axios from 'axios';

import config from 'config/development';
import xmlToJson from 'utils/xmlToJson';

import {
  SET_CLAIM_INFO,
  RESET_CLAIM_INFO,
  BOOK_SEARCH_SUCCESS
} from './Claim.actionTypes';

export const setClaimInfo = ({ key, value }) => {
  return {
    type: SET_CLAIM_INFO,
    key,
    value
  };
};

export const resetClaimInfo = () => {
  return {
    type: RESET_CLAIM_INFO
  };
};

export const searchBooks = query => {
  return dispatch => {
    return axios
      .get(`${config.goodreadsApi.url}/search?key=${config.goodreadsApi.key}&q=${query}`)
      .then(res => {
        return xmlToJson(res.data);
      })
      .then(res => {
        const results = res.GoodreadsResponse.search[0].results[0].work;

        dispatch({
          type: BOOK_SEARCH_SUCCESS,
          results
        });
      });
  };
};
