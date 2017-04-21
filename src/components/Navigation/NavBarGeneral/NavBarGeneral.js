import React from 'react';
import Button from 'react-native-button';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import s from './styles';

export default ({ hasCloseButton }) => {
  const closeButton = (
    <Button
      onPress={() => Actions.profile()}
      containerStyle={s.rightButton}
      style={s.rightButtonText}>
      X
    </Button>
  );
  const settingsButton = (
    <Button
      onPress={() => Actions.settings()}
      containerStyle={s.rightButton}
      style={s.rightButtonText}>
      A
    </Button>
  );
  const navButton = hasCloseButton ? closeButton : settingsButton;

  return (
    <View style={s.header}>
      {navButton}
    </View>
  );
};
