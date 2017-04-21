import { fromJS } from 'immutable';
import isEmpty from 'lodash/isEmpty';

import {
  SET_CURRENT_USER,
  UNSET_CURRENT_USER
} from 'components/User/Users.actionTypes';

const initialState = fromJS({
  isAuthenticated: false,
  user: {}
});

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return state
        .set('user', fromJS(action.user))
        .set('isAuthenticated', !isEmpty(action.user));
    case UNSET_CURRENT_USER:
      return state
        .set('user', fromJS({}))
        .set('isAuthenticated', false);
    default: return state;
  }
};
