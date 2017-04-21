import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { setItem, removeItem } from 'utils/storage';
import setAuthorizationToken from 'utils/setAuthorizationToken';
import { setCurrentUser, unsetCurrentUser } from 'components/User/Users.actions';
import config from 'config/development';

export function login(data) {
  return dispatch => {
    return axios.post(`${config.apiServer}/api/auth`, data).then(res => {
      const { token } = res.data;

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
