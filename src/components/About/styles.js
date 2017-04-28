import { StyleSheet } from 'react-native';

import colors from 'config/colors';

const section = {
  padding: 25,
  alignItems: 'center',
  justifyContent: 'center'
};

export default StyleSheet.create({
  contentWrapper: {

  },
  section: {
    ...section,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede'
  },
  sectionLast: {
    ...section
  },
  sectionHeader: {
    marginBottom: 15
  },
  sectionTitle: {
    color: colors.primaryDark,
    fontSize: 25,
    fontWeight: '600'
  },
  sectionContent: {

  },
  sectionText: {
    fontWeight: '200',
    color: '#999',
    lineHeight: 18
  }
});
