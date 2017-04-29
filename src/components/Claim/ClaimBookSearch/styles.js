import { StyleSheet } from 'react-native';

import colors from 'config/colors';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  sectionTitle: {
    padding: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#aaa',
    backgroundColor: '#fafafa'
  },
  resultsBox: {
    height: 300
  },
  searchButton: {
    backgroundColor: colors.primaryDark,
    color: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    overflow: 'hidden'
  }
});
