import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { createStructuredSelector } from 'reselect';

import UserProfile from './UserProfile';

import Preloader from 'common/components/Preloader/Preloader';
import NavBarGeneral from 'components/Navigation/NavBarGeneral/NavBarGeneral';
import { getUser } from 'components/User/Users.actions';
import { selectUser } from 'components/User/Users.selector';
import { selectAuthUser, selectIsAuthenticated } from 'components/Auth/Auth.selector';

class UserProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
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

    if(this.props.isAuthenticated !== isAuthenticated && !isAuthenticated) {
      Actions.login();
    }
  }

  fetchUserData(userId) {
    this.props.getUser(userId).then(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { user } = this.props;

    return (
      <View>
        {this.state.isLoading && <Preloader />}
        <UserProfile
          user={user}
          />
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectUser(),
  authUser: selectAuthUser(),
  isAuthenticated: selectIsAuthenticated()
});

UserProfileContainer.renderNavigationBar = () => {
  return <NavBarGeneral />;
};

export default connect(mapStateToProps, { getUser })(UserProfileContainer);
