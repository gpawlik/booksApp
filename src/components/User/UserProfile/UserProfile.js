import React from 'react';
import moment from 'moment';
import { Image, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import translate from 'utils/translate';
import s from './styles';

const UserProfile = ({ user, isCurrent }) => {
  const { _id, firstName, lastName, location, createdAt } = user;
  const timeCreated = moment(createdAt).fromNow();

  const locationField = (
    <Text style={s.profileMetaTitle}>{location}</Text>
  );
  const createdField = (
    <View>
      <Text style={s.profileLabel}>{translate('users.profile.label.created')}</Text>
      <Text style={s.profileInfo}>{timeCreated}</Text>
    </View>
  );
  const editProfileButton = (
    <Button
      onPress={() => Actions.editProfile()}
      style={s.secondaryButton}>edit profile</Button>
  );
  const showLeftingsButton = (
    <Button
      onPress={() => Actions.userLeftings()}
      style={s.secondaryButton}>show all</Button>
  );

  return (
    <View>
      <View style={s.profileTop}>
        <View style={s.profileThumbnailBox}>
          <Image style={s.profileThumbnail} source={{uri: 'https://unsplash.it/300/300/?random'}} />
        </View>
      </View>
      <View style={s.profileContent}>
        <Text style={s.profileTitle}>{`${firstName} ${lastName}`}</Text>
        {location && locationField}
        {createdField}
        {editProfileButton}
        <View style={s.profileSection}>
          <Text style={s.profileSectionTitle}>Your recent leftings:</Text>
          <View style={s.leftingItem}>
            <Text style={s.leftingItemTitle}>Lefting no2</Text>
            <Text style={s.leftingItemSubTitle}>Taken: 20/09/2017</Text>
          </View>
          <View style={s.leftingItem}>
            <Text style={s.leftingItemTitle}>Lefting no3</Text>
            <Text style={s.leftingItemSubTitle}>Taken: 25/09/2017</Text>
          </View>
          {showLeftingsButton}
        </View>

        <View style={s.profileSection}>
          <Text style={s.profileSectionTitle}>Your badges:</Text>
          <View style={s.badgesBox}>
            <View style={s.badge}>
              <Text style={s.badgeText}>A</Text>
            </View>
            <View style={s.badge}>
              <Text style={s.badgeText}>B</Text>
            </View>
            <View style={s.badge}>
              <Text style={s.badgeText}>C</Text>
            </View>
            <View style={s.badge}>
              <Text style={s.badgeText}>D</Text>
            </View>
            <View style={s.badge}>
              <Text style={s.badgeText}>E</Text>
            </View>
            <View style={s.badge}>
              <Text style={s.badgeText}>F</Text>
            </View>
            <View style={s.badge}>
              <Text style={s.badgeText}>G</Text>
            </View>
            <View style={s.badge}>
              <Text style={s.badgeText}>H</Text>
            </View>
          </View>
        </View>
      </View>
      {isCurrent && <Button onPress={() => Actions.editProfile({ userId: _id })} style={s.buttonSecondary}>{translate('users.profile.editButton')}</Button>}
    </View>
  );
};

UserProfile.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default UserProfile;
