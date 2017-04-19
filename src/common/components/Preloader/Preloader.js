import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import colors from 'config/colors';
import s from './styles';

export default () => {
  return (
    <View style={s.overlay}>
      <ActivityIndicator
        color={colors.primaryDark}
        size="large"
      />
      <Text style={s.text}>Loading...</Text>
    </View>
  );
};
