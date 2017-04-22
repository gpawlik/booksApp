import {
  Platform,
  I18nManager,
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
    position: 'absolute'
  },
  rightButton: {
    height: 37,
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 22
      },
      android: {
        top: 10
      },
      windows: {
        top: 8
      }
    }),
    right: 2,
    padding: 8,
    flexDirection: 'row',
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }]
  }
});
