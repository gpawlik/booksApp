import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: Dimensions.get('window').height - 114
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#999'
  }
});
