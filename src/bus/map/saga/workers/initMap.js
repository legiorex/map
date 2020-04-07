//Core
import { put, call, apply } from 'redux-saga/effects';

// Instruments
import { loadScript } from '../../../../instruments/helper';

// Actions
import { mapActions } from '../../../map/actions';

const yandexMap = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.REACT_APP_YMAP_KEY}&lang=ru_RU`;

const getMap = () => {
  return loadScript(yandexMap, () => {

    return new Promise((resolve) => {
      resolve();
    }).then(() => window.ymaps.ready(), () => console.log('init Error'));

  });
};

export function* initMap () {

  try {

    yield call(getMap);

  } catch (err) {
    console.log('err', err);
  }
}
