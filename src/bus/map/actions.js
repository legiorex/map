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

};
