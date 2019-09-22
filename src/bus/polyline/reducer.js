// Core
import { Map } from 'immutable';
// Types
import { types } from './types';

const initialState = Map({ polyline: null });

export const polylineReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.CREATE_POLYLINE:

      return state.set('polyline', action.payload);

    default:
      return state;
  }
};
