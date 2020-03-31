// Types
import { types } from './types';
const initialState = [];

export const markersReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.CREATE_MARKER:

      return [...state, action.payload];

    case types.REMOVE_MARKER:

      const updateState = state.filter((item) => item.markerId !== action.payload);

      return updateState;

    default:
      return state;
  }
};
