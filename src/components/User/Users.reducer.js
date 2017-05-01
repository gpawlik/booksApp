import { fromJS } from 'immutable';
import {
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  EDIT_USER_PROFILE_SUCCESS,
  EDIT_USER_PROFILE_FAILURE,
  UNSET_CURRENT_USER,
  EDIT_SETTINGS_FORM
} from './Users.actionTypes';

const initialState = fromJS({
  user: {},
  userForm: {},
  isLoading: true
});

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_USER_PROFILE_SUCCESS:
      return state
        .set('user', fromJS(action.user))
        .set('userForm', fromJS(action.user))
        .set('isLoading', false);
    case GET_USER_PROFILE_FAILURE:
      return state
        .set('isLoading', false);
    case UNSET_CURRENT_USER:
      return state.set('user', fromJS({}));
    case EDIT_SETTINGS_FORM:
      return state.setIn(['userForm', action.id], action.value);
    case EDIT_USER_PROFILE_SUCCESS:
      return state
        .set('user', fromJS(action.user))
        .set('userForm', fromJS(action.user));
    case EDIT_USER_PROFILE_FAILURE:
    default:
      return state;
  }
};
