import React from 'react';
import { View } from 'react-native';

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
