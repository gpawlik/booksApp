import { StyleSheet } from 'react-native';

import colors from 'config/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 4,
    paddingBottom: 0
  },
  item: {
    marginBottom: 4,
    backgroundColor: '#fff',
    borderRadius: 3,
    overflow: 'hidden'
  },
  itemPicture: {
    height: 150,
    backgroundColor: '#ddd',
    padding: 10,
    justifyContent: 'flex-end'
  },
  itemBookTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 5
  },
  itemBookAuthorBox: {
    flexDirection: 'row'
  },
  itemBookAuthor: {
    backgroundColor: colors.primaryDark,
    padding: 5,
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    borderRadius: 3,
    overflow: 'hidden'
  },
  itemInfo: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemIcon: {
    backgroundColor: '#dedede',
    width: 25,
    height: 25,
    marginLeft: 10,
    borderRadius: 25,
    overflow: 'hidden'
  },
  itemDate: {
    fontSize: 10,
    color: '#999'
  },
  infoSection: {
  },
  buttonContainer: {
    height: 40,
    borderLeftWidth: 1,
    borderLeftColor: '#dedede',
    backgroundColor: '#fafafa'
  },
  button: {
    color: '#dedede',
    fontSize: 10,
    lineHeight: 40,
    width: 100
  }
});
