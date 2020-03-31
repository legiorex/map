// Core
import { Map } from 'immutable';
// Types
import { types } from './types';

const initialState = Map({ polyline: null });

export const polylineReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.CREATE_POLYLINE:
      const newState = state.set('polyline', action.payload);

      return newState;

    default:
      return state;
  }
};
