import { StyleSheet } from 'react-native';

import colors from 'config/colors';

export default StyleSheet.create({
  toggleButtonBox: {
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 9999
  },
  buttonContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: colors.primaryDark,
    alignSelf: 'stretch'
  },
  toggleButton: {
    color: '#fff'
  }
});
