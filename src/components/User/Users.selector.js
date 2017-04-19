import { createSelector } from 'reselect';

const selectUsersStore = () => state => state.usersStore;

export const selectUsers = () => createSelector(
  selectUsersStore(),
  usersState => usersState.get('users').toJS()
);

export const selectUser = () => createSelector(
  selectUsersStore(),
  usersState => usersState.get('user').toJS()
);
