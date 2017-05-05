import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    flexBasis: 120,
    color: '#999',
    fontSize: 14
  },
  handlerBox: {
    flexGrow: 1
  },
  picture: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#dedede'
  },
  input: {
    flex: 1,
    color: '#666',
    fontSize: 15
  },
  switcher: {
    alignSelf: 'flex-end'
  }
});
