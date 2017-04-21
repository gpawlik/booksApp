import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  map: {
    //...StyleSheet.absoluteFillObject,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: Dimensions.get('window').height
  }
});
