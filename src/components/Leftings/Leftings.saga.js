import { call, put, fork, takeLatest } from 'redux-saga/effects';

import {
  fetch,
  fetchSingle
} from './Leftings.service';
import { actionTypes as at } from './Leftings.constants';
import {
  fetchLeftingsSuccess,
  fetchLeftingsFailure,
  fetchLeftingsSingleSuccess,
  fetchLeftingsSingleFailure
} from './Leftings.actions';
import {
  transformLeftingsData,
  transformLeftingsSingleData
} from './Leftings.model';

export function* fetchLeftings() {
  try {
    const results = yield call(fetch);
    const data = transformLeftingsData(results);

    yield put(fetchLeftingsSuccess(data));
  } catch (err) {
    yield put(fetchLeftingsFailure(err));
  }
}

export function* fetchLeftingsSingle({ id }) {
  try {
    const result = yield call(fetchSingle, id);
    const data = transformLeftingsSingleData(result);

    yield put(fetchLeftingsSingleSuccess(data));
  } catch (err) {
    yield put(fetchLeftingsSingleFailure(err));
  }
}

export function* leftingsWatcher() {
  yield fork(takeLatest, at.LEFTINGS_FETCH, fetchLeftings);
  yield fork(takeLatest, at.LEFTINGS_FETCH_SINGLE, fetchLeftingsSingle);
}
