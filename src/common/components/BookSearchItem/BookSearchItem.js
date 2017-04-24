import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';

import s from './styles';

const BookMeta = ({ title, author, imageUrl, publisher, publishDate, pages, type }) => {
  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={{ uri: imageUrl }}
        />
      <View>
        <Text style={s.info}>
          <Text style={s.infoLabel}>{title}</Text>
        </Text>
        <Text style={s.info}>
          <Text style={s.infoLabel}>{author}</Text>
        </Text>
        <Text style={s.info}>
          <Text style={s.infoLabel}>Publisher:</Text> <Text style={s.infoText}>{publisher}</Text>
        </Text>
        <Text style={s.info}>
          <Text style={s.infoLabel}>Published:</Text> <Text style={s.infoText}>{publishDate}</Text>
        </Text>
        <Text style={s.info}>
          <Text style={s.infoLabel}>Pages:</Text> <Text style={s.infoText}>{pages}</Text>
        </Text>
        <Text style={s.info}>
          <Text style={s.infoLabel}>Type:</Text> <Text style={s.infoText}>{type}</Text>
        </Text>
      </View>
    </View>
  );
};

BookMeta.propTypes = {
  imageUrl: PropTypes.string,
  publisher: PropTypes.string,
  publishDate: PropTypes.string,
  pages: PropTypes.number,
  type: PropTypes.string,
  isbn: PropTypes.string
};

export default BookMeta;
