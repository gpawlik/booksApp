import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Text, TextInput, View } from 'react-native';

import s from './styles';

const SettingsItem = ({ label, type, value, name, onChange }) => {
  let Handler, handlerStyle;

  switch (type) {
    case 'picture':
      Handler = View;
      handlerStyle = s.picture;
      break;
    case 'switch':
      Handler = Switch;
      handlerStyle = s.switcher;
      break;
    default:
      Handler = TextInput;
      handlerStyle = s.input;
  }

  return (
    <View style={s.container}>
      <Text style={s.label}>
        {label}
      </Text>
      <View style={s.handlerBox}>
        <Handler
          style={handlerStyle}
          value={value}
          onChange={onChange.bind(this, name)}
        />
      </View>
    </View>
  );
};

SettingsItem.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SettingsItem;
