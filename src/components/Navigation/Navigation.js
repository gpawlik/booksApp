import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { createStructuredSelector } from 'reselect';

import { logout } from 'components/Auth/Auth.actions';
import { selectAuthUser, selectIsAuthenticated } from 'components/Auth/Auth.selector';
import translate from 'utils/translate';
import s from './styles';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
    this.context.drawer.close();
  }

  render() {
    const userLinks = (
      <View>
        <Button onPress={() => this.logout()}>{translate('navigation.user.logout')}</Button>
        <Button onPress={() => Actions.profile({ userId: this.props.authUser.id, isCurrent: true })}>{translate('navigation.user.myProfile')}</Button>
      </View>
    );
    const guestLinks = (
      <View>
        <Button onPress={() => Actions.profile()}>{translate('navigation.user.login')}</Button>
        <Button onPress={() => Actions.register()}>{translate('navigation.user.signup')}</Button>
      </View>
    );

    return (
      <View style={s.container}>
        <View>{this.props.isAuthenticated ? userLinks : guestLinks}</View>
      </View>
    );
  }
}

Navigation.propTypes = {
  authUser: React.PropTypes.object.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
  logout: React.PropTypes.func.isRequired
};

Navigation.contextTypes = {
  drawer: React.PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  authUser: selectAuthUser(),
  isAuthenticated: selectIsAuthenticated()
});

export default connect(mapStateToProps, { logout })(Navigation);
