import { actionTypes as at } from './constants';

export const addMessage = message => {
  return {
    type: at.MESSAGES_ADD,
    message
  };
};

export const removeMessage = id => {
  return {
    type: at.MESSAGES_REMOVE,
    id
  };
};
