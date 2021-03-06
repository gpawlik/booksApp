import { createSelector } from 'reselect';

const selectUsersStore = () => state => state.usersStore;

export const selectUser = () => createSelector(
  selectUsersStore(),
  usersState => usersState.get('user').toJS()
);

export const selectUserInfo = () => createSelector(
  selectUsersStore(),
  usersState => usersState.getIn(['user', 'info']).toJS()
);

export const selectUserLocation = () => createSelector(
  selectUsersStore(),
  usersState => usersState.getIn(['user', 'location']).toJS()
);

export const selectUserId = () => createSelector(
  selectUsersStore(),
  usersState => usersState.getIn(['user', 'id'])
);

export const selectUserForm = () => createSelector(
  selectUsersStore(),
  usersState => usersState.get('userForm').toJS()
);

export const selectIsLoading = () => createSelector(
  selectUsersStore(),
  usersState => usersState.get('isLoading')
);
