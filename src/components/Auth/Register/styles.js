import { StyleSheet } from 'react-native';

import colors from 'config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  scrollBox: {
    paddingTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
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
