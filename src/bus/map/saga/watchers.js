// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { initMap, renderMap, createPolyline } from './workers';

function* watchInitMap () {
  yield takeEvery(types.YANDEX_MAP_INIT, initMap);
}
function* watchRenderMap () {
  yield takeEvery(types.RENDER_MAP, renderMap);
}
function* watchCreatePolyline () {
  yield takeEvery(types.CREATE_POLYLINE, createPolyline);
}

export function* watchMap () {
  yield all([
    call(watchInitMap),
    call(watchRenderMap),
    call(watchCreatePolyline)
  ]);
}
