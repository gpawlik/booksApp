import { fromJS } from 'immutable';

import { actionTypes as at} from './Claim.constants';

const initialState = fromJS({
  claim: {
    pictureUrl: '',
    comment: ''
  },
  searchForm: {
    title: '',
    author: '',
    isbn: ''
  },
  book: {
    id: '',
    title: '',
    author: '',
    isbn: '',
    published: '',
    publisher: '',
    pages: ''
  },
  searchResults: [],
  isFormValid: false,
  isSearching: false
});

export default (state = initialState, action) => {
  switch(action.type) {
    case at.CLAIM_SET_INFO:
      return state.setIn(['claim', action.id], action.value);
    case at.CLAIM_RESET_INFO:
      return state.set('claim', initialState.get('claim'));
    case at.BOOK_SEARCH:
      return state
        .set('isSearching', true);
    case at.BOOK_SEARCH_SUCCESS:
      return state
        .set('searchResults', fromJS(action.results))
        .set('book', initialState.get('book'))
        .set('isFormValid', false)
        .set('isSearching', false);
    case at.CLAIM_SET_BOOK:
    // TODO: some more elegant way to do it?
      const bookIndex = parseInt(action.index, 10);
      const results = state.get('searchResults').map(item => {
        return item.has('selected') ? item.remove('selected') : item;
      })
      .map((item, idx) => {
        return idx === bookIndex ? item.set('selected', true) : item;
      });

      return state
        .set('searchResults', results)
        .set('book', state.getIn(['searchResults', bookIndex]))
        .set('isFormValid', true);
    default:
      return state;
  }
};
