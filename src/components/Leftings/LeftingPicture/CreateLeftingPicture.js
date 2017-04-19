import React from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import s from './styles';

export default () => {
  return (
    <View style={s.contentWrapper}>
      <Text>Make a picture!</Text>
      <Button onPress={() => Actions.step2()}>done</Button>
    </View>
  );
};
