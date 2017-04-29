import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { HomeIcon, CreateIcon, ProfileIcon, AboutIcon } from 'common/components/Icons';

import s from './styles';

const TabIcon = ({ iconType, title, selected }) => {
  const iconStyle = selected ? s.iconSelected : s.icon;
  let Handler;

  switch(iconType) {
    case 'home':
      Handler = HomeIcon;
      break;
    case 'create':
      Handler = CreateIcon;
      break;
    case 'profile':
      Handler = ProfileIcon;
      break;
    case 'about':
    default:
      Handler = AboutIcon;
  }

  return (
    <View style={s.container}>
      <Handler isActive={selected} />
      <Text style={iconStyle}>{title}</Text>
    </View>
  );
};

TabIcon.propTypes = {
  iconType: PropTypes.string,
  title: PropTypes.string,
  selected: PropTypes.bool
};

export default TabIcon;
