import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { ChevronIcon, Logo } from 'common/components/Icons';
import s from './styles';

export default ({ hasBackButton }) => {
  const backButton = (
    <TouchableOpacity style={s.backButton} onPress={() => Actions.pop()}>
      <ChevronIcon />
    </TouchableOpacity>
  );

  return (
    <View style={s.container}>
      <View style={s.content}>
        <Logo style={s.logo} />
        {hasBackButton && backButton}
      </View>
    </View>
  );
};
