import { StyleSheet } from 'react-native';

import colors from 'config/colors';

const selectButton = {
  width: 36,
  height: 36,
  borderRadius: 18,
  overflow: 'hidden',
  marginRight: 8,
  alignItems: 'center',
  justifyContent: 'center'
};

export default StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectButton: {
    ...selectButton,
    backgroundColor: '#ddd'
  },
  selectButtonActive: {
    ...selectButton,
    backgroundColor: colors.primaryGreen
  },
  image: {
    width: 75,
    height: 100,
    backgroundColor: '#ddd',
    marginRight: 10
  },
  info: {
    fontSize: 14,
    marginBottom: 3
  },
  infoLabel: {
    fontWeight: '600',
    paddingRight: 5
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600'
  },
  bookAuthor: {
    fontSize: 14,
    color: '#999',
    marginBottom: 7
  }
});
