//Core
import { put, call, apply } from 'redux-saga/effects';

// Instruments
import { loadScript } from '../../../../instruments/helper';
import { GOOGLE } from '../../../../instruments/constants';

// Actions
import { googleInitActions } from '../../../google/actions';

export function* initGoogle () {

  yield console.log('object');

  // const fn = () => {

  //   window.gapi.auth2
  //     .init({
  //       client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  //     })
  //     .then(() => console.log('init Ok'), () => console.log('init Error'));
  // };

  // yield window.gapi.load('auth2', fn);

  const provider = GOOGLE.PROVIDER;

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

    // if (!googleAuthAvailable()) {
    //   yield call(() => new Promise((resolve) => loadScript(
    //     GOOGLE_SCRIPT,
    //     () => {
    //       const g = window.gapi;

    //       g.load('auth2', () => {
    //         g.auth2.init({
    //           client_id: GOOGLE_CLIENT_ID,
    //           scope:     GOOGLE_SCOPE,
    //         });
    //         resolve();
    //       });
    //     }
    //   )));
    // }
    const ga = window.gapi.auth2.getAuthInstance();
    const googleUser = yield call(() => new Promise((resolve, reject) => ga.signIn().then(resolve, reject)));
    const tokenId  = googleUser.getAuthResponse().id_token;

    console.log('googleUser', googleUser);
    console.log('tokenId', tokenId);

    // yield * authorize(provider, id_token);
  } catch (err) {
    console.log('err', err);
    // reportError(provider, err);
  }
}
