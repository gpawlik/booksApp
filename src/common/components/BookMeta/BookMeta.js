import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';

import s from './styles';

const BookMeta = ({ imageUrl, publisher, publishDate, pages, type, isbn }) => {
  return (
    <View style={s.container}>
      <Image
        source={{uri: imageUrl}}
        style={s.image}
        />
      <View>
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
        <Text style={s.info}>
          <Text style={s.infoLabel}>ISBN:</Text> <Text style={s.infoText}>{isbn}</Text>
        </Text>
      </View>
    </View>
  );
};

BookMeta.propTypes = {
  imageUrl: PropTypes.string,
  publisher: PropTypes.string,
  publishDate: PropTypes.number,
  pages: PropTypes.number,
  type: PropTypes.string,
  isbn: PropTypes.string
};

export default BookMeta;
