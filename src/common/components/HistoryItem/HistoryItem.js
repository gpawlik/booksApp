import React from 'react';
import { Text, View } from 'react-native';

import s from './styles';

export default ({ type }) => {
  let timelineStyle;

  switch(type) {
    case 'first':
      timelineStyle = s.timelineFirst;
      break;
    case 'last':
      timelineStyle = s.timelineLast;
      break;
    default:
      timelineStyle = s.timeline;
  }
  
  return (
    <View style={s.item}>
      <View style={s.date}>
        <Text style={s.dateDayMonth}>20/09</Text>
        <Text style={s.dateYear}>2017</Text>
      </View>
      <View style={s.pictureBox}>
        <View style={timelineStyle}></View>
        <View style={s.picture}></View>
      </View>
      <Text>The book has been checked out</Text>
    </View>
  );
};
