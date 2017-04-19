import { AsyncStorage } from 'react-native';

export const setItem = (key, value) => {
  return AsyncStorage.setItem(key, value);
};

export const getItem = key => {
  return AsyncStorage.getItem(key);
};

export const removeItem = key => {
  return AsyncStorage.removeItem(key);
};
