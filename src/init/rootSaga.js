// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchMap } from '../bus/map/saga/watchers';


export function* rootSaga () {
  yield all([call(watchMap)]);
}
