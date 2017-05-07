import React, { PropTypes } from 'react';
import moment from 'moment';
import { Image, ScrollView, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import Rating from 'common/components/Rating/Rating';
import BookMeta from 'common/components/BookMeta/BookMeta';
import s from './styles';

const LeftingDetails = ({ lefting, distance, onCheckout }) => {
  const {
    book = {},
    pictureUrl,
    createdAt
  } = lefting;
  const {
    title: bookTitle,
    author: bookAuthor,
    imageUrl: bookImageUrl,
    publishDate,
    rating,
    ISBN
  } = book;
  //const leftingDateFormatted = moment(createdAt).format('DD/MM/YYYY');
  const timeCreated = moment(createdAt).fromNow();
  //const distance = getDistance(userLocation, location);
  //const distance = {};

  return (
    <ScrollView>
      {pictureUrl && <Image style={s.picture} source={{ uri: pictureUrl }} />}

      <View style={s.actionBox}>
        <Button
          onPress={onCheckout}
          containerStyle={s.buttonCheckoutContainer}
          style={s.buttonCheckout}
          >
          Checkout book
        </Button>
        <Button
          onPress={() => Actions.leftingHistory()}
          containerStyle={s.buttonHistoryContainer}
          style={s.buttonHistory}
          >
          Show history
        </Button>
      </View>

      <View style={s.headerBox}>
        <Text style={s.headerTitle}>{bookTitle}</Text>
        <Text style={s.headerAuthor}>{bookAuthor}</Text>
      </View>

      <View style={s.metaBox}>
        <View style={s.metaItem}>
          <Text style={s.metaLabel}>Distance</Text>
          <Text style={s.metaDataShort}>{`${distance}km`}</Text>
        </View>
        <View style={s.metaItem}>
          <Text style={s.metaLabel}>Rating</Text>
          <Rating style={s.rating} stars={rating} />
        </View>
        <View style={s.metaItem}>
          <Text style={s.metaLabel}>Drop date</Text>
          <Text style={s.metaDataLong}>{timeCreated}</Text>
        </View>
        <View style={s.metaItemLast}>
          <Text style={s.metaLabel}>Swaps no.</Text>
          <Text style={s.metaDataShort}>8</Text>
        </View>
      </View>

      <View style={s.bookDescriptionBox}>
        <Text style={s.bookDescriptionBox}>
          Conté tretze contes i una nouvelle tenyits d'una incitant comicitat negra.
          Són històries cruels, travessades per la felicitat, la violència i els
          inferns privats, i poblades per personatges obsessius amb la rialla a contrapeu.
        </Text>
      </View>

      <View style={s.bookMetaBox}>
        <BookMeta
          imageUrl={bookImageUrl}
          publishDate={publishDate}
          publisher="PenguinBooks"
          pages={178}
          type="Hardcover"
          isbn={ISBN}
          />
      </View>
    </ScrollView>
  );
};

LeftingDetails.propTypes = {
  lefting: PropTypes.object.isRequired,
  distance: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onCheckout: PropTypes.func.isRequired
};

export default LeftingDetails;
