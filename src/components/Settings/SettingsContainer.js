import React from 'react';
import { connect } from 'react-redux';

import Settings from './Settings';
import NavBarGeneral from 'components/Navigation/NavBarGeneral/NavBarGeneral';
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
  return <NavBarGeneral hasCloseButton />;
};

SettingsContainer.propTypes = {
  logout: React.PropTypes.func.isRequired
};


export default connect(null, { logout })(SettingsContainer);
