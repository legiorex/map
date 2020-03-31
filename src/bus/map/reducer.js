// Core
import { Map } from 'immutable';

// Types
import { types } from './types';
const initialState = Map(
  {
    mapApi: null,
    map:    null,
  });

export const mapReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.MAP_API:

      return state.set('mapApi', action.payload);

    case types.MAP_CURRENT:

      return state.set('map', action.payload);

    default:
      return state;
  }
};
