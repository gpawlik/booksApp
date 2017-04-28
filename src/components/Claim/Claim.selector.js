import { createSelector } from 'reselect';

const selectClaimStore = () => state => state.claimStore;

export const selectClaim = () => createSelector(
  selectClaimStore(),
  claimState => claimState.get('claim').toJS()
);

export const selectClaimBook = () => createSelector(
  selectClaimStore(),
  claimState => claimState.get('book').toJS()
);

export const selectSearchResults = () => createSelector(
  selectClaimStore(),
  claimState => claimState.get('searchResults').toJS()
);

export const selectSearchFormValid = () => createSelector(
  selectClaimStore(),
  claimState => claimState.get('isFormValid')
);
