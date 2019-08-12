// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { initGoogle, signup, authenticate, initialize } from './workers';

function* watchInitGoogle () {
  yield takeEvery(types.GOOGLE_INIT, initGoogle);
}

function* watchSignup () {
  yield takeEvery(types.SIGNUP_ASYNC, signup);
}

function* watchAuthenticate () {
  yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate);
}
// function* watchLoginUser () {
//   yield takeEvery(types.LOGIN_ASYNC, loginForm);
// }
function* watchInitialize () {
  yield takeEvery(types.INITIALIZE_ASYNC, initialize);
}
// function* watchLogout () {
//   yield takeEvery(types.LOGOUT_ASYNC, logout);
// }

export function* watchAuth () {
  yield all([call(watchInitGoogle), call(watchInitialize), call(watchSignup), call(watchAuthenticate)]);
}
