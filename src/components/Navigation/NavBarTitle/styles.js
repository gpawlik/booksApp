import {
  Platform,
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#EFEFF2',
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
    position: 'absolute',
    alignItems: 'center'
  },
  title: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 24
      },
      android: {
        top: 12
      },
      windows: {
        top: 10
      }
    })
  }
});
