// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { getUsers } from './workers';

function* watchGetUsers () {
  yield takeEvery(types.FILL_USERS_ASYNC, getUsers);
}

export function* watchUsers () {
  yield all([call(watchGetUsers)]);
}
