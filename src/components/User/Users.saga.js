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
import {
  GET_USER_PROFILE_REQUEST,
  EDIT_USER_PROFILE_REQUEST
} from './Users.actionTypes';
import {
  fetchSuccess,
  fetchError,
  updateSuccess,
  updateError
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
    yield put(fetchError(err));
  }
}

export function* updateUser() {
  console.log('thats my man!');
  const currentUser = yield select(selectUser());
  const formData = yield select(selectUserForm());
  const data = transformUpdateData(currentUser, formData);

  try {
    const result = yield call(update, data);
    const userData = parseUpdateData({ result });

    yield put(updateSuccess(userData));
  } catch (err) {
    yield put(updateError(err));
  }
}

export function* userWatcher() {
  yield fork(takeLatest, GET_USER_PROFILE_REQUEST, fetchUser);
  yield fork(takeLatest, EDIT_USER_PROFILE_REQUEST, updateUser);
}
