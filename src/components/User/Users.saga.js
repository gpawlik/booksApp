import { call, put, fork, select, takeLatest } from 'redux-saga/effects';

import {
  fetchUser as fetch,
  updateUser as update
} from './Users.service';
import {
  parseFetchData,
  transformUpdateData,
  parseUpdateData
} from './Users.model';
import { actionTypes as at } from './Users.constants';
import {
  fetchSuccess,
  fetchFailure,
  updateSuccess,
  updateFailure
} from './Users.actions';
import {
  selectUser,
  selectUserForm
} from './Users.selector';

export function* fetchUser(action) {
  try {
    const result = yield call(fetch, action.user);
    const data = parseFetchData(result);

    yield put(fetchSuccess(data));
  } catch (err) {
    yield put(fetchFailure(err));
  }
}

export function* updateUser() {
  const currentUser = yield select(selectUser());
  const formData = yield select(selectUserForm());
  const transformed = transformUpdateData(currentUser, formData);

  try {
    const result = yield call(update, transformed);
    const data = parseUpdateData(result);

    yield put(updateSuccess(data));
  } catch (err) {
    yield put(updateFailure(err));
  }
}

export function* userWatcher() {
  yield fork(takeLatest, at.USER_GET_PROFILE, fetchUser);
  yield fork(takeLatest, at.USER_EDIT_PROFILE, updateUser);
}
