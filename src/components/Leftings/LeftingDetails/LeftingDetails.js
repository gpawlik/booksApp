import React, { PropTypes } from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import translate from 'utils/translate';
import s from './styles';

const LeftingDetails = ({ lefting }) => {
  // TODO: if no lefting data, redirect to error page
  const { description, leftingDate, createdAt } = lefting;
  const leftingDateFormatted = moment(leftingDate).format('DD/MM/YYYY');
  const timeCreated = moment(createdAt).fromNow();

  return (
    <View>
      <View style={s.leftingImage} />
      <View style={s.leftingInfoRow}>
        <Text style={s.leftingInfoRowLabel}>
          {translate('leftings.profile.label.description')}
        </Text>
        <Text>{description}</Text>
      </View>
      <View style={s.leftingInfoRow}>
        <Text style={s.leftingInfoRowLabel}>
          {translate('leftings.profile.label.date')}
        </Text>
        <Text>{leftingDateFormatted}</Text>
      </View>
      <View style={s.leftingInfoRow}>
        <Text style={s.leftingInfoRowLabel}>
          {translate('leftings.profile.label.created')}
        </Text>
        <Text>{timeCreated}</Text>
      </View>
      <Button onPress={() => Actions.leftingHistory()}>Show history</Button>
      <Button onPress={() => Actions.leftingClaim()}>Make a claim!</Button>
    </View>
  );
};

LeftingDetails.propTypes = {
  lefting: PropTypes.object.isRequired
};

export default LeftingDetails;
