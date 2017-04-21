import React from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-button';

import s from './styles';

export default ({ onLogout }) => {
  return (
    <View style={s.contentWrapper}>
      <View style={s.section}>
        <Text style={s.sectionTitle}>Location settings</Text>
      </View>
      <View style={s.section}>
        <Text style={s.sectionTitle}>Notifications settings</Text>
      </View>
      <View style={s.section}>
        <Button style={s.logoutButton} onPress={onLogout}>Logout</Button>
      </View>
    </View>
  );
};
