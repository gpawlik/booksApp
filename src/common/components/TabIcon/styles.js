import { StyleSheet } from 'react-native';

const icon = {
  fontSize: 12
};

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  icon: {
    ...icon,
    color: '#333'
  },
  iconSelected: {
    ...icon,
    color: 'red'
  }
});
