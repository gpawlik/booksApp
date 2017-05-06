import { actionTypes as at } from './Leftings.constants';

export const fetchLeftings = () => {
  return {
    type: at.LEFTINGS_FETCH
  };
};

export const fetchLeftingsSuccess = res => {
  return {
    type: at.LEFTINGS_FETCH_SUCCESS,
    leftings: res.data
  };
};

export const fetchLeftingsFailure = error => {
  return {
    type: at.LEFTINGS_FETCH_FAILURE,
    message: 'Fetching leftings failed',
    error
  };
};

export const fetchLeftingsSingle = id => {
  return {
    type: at.LEFTINGS_FETCH_SINGLE,
    id
  };
};

export const fetchLeftingsSingleSuccess = res => {
  return {
    type: at.LEFTINGS_FETCH_SINGLE_SUCCESS,
    lefting: res.data
  };
};

export const fetchLeftingsSingleFailure = error => {
  return {
    type: at.LEFTINGS_FETCH_SINGLE_FAILURE,
    error
  };
};

export const changeView = view => {
  return {
    type: at.LEFTINGS_CHANGE_VIEW,
    view
  };
};
