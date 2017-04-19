import { fromJS } from 'immutable';
import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  EDIT_USER_PROFILE_SUCCESS,
  EDIT_USER_PROFILE_FAILURE
} from './Users.actionTypes';

const initialState = fromJS({
  users: [],
  user: {}
});

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS_SUCCESS:
      return state.set('users', fromJS(action.users));
    case GET_USER_PROFILE_SUCCESS:
      return state.set('user', fromJS(action.user));
    case EDIT_USER_PROFILE_SUCCESS:
      const editedUserIndex = state.get('users').findIndex(obj => obj.get('_id') === action.user._id);

      return state.setIn(['users', editedUserIndex], action.user);
    case GET_USERS_FAILURE:
    case GET_USER_PROFILE_FAILURE:
    case EDIT_USER_PROFILE_FAILURE:
    default:
      return state;
  }
};
