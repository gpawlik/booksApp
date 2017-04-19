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
