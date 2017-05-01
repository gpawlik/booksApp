import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    padding: 10,
    margin: 40,
    backgroundColor: 'red'
  }
});
