//Core
import { put, call, apply } from 'redux-saga/effects';

// Instruments
import { loadScript } from '../../../../instruments/helper';
import { GOOGLE } from '../../../../instruments/constants';

// Actions
import { authActions } from '../../../auth/actions';

export function* initGoogle () {

  try {
    yield call(() => new Promise((resolve) => loadScript(
      GOOGLE.SCRIPT,
      () => {
        const g = window.gapi;

        g.load('auth2', () => {
          g.auth2.init({
            client_id: GOOGLE.CLIENT_ID,
            scope:     GOOGLE.SCOPE,
          });
          resolve();
        });
      }
    )).then(() => console.log('init Ok'), () => console.log('init Error')));

    const ga = window.gapi.auth2.getAuthInstance();
    const googleUser = yield call(() => new Promise((resolve, reject) => ga.signIn().then(resolve, reject)));
    const jwt  = googleUser.getAuthResponse().id_token;

    yield put(authActions.signupAsync(jwt));
  } catch (err) {
    console.log('err', err);
    // reportError(provider, err);
  }
}
