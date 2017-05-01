import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Settings from './Settings';
import NavBarMain from 'components/Navigation/NavBarMain/NavBarMain';
import { logout as userLogout } from 'components/Auth/Auth.actions';
import { updateUserProfile, editSettings } from 'components/User/Users.actions';
import { selectUserForm } from 'components/User/Users.selector';

class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(id, e) {
    const value = e.nativeEvent.text || e.nativeEvent.value;

    this.props.editSettings({
      id,
      value
    });
  }
  /*
  onSave() {
    console.log('saving...');
    this.props.editUser({
      id: this.props.user._id,
      ...this.props.settingsForm
    });
  }*/

  render() {
    const { settingsForm, logout, updateUser } = this.props;

    return (
      <Settings
        user={settingsForm}
        onSave={updateUser}
        onChange={this.onChange}
        onLogout={logout}/>
    );
  }
}

SettingsContainer.propTypes = {
  settingsForm: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  editSettings: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

SettingsContainer.renderNavigationBar = () => {
  return (
    <NavBarMain
      hasBackButton
      hasActionButton
      actionText="Save"
      />
  );
};

const mapStateToProps = createStructuredSelector({
  settingsForm: selectUserForm()
});

export default connect(mapStateToProps, { updateUser: updateUserProfile, editSettings, logout: userLogout })(SettingsContainer);
