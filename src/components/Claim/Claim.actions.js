import axios from 'axios';

import config from 'config/development';
import xmlToJson from 'utils/xmlToJson';

import { actionTypes as at } from './Claim.constants';
import { transformBookData } from 'utils/transform';

export const setClaimInfo = ({ id, value }) => {
  return {
    type: at.CLAIM_SET_INFO,
    id,
    value
  };
};

export const resetClaimInfo = () => {
  return {
    type: at.CLAIM_RESET_INFO
  };
};

export const setClaimBook = index => {
  return {
    type: at.CLAIM_SET_BOOK,
    index
  };
};

export const searchBooks = query => {
  return {
    type: at.BOOK_SEARCH,
    query
  };
};

export const bookSearchSuccess = results => {
  return {
    type: at.BOOK_SEARCH_SUCCESS,
    results
  };
};

export const bookSearchFailure = () => {
  return {
    type: at.BOOK_SEARCH_FAILURE
  };
};
