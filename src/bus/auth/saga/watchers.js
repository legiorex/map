// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { authenticate } from './workers';

function* watchAuthenticate () {
  yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate);
}

export function* watchAuth () {
  yield all([call(watchAuthenticate)]);
}
