import React, { PropTypes } from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import translate from 'utils/translate';
import s from './styles';

const LeftingDetails = ({ lefting, isAdmin, deleteLefting }) => {
  // TODO: if no lefting data, redirect to error page
  const { _id, description, leftingDate, createdAt } = lefting;
  const leftingDateFormatted = moment(leftingDate).format('DD/MM/YYYY');
  const timeCreated = moment(createdAt).fromNow();
  const adminLinks = (
    <View>
      <Text onClick={() => deleteLefting(_id)}>delete</Text>
      <Button onPress={() => Actions.editLefting({ leftingId: _id })}>edit</Button>
    </View>
  );

  return (
    <View>
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
        {isAdmin && adminLinks}
      </View>
    </View>
  );
};

LeftingDetails.propTypes = {
  lefting: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool,
  deleteLefting: PropTypes.func
};

export default LeftingDetails;
