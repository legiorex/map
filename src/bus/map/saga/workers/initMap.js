//Core
import { put, call, apply } from 'redux-saga/effects';

// Instruments
import { loadScript } from '../../../../instruments/helper';
import { GOOGLE } from '../../../../instruments/constants';

// Actions
import { mapActions } from '../../../map/actions';

const googleMap = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`;

export function* initMap () {

  try {
    yield call(() => new Promise((resolve) => loadScript(
      googleMap,
      () => {



        // window.google.maps.Map(ref);
        console.log('window', window.google.maps);
        resolve();
      }
    )).then(() => console.log('init Ok'), () => console.log('init Error')));
    yield put(mapActions.mapInit(window.google.maps));
    // window.google.maps.Map(ref, []);
    // yield console.log('test', test);
    // const ga = window.gapi.auth2.getAuthInstance();
    // const googleUser = yield call(() => new Promise((resolve, reject) => ga.signIn().then(resolve, reject)));
    // const jwt  = googleUser.getAuthResponse().id_token;

  } catch (err) {
    console.log('err', err);
    // reportError(provider, err);
  }
}
