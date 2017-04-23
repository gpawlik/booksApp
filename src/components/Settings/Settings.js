import React from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-button';

import SettingsItem from 'components/Settings/SettingsItem/SettingsItem';

import s from './styles';

export default ({ onLogout }) => {
  return (
    <View style={s.contentWrapper}>
      <View style={s.section}>
        <Text style={s.sectionTitle}>{'User settings'.toUpperCase()}</Text>
        <View style={s.sectionItems}>
          <SettingsItem
            label="Picture"
            type="picture"
            value=""
            onChange={() => {}}
            />
          <SettingsItem
            label="Username"
            value="John Doe"
            type="input"
            onChange={() => {}}
            />
          <SettingsItem
            label="E-mail"
            value="johndoe@gmail.com"
            type="input"
            onChange={() => {}}
          />
          <SettingsItem
            label="Location"
            value="Barcelona, Spain"
            type="input"
            onChange={() => {}}
          />
        </View>
      </View>
      <View style={s.section}>
        <Text style={s.sectionTitle}>{'Notifications settings'.toUpperCase()}</Text>
        <View style={s.sectionItems}>
          <SettingsItem
            label="Email notifications"
            type="switch"
            value={false}
            onChange={() => {}}
            />
          <SettingsItem
            label="App notifications"
            type="switch"
            value={true}
            onChange={() => {}}
            />
        </View>
      </View>
      <View style={s.section}>
        <Button style={s.logoutButton} onPress={onLogout}>{'Logout'.toUpperCase()}</Button>
      </View>
    </View>
  );
};
