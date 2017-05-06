import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { RobotIcon } from 'common/components/Icons';

import s from './styles';

function EmptyView({ isVisible, text }) {
  if(!isVisible) return null;

  return (
    <View style={s.container}>
      <RobotIcon />
      <Text style={s.text}>{text}</Text>
    </View>
  );
}

EmptyView.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  text: PropTypes.string
};

export default EmptyView;
