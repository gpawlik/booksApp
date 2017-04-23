import axios from 'axios';
import config from 'config/development';

import {
  SET_CLAIM_INFO,
  RESET_CLAIM_INFO
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

export function searchBooks(query) {
  const q = 'Ender%27s+Game';

  return dispatch => {
    return axios
      .delete(`${config.goodreadsApi.url}/search?key=${config.goodreadsApi.key}&q=${q}`)
      .then(results => {
        console.log('RESULTS!! HURRA!!!', results);
        /*
        dispatch({
          type: DELETE_LEFTING_SUCCESS,
          leftingId
        });*/
      });
  };
}
