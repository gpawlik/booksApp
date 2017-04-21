import axios from 'axios';
import {
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  EDIT_USER_PROFILE_SUCCESS,
  EDIT_USER_PROFILE_FAILURE
} from './Users.actionTypes';
import config from 'config/development';

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

export const unsetCurrentUser = () => {
  return {
    type: UNSET_CURRENT_USER
  };
};

export const getUsers = () => {
  return dispatch => {
    return axios
      .get(`${config.apiServer}/api/users`)
      .then(res => {
        dispatch({
          type: GET_USERS_SUCCESS,
          users: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: GET_USERS_FAILURE,
          error: error.response.data
        });
      });
  };
};

export const getUser = userId => {
  return dispatch => {
    return axios
      .get(`${config.apiServer}/api/users/${userId}`)
      .then(res => {
        dispatch({
          type: GET_USER_PROFILE_SUCCESS,
          user: res.data.user
        });
      })
      .catch(error => {
        dispatch({
          type: GET_USER_PROFILE_FAILURE,
          error: error.response.data
        });
      });
  };
};

export const editUser = ({ id, username, email, location, interests }) => {
  return dispatch => {
    return axios
      .put(`${config.apiServer}/api/users/${id}`, {
        username,
        email,
        location,
        interests
      })
      .then(res => {
        dispatch({
          type: EDIT_USER_PROFILE_SUCCESS,
          user: res.data.user
        });
      })
      .catch(error => {
        dispatch({
          type: EDIT_USER_PROFILE_FAILURE,
          error: error.response.data
        });
      });
  };
};
