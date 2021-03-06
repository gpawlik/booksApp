import { StyleSheet } from 'react-native';

import { RED } from 'config/colors';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  resultsContainer: {
    flex: 1,
    marginBottom: 60
  },
  resultsBox: {

  },
  searchBoxInfo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 15
  },
  searchBoxText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#999'
  },
  buttonBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  searchButton: {
    backgroundColor: RED,
    color: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    overflow: 'hidden'
  }
});
