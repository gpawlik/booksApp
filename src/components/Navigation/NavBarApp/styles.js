import {
  Platform,
  StyleSheet
} from 'react-native';

import colors from 'config/colors';

export default StyleSheet.create({
  container: {
    paddingTop: 0,
    top: 0,
    ...Platform.select({
      ios: {
        height: 64
      },
      android: {
        height: 54
      },
      windows: {
        height: 54
      }
    }),
    right: 0,
    left: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: '#828287',
    position: 'absolute'
  },
  content: {
    flex: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#EFEFF2',
    alignSelf: 'stretch',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        borderTopWidth: 20
      },
      android: {
        borderTopWidth: 12
      },
      windows: {
        borderTopWidth: 10
      }
    })
  },
  logo: {
    alignSelf: 'center'
  },
  title: {
    fontSize: 18
  },
  backButton: {
    position: 'absolute',
    top: 14,
    left: 10
  }
});
