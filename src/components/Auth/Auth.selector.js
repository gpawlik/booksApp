import { createSelector } from 'reselect';

const selectAuthStore = () => state => state.authStore;

export const selectAuthUser = () => createSelector(
  selectAuthStore(),
  authState => authState.get('user').toJS()
);

export const selectIsAuthenticated = () => createSelector(
  selectAuthStore(),
  authState => authState.get('isAuthenticated')
);
