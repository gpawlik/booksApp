import React, { Component } from 'react';
import { Provider} from 'react-redux';
import { AppRegistry } from 'react-native';
import { Router } from 'react-native-router-flux';
import jwtDecode from 'jwt-decode';

import { getItem } from 'utils/storage';
import setAuthorizationToken from 'utils/setAuthorizationToken';
import { setCurrentUser } from 'components/User/Users.actions';

import store from './store';
import scenes from './scenes';

const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null
  };

  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

// Set auth token
getItem('jwtToken').then(token => {
  if (token) {
    setAuthorizationToken(token);
    store.dispatch(setCurrentUser(jwtDecode(token)));
  }
});

class booksApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router scenes={scenes} getSceneStyle={getSceneStyle} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('booksApp', () => booksApp);
