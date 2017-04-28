import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import Button from 'react-native-button';

import CheckIcon from 'common/components/Icons/CheckIcon';

import s from './styles';

const BookMeta = ({ title, author, imageUrl, publishDate, rating, isSelected }) => {
  const selectButtonStyle = isSelected ? s.selectButtonActive : s.selectButton;

  return (
    <View style={s.container}>
      <View style={selectButtonStyle}>
        <CheckIcon color="#fff" />
      </View>
      <Image
        style={s.image}
        source={{ uri: imageUrl }}
        />
      <View>
        <Text style={s.info}>
          <Text style={s.bookTitle}>{title}</Text>
        </Text>
        <Text style={s.info}>
          <Text style={s.bookAuthor}>{author}</Text>
        </Text>
        <Text style={s.info}>
          <Text style={s.infoLabel}>Published:</Text> <Text style={s.infoText}>{publishDate}</Text>
        </Text>
        <Text style={s.info}>
          <Text style={s.infoLabel}>Rating:</Text> <Text style={s.infoText}>{rating}</Text>
        </Text>
      </View>
    </View>
  );
};

BookMeta.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  imageUrl: PropTypes.string,
  publishDate: PropTypes.string,
  rating: PropTypes.string,
  isSelected: PropTypes.bool
};

export default BookMeta;
