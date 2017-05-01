import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { createStructuredSelector } from 'reselect';

import UserProfile from './UserProfile';

import Preloader from 'common/components/Preloader/Preloader';
import NavBarMain from 'components/Navigation/NavBarMain/NavBarMain';
import { fetchUser } from 'components/User/Users.actions';
import {
  selectUser,
  selectIsLoading
} from 'components/User/Users.selector';
import {
  selectAuthUser,
  selectIsAuthenticated
} from 'components/Auth/Auth.selector';

class UserProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { authUser, isAuthenticated } = this.props;

    if (isAuthenticated) {
      this.fetchUserData(authUser.id);
    } else {
      Actions.login();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isAuthenticated } = nextProps;

    if(!isAuthenticated) {
      Actions.login();
    }
  }

  fetchUserData(userId) {
    this.props.onFetchUser(userId);
  }

  render() {
    const { user } = this.props;

    return (
      <View>
        <UserProfile
          user={user}
          />
        {this.props.isLoading && <Preloader />}
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectUser(),
  authUser: selectAuthUser(),
  isAuthenticated: selectIsAuthenticated(),
  isLoading: selectIsLoading()
});

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: id => {
      dispatch(fetchUser(id));
    }
  };
};

UserProfileContainer.renderNavigationBar = () => {
  return <NavBarMain hasSettingsButton />;
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);
