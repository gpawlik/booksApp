import { fromJS } from 'immutable';

import {
  SET_CLAIM_INFO,
  RESET_CLAIM_INFO,
  BOOK_SEARCH_SUCCESS
} from './Claim.actionTypes';

const initialState = fromJS({
  claim: {
    picture: '',
    location: '',
    description: '',
    bookId: ''
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
  searchResults: []
});

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_CLAIM_INFO:
      return state.setIn(['claim', action.key], action.value);
    case RESET_CLAIM_INFO:
      return state.set('claim', initialState.get('claim'));
    case BOOK_SEARCH_SUCCESS:
      return state.set('searchResults', fromJS(action.results));
    default:
      return state;
  }
};
