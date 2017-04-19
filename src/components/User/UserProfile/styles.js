import { StyleSheet } from 'react-native';

import colors from 'config/colors';

export default StyleSheet.create({
  profileTop: {
    height: 120,
    backgroundColor: colors.primaryDark,
    alignItems: 'center'
  },
  profileThumbnail: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#fff',
    borderWidth: 7,
    borderColor: '#dedede',
    overflow: 'hidden',
    marginTop: 15
  },
  profileContent: {
    padding: 25,
    alignItems: 'stretch'
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
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
  profileInterests: {

  }
});
