import { StyleSheet } from 'react-native';

import colors from 'config/colors';

const metaItem = {
  padding: 15,
  flexGrow: 1,
  flexBasis: 0,
  borderRightWidth: 1,
  borderRightColor: '#dedede',
  alignItems: 'center'
};

export default StyleSheet.create({
  picture: {
    backgroundColor: '#ddd',
    height: 200
  },
  actionBox: {
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    padding: 6
  },
  buttonCheckoutContainer: {
    borderRadius: 3,
    overflow: 'hidden',
    marginRight: 3,
    flexGrow: 1,
    flexBasis: 0
  },
  buttonCheckout: {
    backgroundColor: colors.primaryGreen,
    color: '#fff',
    padding: 10,
    fontSize: 16,
    fontWeight: '200'
  },
  buttonHistoryContainer: {
    borderRadius: 3,
    overflow: 'hidden',
    marginRight: 3,
    flexGrow: 1,
    flexBasis: 0
  },
  buttonHistory: {
    backgroundColor: '#16a085',
    color: '#fff',
    padding: 10,
    fontSize: 16,
    fontWeight: '200'
  },
  headerBox: {
    padding: 10,
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600'
  },
  headerAuthor: {
    fontSize: 14,
    color: '#999'
  },
  metaBox: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#dedede',
    borderBottomColor: '#dedede',
    flexDirection: 'row'
  },
  metaItem,
  metaItemLast: {
    ...metaItem,
    borderRightWidth: 0
  },
  metaLabel: {
    fontSize: 10,
    color: '#aeaeae'
  },
  metaDataShort: {
    fontSize: 14,
    color: '#999'
  },
  metaDataLong: {
    fontSize: 12,
    color: '#999'
  },
  rating: {
    marginTop: 4
  },
  bookDescriptionBox: {
    padding: 10
  },
  bookDescription: {
    fontSize: 14
  }
});
