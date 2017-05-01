import React, { PropTypes } from 'react';
import moment from 'moment';
import { ScrollView, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import Rating from 'common/components/Rating/Rating';
import BookMeta from 'common/components/BookMeta/BookMeta';
import s from './styles';

const LeftingDetails = ({ lefting, onCheckout }) => {
  // TODO: if no lefting data, redirect to error page
  const { description, leftingDate, createdAt } = lefting;
  const leftingDateFormatted = moment(leftingDate).format('DD/MM/YYYY');
  const timeCreated = moment(createdAt).fromNow();

  return (
    <ScrollView>
      <View style={s.image} />

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
        <Text style={s.headerTitle}>El millor dels mons</Text>
        <Text style={s.headerAuthor}>Quim Monzó</Text>
      </View>

      <View style={s.metaBox}>
        <View style={s.metaItem}>
          <Text style={s.metaLabel}>Distance</Text>
          <Text style={s.metaDataShort}>{'1.4km'}</Text>
        </View>
        <View style={s.metaItem}>
          <Text style={s.metaLabel}>Rating</Text>
          <Rating style={s.rating} stars={4.5} />
        </View>
        <View style={s.metaItem}>
          <Text style={s.metaLabel}>Drop date</Text>
          <Text style={s.metaDataLong}>7 days ago</Text>
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
          publishDate="20/08/1988"
          publisher="PenguinBooks"
          pages={178}
          type="Hardcover"
          isbn="8420471836"
          isbn13="9788420471839"
          />
      </View>
    </ScrollView>
  );
};

LeftingDetails.propTypes = {
  lefting: PropTypes.object.isRequired,
  onCheckout: PropTypes.func.isRequired
};

export default LeftingDetails;
