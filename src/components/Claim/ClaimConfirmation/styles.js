import { StyleSheet } from 'react-native';

import colors from 'config/colors';

export default StyleSheet.create({
  container: {

  },
  sectionTitle: {
    padding: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#aaa',
    backgroundColor: '#fafafa'
  },
  topBox: {
    flexDirection: 'row',
    padding: 15
  },
  picture: {
    height: 100,
    backgroundColor: '#dedede',
    flexGrow: 1,
    flexBasis: 0
  },
  bookInfo: {
    flexGrow: 2,
    flexBasis: 0,
    padding: 10,
    justifyContent: 'center'
  },
  bookInfoTitle: {
    fontSize: 18,
    fontWeight: '600'
  },
  bookInfoAuthor: {
    color: '#dedede'
  },
  map: {
    height: 120,
    alignSelf: 'stretch'
  },
  comment: {
    height: 100,
    padding: 10,
    fontSize: 14
  },
  button: {
    backgroundColor: colors.primaryDark,
    color: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    overflow: 'hidden'
  }

});
