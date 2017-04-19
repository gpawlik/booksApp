import React, { PropTypes } from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';
import s from './styles';

const TextFieldGroup = ({
  field, value, label, error, type,
  placeholder, onChange, onFocus,
  secureTextEntry, multiline = false
}) => {
  return (
    <View>
      <Text style={s.label}>{label}</Text>
      <TextInput
        onChangeText={onChange}
        onFocus={onFocus}
        value={value}
        type={type}
        name={field}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={s.input}
        multiline={multiline}
      />
      {error && <Text>{error}</Text>}
    </View>
  );
};


TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
