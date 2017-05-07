import { actionTypes as at } from './Leftings.constants';

export const fetchLeftings = () => {
  return {
    type: at.LEFTINGS_FETCH
  };
};

export const fetchLeftingsSuccess = leftings => {
  return {
    type: at.LEFTINGS_FETCH_SUCCESS,
    leftings
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

export const fetchLeftingsSingleSuccess = lefting => {
  return {
    type: at.LEFTINGS_FETCH_SINGLE_SUCCESS,
    lefting
  };
};

export const fetchLeftingsSingleFailure = error => {
  return {
    type: at.LEFTINGS_FETCH_SINGLE_FAILURE,
    message: 'Fetching single lefting failed',
    error
  };
};

export const changeView = view => {
  return {
    type: at.LEFTINGS_CHANGE_VIEW,
    view
  };
};
