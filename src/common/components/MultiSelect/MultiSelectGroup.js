import React from 'react';
import {
  Text,
  View
} from 'react-native';

const MultiSelectGroup = ({ label, error, children }) => {
  return (
    <View className="form-input-group">
      <Text className="form-label">{label}</Text>
      <View className="multi-choice-list">
        {children}
      </View>
      {error && <Text className="form-error-label">{error}</Text>}
    </View>
  );
};

MultiSelectGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  onChange: React.PropTypes.func
};

export default MultiSelectGroup;
