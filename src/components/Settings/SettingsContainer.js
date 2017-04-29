import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Settings from './Settings';
import NavBarMain from 'components/Navigation/NavBarMain/NavBarMain';
import { logout } from 'components/Auth/Auth.actions';

class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <Settings
        onLogout={this.logout}/>
    );
  }
}

SettingsContainer.renderNavigationBar = () => {
  return <NavBarMain hasCloseButton onClose={() => Actions.profile()} />;
};

SettingsContainer.propTypes = {
  logout: React.PropTypes.func.isRequired
};


export default connect(null, { logout })(SettingsContainer);
