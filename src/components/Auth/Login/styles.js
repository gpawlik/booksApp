import { StyleSheet } from 'react-native';

import colors from 'config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  formBox: {
    alignSelf: 'stretch',
    padding: 20
  },
  buttonContainer: {
    padding: 10,
    height: 40,
    marginTop: 20,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: colors.primaryDark,
    alignSelf: 'stretch'
  },
  button: {
    color: 'white'
  }
});
