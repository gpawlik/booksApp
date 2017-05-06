import jwtDecode from 'jwt-decode';

import { setItem, removeItem } from 'utils/storage';
import setAuthorizationToken from 'utils/setAuthorizationToken';
import { setCurrentUser, unsetCurrentUser } from 'components/User/Users.actions';
import { login as loginUser } from './Auth.service';

export function login(data) {
  return dispatch => {
    return loginUser(data).then(token => {
      setItem('jwtToken', token).then(() => {
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwtDecode(token)));
      });
    });
  };
}

export function logout() {
  return dispatch => {
    removeItem('jwtToken').then(() => {
      setAuthorizationToken(false);
      dispatch(unsetCurrentUser());
    });
  };
}
