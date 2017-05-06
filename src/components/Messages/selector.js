import { createSelector } from 'reselect';

const selectMessagesStore = () => state => state.messagesStore;

export const selectMessage = () => createSelector(
  selectMessagesStore(),
  messagesState => messagesState.get('message').toJS()
);
