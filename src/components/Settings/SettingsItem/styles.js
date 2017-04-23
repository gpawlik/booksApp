import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    height: 50,
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
    color: '#666',
    fontSize: 14,
    height: 20
  },
  switcher: {
    alignSelf: 'flex-end'
  }
});
