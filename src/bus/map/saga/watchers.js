// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { initMap } from './workers';

function* watchInitMap () {
  yield takeEvery(types.GOOGLE_MAP_INIT, initMap);
}



export function* watchMap () {
  yield all([call(watchInitMap)]);
}
