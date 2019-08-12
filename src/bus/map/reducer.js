// Types
import { types } from './types';
const initialState = {};

export const mapReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.MAP_INIT:

      return action.payload;

    default:
      return state;
  }
};
