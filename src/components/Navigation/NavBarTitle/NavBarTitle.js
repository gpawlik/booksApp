import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import s from './styles';

const NavBarTitle = ({ title }) => {
  return (
    <View style={s.header}>
      <Text style={s.title}>{title}</Text>
    </View>
  );
};

NavBarTitle.propType = {
  title: PropTypes.string
};

export default NavBarTitle;
