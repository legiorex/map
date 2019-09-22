// Types
import { types } from './types';

export const polylineActions = {
  
  createPolyline: (polyline) => {
    return {
      type:    types.CREATE_POLYLINE,
      payload: polyline,
    };
  },

};
