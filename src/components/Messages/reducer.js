import { fromJS } from 'immutable';

import { actionTypes as at } from './constants';
import { actionTypes as atl } from 'components/Leftings/Leftings.constants';

const initialState = fromJS({
  message: {
    type: '',
    text: '',
    isVisible: false
  }
});

export default (state = initialState, action) => {
  switch(action.type) {
    case at.MESSAGES_REMOVE:
      return state
        .set('message', initialState);
    case atl.LEFTINGS_FETCH_FAILURE:
    case atl.LEFTINGS_FETCH_SINGLE_FAILURE:
    case atl.LEFTINGS_CREATE_SUCCESS:
    case atl.LEFTINGS_CREATE_FAILURE:
      return state
        .set('message', fromJS({
          type: 'error',
          text: action.message,
          isVisible: true
        }));
    default:
      return state;
  }
};
