import axios from 'axios';

import config from 'config/development';
import xmlToJson from 'utils/xmlToJson';

import {
  SET_CLAIM_INFO,
  RESET_CLAIM_INFO,
  SET_CLAIM_BOOK,
  BOOK_SEARCH,
  BOOK_SEARCH_SUCCESS
} from './Claim.actionTypes';
import { transformBookData } from 'utils/transform';

export const setClaimInfo = ({ id, value }) => {
  return {
    type: SET_CLAIM_INFO,
    id,
    value
  };
};

export const resetClaimInfo = () => {
  return {
    type: RESET_CLAIM_INFO
  };
};

export const setClaimBook = index => {
  return {
    type: SET_CLAIM_BOOK,
    index
  };
};

export const bookSearchLaunch = () => {
  return {
    type: BOOK_SEARCH
  };
};

export const bookSearchSuccess = results => {
  return {
    type: BOOK_SEARCH_SUCCESS,
    results: transformBookData(results.GoodreadsResponse.search[0].results[0].work)
  };
};

export const searchBooks = query => {
  return dispatch => {
    dispatch(bookSearchLaunch());
    return axios
      .get(`${config.goodreadsApi.url}/search?key=${config.goodreadsApi.key}&q=${query}`)
      .then(res => {
        return xmlToJson(res.data);
      })
      .then(res => {
        dispatch(bookSearchSuccess(res));
      });
  };
};
