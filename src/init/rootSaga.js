// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchGoogle } from '../bus/google/saga/watchers';

export function* rootSaga () {
  yield all([call(watchGoogle)]);
}
