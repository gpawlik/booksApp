import { actionTypes as at } from './Users.constants';

export const setCurrentUser = user => {
  return {
    type: at.USER_SET_CURRENT,
    user
  };
};

export const unsetCurrentUser = () => {
  return {
    type: at.USER_UNSET_CURRENT
  };
};

export const editSettings = ({ id, value }) => {
  return {
    type: at.USER_EDIT_SETTINGS_FORM,
    id,
    value
  };
};

export const updateUserProfile = () => {
  return {
    type: at.USER_EDIT_PROFILE
  };
};

export const fetchUser = user => {
  return {
    type: at.USER_GET_PROFILE,
    user
  };
};

export const fetchSuccess = user => {
  return {
    type: at.USER_GET_PROFILE_SUCCESS,
    user
  };
};

export const fetchFailure = error => {
  return {
    type: at.USER_GET_PROFILE_FAILURE,
    error
  };
};

export const updateSuccess = user => {
  return {
    type: at.USER_EDIT_PROFILE_SUCCESS,
    user
  };
};

export const updateFailure = () => {
  return {
    type: at.USER_EDIT_PROFILE_FAILURE
  };
};

export const setUserLocation = location => {
  return {
    type: at.USER_SET_LOCATION,
    location
  };
};
