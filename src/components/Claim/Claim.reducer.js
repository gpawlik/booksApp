import { fromJS } from 'immutable';

import {
  SET_CLAIM_INFO,
  RESET_CLAIM_INFO,
  SET_CLAIM_BOOK,
  BOOK_SEARCH_SUCCESS
} from './Claim.actionTypes';

const initialState = fromJS({
  claim: {
    pictureUrl: '',
    location: '41.222,2.054',
    comment: 'Some amazing book',
    bookId: '123456'
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
  isFormValid: false
});

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_CLAIM_INFO:
      return state.setIn(['claim', action.id], action.value);
    case RESET_CLAIM_INFO:
      return state.set('claim', initialState.get('claim'));
    case BOOK_SEARCH_SUCCESS:
      return state
        .set('searchResults', fromJS(action.results))
        .set('book', initialState.get('book'))
        .set('isFormValid', false);
    case SET_CLAIM_BOOK:
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
