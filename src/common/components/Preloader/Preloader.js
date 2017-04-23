import React, { PropTypes } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import colors from 'config/colors';
import s from './styles';

const Preloader = ({ size, color, text }) => {
  return (
    <View style={s.overlay}>
      <ActivityIndicator
        color={color}
        size={size}
      />
      {text && <Text style={s.text}>{text}</Text>}
    </View>
  );
};

Preloader.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  color: PropTypes.string,
  text: PropTypes.string
};

Preloader.defaultProps = {
  size: 'large',
  color: colors.primaryDark,
  text: 'Loading...'
};

export default Preloader;
