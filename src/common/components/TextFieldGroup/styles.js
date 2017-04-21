import { StyleSheet } from 'react-native';

import colors from 'config/colors';

export default StyleSheet.create({
  inputBox: {
    marginBottom: 15,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1
  },
  label: {
    fontSize: 12,
    color: colors.primaryDark
  },
  input: {
    height: 30,
    lineHeight: 30
  }
});
