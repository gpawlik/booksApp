import { StyleSheet } from 'react-native';

import colors from 'config/colors';

export default StyleSheet.create({
  contentWrapper: {
    backgroundColor: '#fff'
  },
  section: {
  },
  sectionTitle: {
    padding: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#aaa',
    backgroundColor: '#fafafa'
  },
  sectionItems: {
    borderTopColor: '#dedede',
    borderTopWidth: 1
  },
  logoutButton: {
    padding: 15,
    color: colors.primaryDark,
    fontSize: 12
  }
});
