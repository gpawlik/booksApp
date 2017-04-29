import React from 'react';
import Button from 'react-native-button';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CogIcon, CrossIcon } from 'common/components/Icons';
import s from './styles';

export default ({ hasCloseButton }) => {
  const closeButton = (
    <Button
      onPress={() => Actions.profile()}
      containerStyle={s.rightButton}
      >
      <CrossIcon />
    </Button>
  );
  const settingsButton = (
    <Button
      onPress={() => Actions.settings()}
      containerStyle={s.rightButton}
      >
      <CogIcon />
    </Button>
  );
  const navButton = hasCloseButton ? closeButton : settingsButton;

  return (
    <View style={s.header}>
      {navButton}
    </View>
  );
};
