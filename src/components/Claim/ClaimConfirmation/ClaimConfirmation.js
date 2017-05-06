import React from 'react';
import PropTypes from 'prop-types';
import { Image, MapView, ScrollView, Text, TextInput, View } from 'react-native';
import Button from 'react-native-button';
import GoogleMap from 'react-native-google-static-map';

import s from './styles';

const ClaimConfirmation = ({ claim, book, location, onSubmit }) => {
  return (
    <ScrollView style={s.container}>
      <View style={s.section}>
        <Text style={s.sectionTitle}>
          Claim details
        </Text>
        <View style={s.topBox}>
          <Image
            source={{uri: claim.pictureUrl}}
            style={s.picture} />
          <View style={s.bookInfo}>
            <Text style={s.bookInfoTitle}>{book.title}</Text>
            <Text style={s.bookInfoAuthor}>{book.author}</Text>
          </View>
        </View>
      </View>

      <View style={s.section}>
        <Text style={s.sectionTitle}>
          Book location
        </Text>
        <GoogleMap
          style={s.map}
          latitude={`${location.latitude}`}
          longitude={`${location.longitude}`}
          zoom={13}
          size={{ width: 380, height: 120 }}
        />
      </View>

      <View style={s.section}>
        <Text style={s.sectionTitle}>
          Book description
        </Text>
        <TextInput
          style={s.comment}
          placeholder="Write your comment here... (optional)"
          multiline
          underlineColorAndroid="rgba(0,0,0,0)"
          />
      </View>
      <Button
        style={s.button}
        onPress={onSubmit}>
        Submit!
      </Button>
    </ScrollView>
  );
};

/*
<MapView
  style={s.map}
  region={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }}
  />
*/

ClaimConfirmation.propTypes = {
  claim: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ClaimConfirmation;
