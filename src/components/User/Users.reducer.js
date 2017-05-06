import { fromJS } from 'immutable';
import { actionTypes as at } from './Users.constants';

const initialState = fromJS({
  user: {
    location: {
      longitude: '',
      latitude: ''
    },
    info: {}
  },
  userForm: {},
  isLoading: true
});

export default (state = initialState, action) => {
  switch(action.type) {
    case at.USER_GET_PROFILE_SUCCESS:
      return state
        .setIn(['user', 'info'], fromJS(action.user))
        .set('userForm', fromJS(action.user))
        .set('isLoading', false);
    case at.USER_GET_PROFILE_FAILURE:
      return state
        .set('isLoading', false);
    case at.USER_UNSET_CURRENT:
      return state.set('user', fromJS({}));
    case at.USER_EDIT_SETTINGS_FORM:
      return state.setIn(['userForm', action.id], action.value);
    case at.USER_EDIT_PROFILE_SUCCESS:
      return state
        .setIn(['user', 'info'], fromJS(action.user))
        .set('userForm', fromJS(action.user));
    case at.USER_SET_LOCATION:
      return state
        .setIn(['user', 'location'], fromJS(action.location));
    default:
      return state;
  }
};
