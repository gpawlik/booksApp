import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, TouchableHighlight, View } from 'react-native';

import SearchIcon from 'common/components/Icons/SearchIcon';

import s from './styles';

const BookSearchBox = ({ searchTerm, placeholder, onChange, onSearch }) => {
  return (
    <View style={s.container}>
      <TextInput
        onChangeText={onChange}
        value={searchTerm}
        placeholder={placeholder}
        style={s.input}
      />
      <TouchableHighlight
        style={s.icon}
        underlayColor="transparent"
        onPress={onSearch}>
        <View>
          <SearchIcon />
        </View>
      </TouchableHighlight>
    </View>
  );
};

BookSearchBox.propTypes = {
  searchTerm: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default BookSearchBox;
