// Types
import { types } from './types';

export const markersActions = {
  // Sync
  createMarker: (marker) => {
    return {
      type:    types.CREATE_MARKER,
      payload: marker,
    };
  },
  removeMarker: (marker) => {
    return {
      type:    types.REMOVE_MARKER,
      payload: marker,
    };
  },

};
