import {
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
  EDIT_SETTINGS_FORM,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  EDIT_USER_PROFILE_REQUEST,
  EDIT_USER_PROFILE_SUCCESS,
  EDIT_USER_PROFILE_FAILURE
} from './Users.actionTypes';

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

export const editSettings = ({ id, value }) => {
  return {
    type: EDIT_SETTINGS_FORM,
    id,
    value
  };
};

export const updateUserProfile = () => {
  return {
    type: EDIT_USER_PROFILE_REQUEST
  };
};

export const fetchUser = user => {
  return {
    type: GET_USER_PROFILE_REQUEST,
    user
  };
};

export const fetchSuccess = user => {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    user
  };
};

export const fetchFailure = error => {
  return {
    type: GET_USER_PROFILE_FAILURE,
    error
  };
};

export const updateSuccess = user => {
  return {
    type: EDIT_USER_PROFILE_SUCCESS,
    user
  };
};

export const updateFailure = () => {
  return {
    type: EDIT_USER_PROFILE_FAILURE
  };
};
