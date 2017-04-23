import React from 'react';
import { Text, View } from 'react-native';

import s from './styles';

export default ({ selected, title }) => {
  const iconStyle = selected ? s.iconSelected : s.icon;

  return (
    <View style={s.container}>
      <Text style={iconStyle}>{title}</Text>
    </View>
  );
};
