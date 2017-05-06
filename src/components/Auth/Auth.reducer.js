import { fromJS } from 'immutable';
import isEmpty from 'lodash/isEmpty';

import { actionTypes as at } from 'components/User/Users.constants';

const initialState = fromJS({
  isAuthenticated: false,
  user: {}
});

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case at.USER_SET_CURRENT:
      return state
        .set('user', fromJS(action.user))
        .set('isAuthenticated', !isEmpty(action.user));
    case at.USER_UNSET_CURRENT:
      return state
        .set('user', fromJS({}))
        .set('isAuthenticated', false);
    default:
      return state;
  }
};
