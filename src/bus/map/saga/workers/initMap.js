//Core
import { put, call, apply } from 'redux-saga/effects';

// Instruments
import { loadScript } from '../../../../instruments/helper';
import { GOOGLE } from '../../../../instruments/constants';

// Actions
import { mapActions } from '../../../map/actions';

const googleMap = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.REACT_APP_GOOGLE_MAP_KEY}&lang=ru_RU`;

export function* initMap ({ payload: mapFunc }) {

  try {
    yield call(() => new Promise((resolve) => loadScript(
      googleMap,
      () => {

        // window.google.maps.Map(ref);
        // console.log('window', window.ymaps);

        resolve();
      }
    )).then(() => console.log('init Ok'), () => console.log('init Error')));

    // const map = yield call(() => new Promise(() => window.ymaps.ready(() => {
    //   return new ymaps.Map(ref, {
    //     center:   [55.74954, 37.621587],
    //     zoom:     10,
    //     controls: ['routePanelControl'],
    //   });

    // })).then(() => console.log('map'), () => console.log('init Error')));

    // console.log('map', map)
    // const map = yield window.ymaps.ready(() => {
    //   return new ymaps.Map(ref, {
    //     center:   [55.74954, 37.621587],
    //     zoom:     10,
    //     controls: ['routePanelControl'],
    //   });
    // });

    const map = yield window.ymaps.ready(mapFunc)
    // console.log(typeof map);
    // yield put(mapActions.mapInit(map));

    // const control = yield map.control;
    // var routePanel = myMap.controls.get('routePanelControl')
    // .routePanel;
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
