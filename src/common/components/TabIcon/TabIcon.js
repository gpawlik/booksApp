import React from 'react';
import { Text } from 'react-native';

import s from './styles';

export default ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' : 'black', backgroundColor: '#fff'}}>{title}</Text>
  );
};
