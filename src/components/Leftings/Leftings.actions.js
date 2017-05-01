import axios from 'axios';

import {
  GET_LEFTINGS_SUCCESS,
  GET_LEFTINGS_FAILURE,
  GET_LEFTING_SUCCESS,
  EDIT_LEFTING_SUCCESS,
  DELETE_LEFTING_SUCCESS
} from './Leftings.actionTypes';
import config from 'config/development';

export function getLeftings() {
  return dispatch => {
    return axios.get(`${config.apiServer}/api/leftings/wall`).then(res => {
      dispatch({
        type: GET_LEFTINGS_SUCCESS,
        leftings: res.data
      });
    }).catch(error => {
      dispatch({
        type: GET_LEFTINGS_FAILURE,
        error
      });
    });
  };
}

export function getLefting(leftingId) {
  return dispatch => {
    return axios
      .get(`${config.apiServer}/api/leftings/${leftingId}`)
      .then(res => {
        dispatch({
          type: GET_LEFTING_SUCCESS,
          lefting: res.data
        });
      });
  };
}

export function createLefting(data) {
  return () => {
    return axios.post(`${config.apiServer}/api/leftings`, data);
  };
}

export function editLefting(data) {
  return dispatch => {
    return axios
      .put(`${config.apiServer}/api/leftings/${data.id}`, data)
      .then(() => {
        dispatch({
          type: EDIT_LEFTING_SUCCESS,
          data
        });
      });
  };
}

export function deleteLefting(leftingId) {
  return dispatch => {
    return axios
      .delete(`${config.apiServer}/api/leftings/${leftingId}`)
      .then(() => {
        dispatch({
          type: DELETE_LEFTING_SUCCESS,
          leftingId
        });
      });
  };
}
