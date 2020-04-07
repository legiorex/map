//Core
import { put, call, apply } from 'redux-saga/effects';

// Actions
import { mapActions } from '../../../map/actions';

export function* renderMap ({ payload : ref }) {

  try {

    const map = yield new ymaps.Map(ref, {
      center:   [55.74954, 37.621587],
      zoom:     10,
      controls: ['routePanelControl'],
    });

    console.log('~: function*renderMap -> map', map);
    // yield put(mapActions.getMapRef(map));
    yield window.currentMap = map;

  } catch (err) {
    console.log('err', err);
  }
}
