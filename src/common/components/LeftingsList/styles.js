import { Dimensions, StyleSheet } from 'react-native';

import colors from 'config/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 4,
    paddingBottom: 0,
    height: Dimensions.get('window').height - 114
  },
  item: {
    marginBottom: 4,
    backgroundColor: '#fff',
    borderRadius: 3,
    overflow: 'hidden'
  },
  pictureBox: {
    height: 150,
    backgroundColor: '#ddd',
    justifyContent: 'flex-end'
  },
  picture: {
    height: 150,
    alignSelf: 'stretch',
    resizeMode: 'cover'
  },
  itemInfoBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 5
  },
  itemBookTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingLeft: 5
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
