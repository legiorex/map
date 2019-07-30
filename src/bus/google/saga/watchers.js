// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { initGoogle } from './workers';

function* watchInitGoogle () {
  yield takeEvery(types.GOOGLE_INIT, initGoogle);
}

export function* watchGoogle () {
  yield all([call(watchInitGoogle)]);
}
