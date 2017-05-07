import React from 'react';
import { Text, View } from 'react-native';

import { CheckInIcon, CheckOutIcon } from 'common/components/Icons';
import s from './styles';

export default ({ type, layout }) => {
  let timelineStyle, pictureStyle, IconHandler;

  switch(layout) {
    case 'first':
      timelineStyle = s.timelineFirst;
      break;
    case 'last':
      timelineStyle = s.timelineLast;
      break;
    default:
      timelineStyle = s.timeline;
  }

  switch(type) {
    case 'checkIn':
      pictureStyle = s.pictureCheckIn;
      IconHandler = CheckInIcon;
      break;
    case 'checkOut':
    default:
      pictureStyle = s.pictureCheckOut;
      IconHandler = CheckOutIcon;
  }

  return (
    <View style={s.item}>
      <View style={s.date}>
        <Text style={s.dateDayMonth}>20/09</Text>
        <Text style={s.dateYear}>2017</Text>
      </View>
      <View style={s.pictureBox}>
        <View style={timelineStyle}>
        </View>
        <View style={pictureStyle}>
          <IconHandler style={s.icon} color="#fff" />
        </View>
      </View>
      <Text>The book has been checked out</Text>
    </View>
  );
};
