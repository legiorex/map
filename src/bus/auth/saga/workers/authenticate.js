//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST/api';
import { authActions } from '../../../auth/actions';
// import { uiActions } from '../../../ui/actions';
// import { profileActions } from '../../../profile/actions';

export function* authenticate () {

  const token = yield apply(localStorage, localStorage.getItem, ['token']);

  console.log('localStorage token', token);
  const response = yield apply(api, api.auth.authenticate, [token]);

  console.log('response', response);

  //   try {
  //     yield put(uiActions.startFetching());

  //     const response = yield apply(api, api.auth.authenticate);
  //     const { data: profile, message } = yield apply(response, response.json);

  //     if (response.status !== 200) {
  //       if (response.status === 401) {
  //         yield apply(localStorage, localStorage.removeItem, ['token']);
  //         yield apply(localStorage, localStorage.removeItem, ['remember']);

  //         return null;
  //       }
  //       throw new Error(message);
  //     }
  //     yield apply(localStorage, localStorage.setItem, ['token', profile.token]);

  //     yield put(profileActions.fillProfile(profile));
  //     yield put(authActions.authenticate());
  //     yield put(actions.change('forms.user.profile.firstName', profile.firstName));
  //     yield put(actions.change('forms.user.profile.lastName', profile.lastName));
  //   } catch (error) {

  //     yield put(uiActions.emitError(error, 'authenticate worker'));

  //   } finally {
  //     yield put(uiActions.stopFetching());
  //     yield put(authActions.initialize());
  //   }

}
