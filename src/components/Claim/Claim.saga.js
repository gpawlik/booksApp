import { call, put, fork, takeLatest } from 'redux-saga/effects';

import {
  searchBooks
} from './Claim.service';
import { actionTypes as at } from './Claim.constants';
import {
  bookSearchSuccess,
  bookSearchFailure
} from './Claim.actions';
import {
  transformBookData
} from './Claim.model';

export function* bookSearch(action) {
  try {
    const result = yield call(searchBooks, action.query);
    const data = transformBookData(result);

    yield put(bookSearchSuccess(data));
  } catch (err) {
    yield put(bookSearchFailure(err));
  }
}

export function* claimWatcher() {
  yield fork(takeLatest, at.BOOK_SEARCH, bookSearch);
}
