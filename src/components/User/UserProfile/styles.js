import { StyleSheet } from 'react-native';

import colors from 'config/colors';

export default StyleSheet.create({
  profileTop: {
    height: 120,
    backgroundColor: colors.primaryDark,
    alignItems: 'center'
  },
  profileThumbnailBox: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#fff',
    borderWidth: 7,
    borderColor: '#dedede',
    overflow: 'hidden',
    marginTop: 15
  },
  profileThumbnail: {
    width: 130,
    height: 130
  },
  secondaryButton: {
    color: '#aeaeae',
    fontSize: 10
  },
  profileContent: {
    padding: 25,
    alignItems: 'stretch'
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 0,
    textAlign: 'center'
  },
  profileMetaTitle: {
    fontSize: 12,
    marginBottom: 15,
    textAlign: 'center'
  },
  profileLabel: {
    color: colors.primaryDark,
    fontSize: 10,
    textAlign: 'center'
  },
  profileInfo: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 15
  },
  profileSection: {
    marginTop: 10,
    marginBottom: 10
  },
  profileSectionTitle: {
    fontSize: 15
  },
  leftingItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#aeaeae',
    padding: 8
  },
  leftingItemTitle: {
    fontSize: 12
  },
  leftingItemSubTitle: {
    fontSize: 10
  },
  badgesBox: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 10,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  badge: {
    margin: 5
  },
  badgeText: {
    color: '#fff',
    lineHeight: 50,
    fontSize: 20
  }
});
