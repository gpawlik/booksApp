import { createSelector } from 'reselect';

const selectLeftingsStore = () => state => state.leftingsStore;

export const selectLeftings = () => createSelector(
  selectLeftingsStore(),
  leftingsState => leftingsState.get('leftings').toJS()
);

export const selectLefting = () => createSelector(
  selectLeftingsStore(),
  leftingsState => leftingsState.get('lefting').toJS()
);

export const selectLeftingsIsLoading = () => createSelector(
  selectLeftingsStore(),
  leftingsState => leftingsState.get('isLeftingsLoading')
);

export const selectLeftingIsLoading = () => createSelector(
  selectLeftingsStore(),
  leftingsState => leftingsState.get('isLeftingLoading')
);

export const selectLeftingsView = () => createSelector(
  selectLeftingsStore(),
  leftingsState => leftingsState.get('view')
);
