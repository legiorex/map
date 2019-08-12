// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { getGroups } from './workers';

function* watchGetGroups () {
  yield takeEvery(types.FILL_GROUPS_ASYNC, getGroups);
}

export function* watchGroups () {
  yield all([call(watchGetGroups)]);
}
