// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { getDepart } from './workers';

function* watchGetDepart () {
  yield takeEvery(types.FILL_DEPART_ASYNC, getDepart);
}

export function* watchDepartments () {
  yield all([call(watchGetDepart)]);
}
