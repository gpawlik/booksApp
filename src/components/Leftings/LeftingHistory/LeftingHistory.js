import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import HistoryItem from 'common/components/HistoryItem/HistoryItem';

export default () => {
  return (
    <View>
      <HistoryItem type="first" />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem type="last" />
    </View>
  );
};
