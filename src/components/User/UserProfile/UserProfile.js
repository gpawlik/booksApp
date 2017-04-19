import React from 'react';
import moment from 'moment';
import shortid from 'shortid';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import translate from 'utils/translate';
import s from './styles';

const UserProfile = ({ user, isCurrent }) => {
  const { _id, firstName, lastName, email, location, interests = [], createdAt } = user;
  const timeCreated = moment(createdAt).fromNow();

  const emailField = (
    <View>
      <Text style={s.profileLabel}>Email</Text>
      <Text style={s.profileInfo}>{email}</Text>
    </View>
  );
  const locationField = (
    <View>
      <Text style={s.profileLabel}>Location</Text>
      <Text style={s.profileInfo}>{location}</Text>
    </View>
  );
  const interestsField = (
    <View style={s.profileInterests}>
      <Text style={s.profileLabel}>{translate('users.profile.label.interests')}</Text>
      {interests.map(interest => <Text key={shortid.generate()} style={s.buttonLabel}>{interest}</Text>)}
    </View>
  );
  const createdField = (
    <View>
      <Text style={s.profileLabel}>{translate('users.profile.label.created')}</Text>
      <Text style={s.profileInfo}>{timeCreated}</Text>
    </View>
  );

  return (
    <View>
      <View style={s.profileTop}>
        <View style={s.profileThumbnail}></View>
      </View>
      <View style={s.profileContent}>

        <Text style={s.profileTitle}>{`${firstName} ${lastName}`}</Text>

        {email && emailField}

        {location && locationField}

        {(interests && interests.length > 0) && interestsField}

        {createdField}

      </View>
      {isCurrent && <Button onPress={() => Actions.editProfile({ userId: _id })} style={s.buttonSecondary}>{translate('users.profile.editButton')}</Button>}
    </View>
  );
};

UserProfile.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default UserProfile;
