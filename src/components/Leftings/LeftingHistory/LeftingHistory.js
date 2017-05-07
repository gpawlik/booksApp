import React from 'react';
import { ScrollView } from 'react-native';

import HistoryItem from 'common/components/HistoryItem/HistoryItem';

export default () => {
  return (
    <ScrollView>
      <HistoryItem type="checkOut" layout="first" />
      <HistoryItem type="checkIn" />
      <HistoryItem type="checkOut" />
      <HistoryItem type="checkIn" />
      <HistoryItem type="checkOut" />
      <HistoryItem type="checkIn" />
      <HistoryItem type="checkOut" layout="last" />
    </ScrollView>
  );
};
