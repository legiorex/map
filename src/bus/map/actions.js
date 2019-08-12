// Types
import { types } from './types';

export const mapActions = {
  // Sync
  mapInit: (map) => {
    return {
      type:    types.MAP_INIT,
      payload: map,
    };
  },

  // Async
  mapScript: (ref) => {
    return {
      type:    types.GOOGLE_MAP_INIT,
      payload: ref,
    };
  },

};
