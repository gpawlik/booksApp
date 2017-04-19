import { StyleSheet } from 'react-native';

import colors from 'config/colors';

export default StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: colors.primaryDark,
    marginTop: 10,
    fontWeight: '600'
  }
});
