import { fromJS } from 'immutable';

import { actionTypes as at } from './Leftings.constants';

const initialState = fromJS({
  leftings: [],
  lefting: {},
  isLeftingsLoading: false,
  isLeftingLoading: false,
  view: 'list'
});

export default (state = initialState, action) => {
  switch(action.type) {
    case at.LEFTINGS_FETCH:
      return state
        .set('isLeftingsLoading', true);
    case at.LEFTINGS_FETCH_SUCCESS:
      return state
        .set('leftings', fromJS(action.leftings))
        .set('isLeftingsLoading', false);
    case at.LEFTINGS_FETCH_FAILURE:
      return state
        .set('isLeftingsLoading', false);
    case at.LEFTINGS_FETCH_SINGLE:
      return state
        .set('isLeftingLoading', true);
    case at.LEFTINGS_FETCH_SINGLE_SUCCESS:
      return state
        .set('lefting', fromJS(action.lefting))
        .set('isLeftingLoading', false);
    case at.LEFTINGS_FETCH_SINGLE_FAILURE:
      return state
        .set('isLeftingLoading', false);
    case at.LEFTINGS_CHANGE_VIEW:
      return state
        .set('view', action.view);
    default:
      return state;
  }
};
