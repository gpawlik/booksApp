import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Button from 'react-native-button';

import SettingsItem from 'components/Settings/SettingsItem/SettingsItem';

import s from './styles';

const Settings = ({ user, onChange, onLogout, onSave }) => {
  const {
    username,
    email,
    location,
    allowEmailNotifications,
    allowPushNotifications
   } = user;

  return (
    <View style={s.contentWrapper}>
      <View style={s.section}>
        <Text style={s.sectionTitle}>{'User settings'.toUpperCase()}</Text>
        <View style={s.sectionItems}>
          <SettingsItem
            label="Picture"
            type="picture"
            name="picture"
            value=""
            onChange={onChange}
            />
          <SettingsItem
            label="Username"
            value={username}
            name="username"
            type="input"
            onChange={onChange}
            />
          <SettingsItem
            label="E-mail"
            value={email}
            name="email"
            type="input"
            onChange={onChange}
          />
          <SettingsItem
            label="Location"
            value={location}
            name="location"
            type="input"
            onChange={onChange}
          />
        </View>
      </View>
      <View style={s.section}>
        <Text style={s.sectionTitle}>{'Notifications settings'.toUpperCase()}</Text>
        <View style={s.sectionItems}>
          <SettingsItem
            label="Email notifications"
            type="switch"
            value={allowEmailNotifications}
            name="allowEmailNotifications"
            onChange={onChange}
            />
          <SettingsItem
            label="App notifications"
            type="switch"
            value={allowPushNotifications}
            name="allowPushNotifications"
            onChange={onChange}
            />
        </View>
      </View>
      <View style={s.section}>
        <Button style={s.logoutButton} onPress={onLogout}>{'Logout'.toUpperCase()}</Button>
      </View>
      <View style={s.section}>
        <Button style={s.logoutButton} onPress={onSave}>{'Save'.toUpperCase()}</Button>
      </View>
    </View>
  );
};

Settings.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default Settings;
