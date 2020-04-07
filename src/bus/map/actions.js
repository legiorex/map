// Types
import { types } from './types';

export const mapActions = {

  getMapApi: (mapApi) => {
    return {
      type:    types.MAP_API,
      payload: mapApi,
    };
  },
  getMapRef: (map) => {
    return {
      type:    types.MAP_CURRENT,
      payload: map,
    };
  },

  // Async
  initYandexMap: () => {
    return {
      type: types.YANDEX_MAP_INIT,
    };
  },
  renderMap: (ref) => {
    return {
      type:    types.RENDER_MAP,
      payload: ref,
    };
  },
  createPolyline: (polylineState) => {
    return {
      type:    types.CREATE_POLYLINE,
      payload: polylineState,
    };
  },
};
