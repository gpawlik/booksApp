import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Button from 'react-native-button';

import s from './styles';

const ClaimConfirmation = ({ claim, onClaimChange, onSubmit }) => {
  return (
    <View style={s.container}>
      <View style={s.section}>
        <Text style={s.sectionTitle}>
          Claim details
        </Text>
      </View>

      <View style={s.section}>
        <Text style={s.sectionTitle}>
          Book details
        </Text>

        <BookForm
          onChange={onClaimChange}
          {...claim}
          />

        <BookSearch
          title="something"
          author="author"
          isbn="123"
          />
      </View>
      <Button onPress={onSubmit}>make a picture</Button>
    </View>
  );
};

ClaimConfirmation.propTypes = {
  claim: PropTypes.object.isRequired,
  onClaimChange: PropTypes.object.isRequired,
  onSubmit: PropTypes.object.isRequired
};

export default ClaimConfirmation;
