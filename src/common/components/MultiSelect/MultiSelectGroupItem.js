import React from 'react';
import { Text } from 'react-native';

const MultiSelectGroupItem = ({ id, title, selected, onClick }) => {
  return (
    <Text onClick={onClick.bind(this, id)}>{title} {selected && '[selected]'}</Text>
  );
};

MultiSelectGroupItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool,
  onClick: React.PropTypes.func
};

export default MultiSelectGroupItem;
